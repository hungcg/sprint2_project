package com.example.be_sprint2.service.impl;
import com.example.be_sprint2.dto.IOrderDto;
import com.example.be_sprint2.dto.OrderDetailsDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface IOrderService {

    Page<IOrderDto> getOrderByUserId(Pageable pageable,
                                       Integer userId,
                                       String orderCode);

    List<OrderDetailsDto> findOrderDetailByUserIdAndOrderId(Integer userId, Integer orderId);

}
