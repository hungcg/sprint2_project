package com.example.be_sprint2.repository;
import com.example.be_sprint2.model.product.Size;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ISizeRepository extends JpaRepository<Size, Long> {
}
