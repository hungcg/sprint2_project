package com.example.be_sprint2.service;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository repository;

    @Override
    public List<ProductDto> findAll() {
        return repository.findAllProDuct();
    }
}
