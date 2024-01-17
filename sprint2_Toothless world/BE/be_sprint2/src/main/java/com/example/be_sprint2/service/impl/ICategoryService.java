package com.example.be_sprint2.service.impl;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICategoryService {
    List<Category> findAllCategory();
}
