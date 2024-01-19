package com.example.be_sprint2.repository;
import com.example.be_sprint2.model.product.Category;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
