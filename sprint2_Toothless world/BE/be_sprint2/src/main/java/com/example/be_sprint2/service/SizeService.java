package com.example.be_sprint2.service;
import com.example.be_sprint2.model.product.Size;
import com.example.be_sprint2.repository.ISizeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SizeService implements ISizeService {
    @Autowired
    private ISizeRepository repository;

    @Override
    public List<Size> findAllSize() {
        return repository.findAll();
    }
}
