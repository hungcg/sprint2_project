package com.example.be_sprint2.service;

import com.example.be_sprint2.dto.ProductDto;

import java.util.List;

public interface IProductService {

    List<ProductDto> findAll();
}
