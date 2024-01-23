package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.CartDto;
import com.example.be_sprint2.model.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {

    @Query(value = "SELECT ca.id AS cartItemId, ca.quantity_order AS quantityOrder, " +
            "p.id AS productId, p.name AS productName, " +
            "p.description AS productDescription, s.name AS sizeName, " +
            "s.price AS sizePrice, i.name AS imageName, " +
            "u.name AS userName, u.phone AS userPhone, u.address AS userAddress " +
            "FROM cart ca " +
            "JOIN product p ON ca.product_id = p.id " +
            "JOIN `size` s ON ca.product_id = s.product_id " +
            "LEFT JOIN image i ON ca.product_id = i.product_id " +
            "JOIN `user` u ON ca.user_id = u.id " +
            "WHERE ca.user_id = :userId AND ca.is_deleted = false ", nativeQuery = true)
    List<CartDto> getCartDetailsByUserId(@Param("userId") Integer userId);


    @Query(value = "SELECT c.* " +
            "FROM cart AS c  " +
            "JOIN product AS p ON c.product_id = p.id " +
            "WHERE c.product_id = :productId AND c.user_id = :userId AND c.is_deleted = 0 ", nativeQuery = true)
    Optional<Cart> checkExistProductInCart(@Param("userId") Integer userId,
                                           @Param("productId") Integer productId);


    @Transactional
    @Modifying
    @Query(value = "DELETE c.* " +
            "FROM cart AS c  " +
            "JOIN product AS p ON c.product_id = p.id " +
            "WHERE c.product_id = :productId AND c.user_id = :userId AND c.is_deleted = 0 ", nativeQuery = true)
    void removeByUserAndProduct(@Param("userId") Integer userId,
                                @Param("productId") Integer productId);


    @Transactional
    @Modifying
    @Query(value =
            "DELETE FROM cart " +
                    "WHERE user_id = :userId AND is_deleted = 0 ", nativeQuery = true)
    void removeByUser(Integer userId);

}
