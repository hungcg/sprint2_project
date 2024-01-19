package com.example.be_sprint2.dto;

public interface CartDto {
    Integer getCartItemId();
    Integer getQuantityOrder();
    Integer getProductId();
    String getProductName();
    String getProductDescription();
    String getSizeName();
    Double getSizePrice();
    String getImageName();
    String getUserName();
    String getUserPhone();
    String getUserAddress();
}
