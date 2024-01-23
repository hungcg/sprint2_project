package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.OrderDetailsDto;
import com.example.be_sprint2.model.cart.Cart;
import com.example.be_sprint2.model.cart.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

    @Query(value = "SELECT\n" +
            "    u.id AS userId,\n" +
            "    o.id AS orderId,\n" +
            "    od.price_order AS priceOrder,\n" +
            "    p.id AS productId,\n" +
            "    od.quantity,\n" +
            "    c.name AS categoryName,\n" +
            "    p.name AS productName,\n" +
            "    i.name AS imageName,\n" +
            "    o.total_money AS totalMoney,\n" +
            "    o.order_code AS orderCode,\n" +
            "    o.date_of_order AS dateOfOrder\n" +
            "FROM\n" +
            "    order_detail od\n" +
            "JOIN\n" +
            "    orders o ON od.order_id = o.id\n" +
            "JOIN\n" +
            "    product p ON od.product_id = p.id\n" +
            "JOIN\n" +
            "    user u ON o.user_id = u.id\n" +
            "LEFT JOIN\n" +
            "    image i ON p.id = i.product_id\n" +
            "LEFT JOIN\n" +
            "    category c ON p.id = c.product_id\n" +
            "WHERE\n" +
            "    u.id = :userId AND\n" +
            "    o.id = :orderId AND od.is_deleted = 0  ", nativeQuery = true)
    List<OrderDetailsDto> findOrderDetails(@Param("userId") Integer userId,
                                           @Param("orderId") Integer orderId);
}
