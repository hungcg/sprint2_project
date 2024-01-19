package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Size;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ISizeRepository extends JpaRepository<Size, Integer> {
    @Query(value = "select * from size " +
            "join product on size.product_id = product.id " +
            "where size.product_id = :productId ", nativeQuery = true)
    Size findAllByProduct(Integer productId);

}
