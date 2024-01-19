package com.example.be_sprint2.service;
import com.example.be_sprint2.dto.CartDto;
import com.example.be_sprint2.model.auth.User;
import com.example.be_sprint2.model.cart.Cart;
import com.example.be_sprint2.model.product.Product;
import com.example.be_sprint2.repository.ICartRepository;
import com.example.be_sprint2.service.impl.ICartService;
import com.example.be_sprint2.service.impl.IProductService;
import com.example.be_sprint2.service.impl.IUserService;
import jakarta.transaction.Transactional;
import org.hibernate.TransactionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
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


}

