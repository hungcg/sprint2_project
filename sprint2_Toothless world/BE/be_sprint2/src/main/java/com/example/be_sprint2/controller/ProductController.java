package com.example.be_sprint2.controller;
import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping("api/product")
public class ProductController {
    @Autowired
    private IProductService service;

    @GetMapping("")
    public ResponseEntity<List<ProductDto>> getAllProduct() {
        List<ProductDto> productDtoList = service.findAll();
        if (productDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDtoList, HttpStatus.OK);
    }


}
