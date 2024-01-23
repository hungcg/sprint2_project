package com.example.be_sprint2.dto;


public interface OrderDetailsDto {
    Integer getUserId();

    Integer getOrderId();

    Double getPriceOrder();

    Integer getProductId();

    Integer getQuantity();

    String getCategoryName();

    String getProductName();
    String getImageName();
}

