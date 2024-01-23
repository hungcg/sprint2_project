package com.example.be_sprint2.repository;
import com.example.be_sprint2.model.product.Category;

import com.example.be_sprint2.model.product.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ICategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = "SELECT id, name, product_id\n" +
            "FROM (\n" +
            "    SELECT c.id, c.name, c.product_id,\n" +
            "           ROW_NUMBER() OVER (PARTITION BY c.name ORDER BY c.id) AS row_num\n" +
            "    FROM category c\n" +
            ") AS numbered\n" +
            "WHERE row_num = 1;;", nativeQuery = true)
    List<Category> findAll();
}
