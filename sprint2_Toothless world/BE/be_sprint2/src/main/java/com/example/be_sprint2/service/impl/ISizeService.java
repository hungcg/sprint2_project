package com.example.be_sprint2.service.impl;

import com.example.be_sprint2.model.product.Category;
import com.example.be_sprint2.model.product.Size;

import java.util.List;

public interface ISizeService {
    List<Size> findAllSize();
    Size findAllByProduct(Integer productId);
}
