package com.example.be_sprint2.dto;

import java.util.Date;

public interface IOrderDto {
    Integer getOrderId();

    Double getTotalMoney();

    Integer getUserId();

    Date getDateOfOrder();

    String getOrderCode();
}
