package com.example.be_sprint2.controller;
import com.example.be_sprint2.dto.CartDto;
import com.example.be_sprint2.service.impl.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import static com.example.be_sprint2.comon.Enum.ADD_TO_CART;
import static com.example.be_sprint2.comon.Enum.REMOVE_FROM_CART;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private ICartService cartService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<CartDto>> getCartDetailsByUserId(@PathVariable Integer userId) {
        List<CartDto> cartDtoList = cartService.getCartDetailsByUserId(userId);
        if (cartDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cartDtoList, HttpStatus.OK);
        }
    }

    @GetMapping("/{userId}/{productId}/{quantity}")
    public ResponseEntity<?> addNewProductToCart(
            @PathVariable(name = "userId") Integer userId,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.addToCart(userId, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/add/{userId}/{productId}/{quantity}")
    public ResponseEntity<?> addProductsToCart(
            @PathVariable(name = "userId") Integer userId,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.adjustmentProductInCart(ADD_TO_CART, userId, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/remove/{userId}/{productId}/{quantity}")
    public ResponseEntity<?> removeProductsInCart(
            @PathVariable(name = "userId") Integer userId,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.adjustmentProductInCart(REMOVE_FROM_CART, userId, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @DeleteMapping("/{userId}/{productId}")
    public ResponseEntity<?> removeProduct(@PathVariable(name = "userId") Integer userId,
                                           @PathVariable(name = "productId") Integer productId) {

        boolean flag = this.cartService.removeFromCart(userId, productId);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}