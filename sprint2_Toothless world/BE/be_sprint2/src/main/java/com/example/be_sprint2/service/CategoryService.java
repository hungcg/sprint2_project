package com.example.be_sprint2.service;
import com.example.be_sprint2.model.product.Category;
import com.example.be_sprint2.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository repository;


    @Override
    public List<Category> findAllCategory() {
        return repository.findAll();
    }
}
