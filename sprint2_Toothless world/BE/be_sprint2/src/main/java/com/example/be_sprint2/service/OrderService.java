package com.example.be_sprint2.service;

import com.example.be_sprint2.dto.IOrderDto;
import com.example.be_sprint2.dto.OrderDetailsDto;
import com.example.be_sprint2.repository.IOrderDetailRepository;
import com.example.be_sprint2.repository.IOrderRepository;
import com.example.be_sprint2.service.impl.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    @Autowired
    private IOrderDetailRepository orderDetailRepository;


    @Override
    public Page<IOrderDto> getOrderByUserId(Pageable pageable, Integer userId, String orderCode) {
        return orderRepository.findAllOrder(pageable, userId, '%' + orderCode + '%');
    }

    @Override
    public List<OrderDetailsDto> findOrderDetailByUserIdAndOrderId(Integer userId, Integer orderId) {
        return orderDetailRepository.findOrderDetails(userId, orderId);
    }
}
