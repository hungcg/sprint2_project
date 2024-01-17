package com.example.be_sprint2.service.impl;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductService {

    Product findProductById(Integer id);

    Page<ProductDto> findAll(Pageable pageable,
                            String name,
                             String sizeName,
                             String categoryName,
                             Integer minPrice,
                             Integer maxPrice);
}
