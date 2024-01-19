package com.example.be_sprint2.service;

import com.example.be_sprint2.comon.OrderCodeGenerator;
import com.example.be_sprint2.dto.CartDto;
import com.example.be_sprint2.dto.OrderPayDto;
import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.auth.User;
import com.example.be_sprint2.model.cart.Cart;
import com.example.be_sprint2.model.cart.Order;
import com.example.be_sprint2.model.cart.OrderDetail;
import com.example.be_sprint2.model.product.Product;
import com.example.be_sprint2.model.product.Size;
import com.example.be_sprint2.repository.ICartRepository;
import com.example.be_sprint2.repository.IOrderDetailRepository;
import com.example.be_sprint2.repository.IOrderRepository;
import com.example.be_sprint2.service.impl.ICartService;
import com.example.be_sprint2.service.impl.IProductService;
import com.example.be_sprint2.service.impl.ISizeService;
import com.example.be_sprint2.service.impl.IUserService;
import jakarta.transaction.Transactional;
import org.hibernate.TransactionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.example.be_sprint2.comon.Enum.ADD_TO_CART;
import static com.example.be_sprint2.comon.Enum.REMOVE_FROM_CART;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IUserService userRepository;
    @Autowired
    private IProductService productRepository;
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Autowired
    private ISizeService sizeService;
    private static final Logger logger = LoggerFactory.getLogger(CartService.class);

    @Override
    public List<CartDto> getCartDetailsByUserId(Integer userId) {
        return cartRepository.getCartDetailsByUserId(userId);
    }

    @Override
    public boolean addToCart(Integer userId, Integer productId, Integer quantityOrder) {
        try {
            Optional<User> existUser = this.userRepository.findById((userId));
            Optional<Product> existProduct = this.productRepository.findProductById(productId);
            Optional<Cart> existCart = this.cartRepository.checkExistProductInCart(userId, productId);

            boolean isDatavalid = existUser.isPresent() && existProduct.isPresent();

            if (isDatavalid && existCart.isPresent()) {
                Optional<Cart> cart = this.cartRepository.checkExistProductInCart(userId, productId);


                if (cart.isPresent()) {
                    Integer prevQuantity = cart.get().getQuantityOrder();
                    cart.get().setQuantityOrder(prevQuantity + quantityOrder);
                    this.cartRepository.save(cart.get());
                    return true;
                }

            } else if (isDatavalid && !existCart.isPresent()) {
                Cart newCart = new Cart(existUser.get(), existProduct.get(), quantityOrder);
                this.cartRepository.save(newCart);
                return true;
            } else {
                return false;
            }
        } catch (IllegalArgumentException e) {
            logger.warn("IllegalArgumentException: {}", e.getMessage());
        } catch (TransactionException e) {
            logger.warn("TransactionException: {}", e.getMessage());
        } catch (Exception e) {
            logger.warn("Error while add new cart: {}", e.getMessage());
        }
        return false;
    }


    @Transactional
    @Override
    public boolean adjustmentProductInCart(String actionCase, Integer userId, Integer productId, Integer quantityOrder) {
        switch (actionCase) {
            case ADD_TO_CART:
                System.out.println("------------ add");
                return this.addToCart(userId, productId, quantityOrder);
            case REMOVE_FROM_CART:
                System.out.println("------------ remove");
                return this.addToCart(userId, productId, -quantityOrder);
            default:
                return false;
        }
    }


    @Override
    public boolean removeFromCart(Integer userId, Integer productId) {
        try {
            Optional<Cart> existCart = this.cartRepository.checkExistProductInCart(userId, productId);
            if (existCart.isPresent()) {
                this.cartRepository.removeByUserAndProduct(userId, productId);
                return true;
            }
        } catch (IllegalArgumentException e) {
            logger.warn("IllegalArgumentException: {}", e.getMessage());
        } catch (TransactionException e) {
            logger.warn("TransactionException: {}", e.getMessage());
        } catch (Exception e) {
            logger.warn("Error while remove product from cart: {}", e.getMessage());
        }
        return false;
    }

    @Override
    public boolean cartPay(OrderPayDto orderPayDto) {
        try {
            Integer userId = orderPayDto.getUserId();
            String orderCode = OrderCodeGenerator.orderCodeGenerate();
            Optional<User> existedUser = this.userRepository.findById(userId);
            LocalDateTime now = LocalDateTime.now();

            if (existedUser.isPresent()) {
                Order newOrder = new Order(existedUser.get(), now.toString(), orderCode);
                List<CartDto> existedUserCart = this.cartRepository.getCartDetailsByUserId(userId);

//                this.orderRepository.save(newOrder);
                if (existedUserCart.size() > 0) {
                    this.orderRepository.save(newOrder);
                    for (CartDto cartDto : existedUserCart) {

                        Optional<Product> curProduct = this.productRepository.findProductById(cartDto.getProductId());
                        if (curProduct.isPresent()) {
                            Size sizePrice = this.sizeService.findAllByProduct(curProduct.get().getId());
                            int newQty = cartDto.getQuantityOrder();
                            double newTotalCost = cartDto.getQuantityOrder() * sizePrice.getPrice();

                            OrderDetail newOrderDetail = new OrderDetail(newQty, newTotalCost, newOrder, curProduct.get());
                            this.orderDetailRepository.save(newOrderDetail);
                        } else {
                            return false;
                        }
                    }
                    this.cartRepository.removeByUser(userId);
                    return true;
                } else {
                    return false;
                }

            } else {
                return false;
            }
        } catch (Exception e) {
            logger.warn("Error while get paying cart: {}", e.getMessage());
        }
        return false;
    }

    @Override
    public String orderCodeGenerating() {
        String orderCode = OrderCodeGenerator.orderCodeGenerate();
        String existedCode = this.orderRepository.isCodeExisted(orderCode);
        while (existedCode != null) {
            orderCode = OrderCodeGenerator.orderCodeGenerate();
            existedCode = this.orderRepository.isCodeExisted(orderCode);
        }
        return orderCode;
    }

}

