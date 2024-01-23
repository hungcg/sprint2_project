package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Size;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ISizeRepository extends JpaRepository<Size, Integer> {
    @Query(value = "SELECT s.id , s.name ,s.price ,s.quantity , " +
            "            s.product_id,s.status " +
            "            FROM size s" +
            "            JOIN product ON s.product_id = product.id " +
            "            WHERE s.product_id = :productId ", nativeQuery = true)
    Size findAllByProduct(Integer productId);


    @Query(value = "SELECT id, name, price, quantity, product_id, status\n" +
            "FROM (\n" +
            "    SELECT s.id, s.name, s.price, s.quantity, s.product_id, s.status,\n" +
            "           ROW_NUMBER() OVER (PARTITION BY s.name ORDER BY s.id) AS row_num\n" +
            "    FROM size s\n" +
            "    JOIN product ON s.product_id = product.id\n" +
            ") AS numbered\n" +
            "WHERE row_num = 1;", nativeQuery = true)
    List<Size> findAll();


}
