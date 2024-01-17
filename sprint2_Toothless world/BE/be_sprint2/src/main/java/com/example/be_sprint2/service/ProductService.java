package com.example.be_sprint2.service;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Product;
import com.example.be_sprint2.repository.IProductRepository;
import com.example.be_sprint2.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository repository;


    @Override
    public Product findProductById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public Page<ProductDto> findAll(Pageable pageable, String name, String sizeName, String categoryName,Integer minPrice,Integer maxPrice) {
        return repository.findAllProDuct(pageable,"%"+name+"%","%"+sizeName+"%","%"+categoryName+"%",minPrice,maxPrice);
    }
}
