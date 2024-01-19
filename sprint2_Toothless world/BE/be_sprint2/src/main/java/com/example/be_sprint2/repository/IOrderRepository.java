package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.IOrderDto;
import com.example.be_sprint2.dto.OrderDetailsDto;
import com.example.be_sprint2.model.cart.Order;
import com.example.be_sprint2.model.cart.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Order,Integer>{

    @Query(value = "SELECT " +
            "    o.id AS orderId, " +
            "    o.total_money AS totalMoney, " +
            "    o.user_id AS userId, " +
            "    o.date_of_order AS dateOfOrder, " +
            "    o.order_code AS orderCode " +
            "FROM orders o " +
            "JOIN user u ON o.user_id = u.id " +
            "WHERE o.user_id = :userId " +
            "AND o.order_code = :orderCode " +
            "AND o.is_deleted = 0 ", nativeQuery = true)
    List<IOrderDto> findAllOrder(@Param("userId") Integer userId,
                                 @Param("orderCode") String orderCode);
}
