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

    @Query(value = "SELECT u.id AS userId, od.order_id AS orderId, od.price_order AS priceOrder, " +
            "       od.product_id AS productId, od.quantity AS quantity, c.name AS categoryName, " +
            "       p.name AS productName " +
            "FROM order_detail od " +
            "JOIN product p ON od.product_id = p.id " +
            "JOIN user u ON od.order_id = u.account_id " +
            "LEFT JOIN category c ON p.id = c.product_id " +
            "WHERE u.id = :userId AND od.id = :orderId AND od.is_deleted = 0  ", nativeQuery = true)
    List<OrderDetailsDto> findOrderDetails(@Param("userId") Integer userId,
                                           @Param("orderId") Integer orderId);
}
