package com.example.be_sprint2.service.impl;

import com.example.be_sprint2.dto.CartDto;
import com.example.be_sprint2.model.cart.Cart;

import java.util.List;

public interface ICartService {
    List<CartDto> getCartDetailsByUserId(Integer userId);

    boolean addToCart(Integer userId, Integer productId, Integer quantityOrder);

    boolean adjustmentProductInCart(String actionCase,Integer userId, Integer productId, Integer quantityOrder);

    boolean removeFromCart(Integer userId, Integer productId);

}
