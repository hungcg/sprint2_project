package com.example.be_sprint2.controller;
import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.auth.User;
import com.example.be_sprint2.model.product.Category;
import com.example.be_sprint2.model.product.Product;
import com.example.be_sprint2.model.product.Size;
import com.example.be_sprint2.service.impl.ICategoryService;
import com.example.be_sprint2.service.impl.IProductService;
import com.example.be_sprint2.service.impl.ISizeService;
import com.example.be_sprint2.service.impl.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("api/product")
public class ProductController {
    @Autowired
    private IProductService service;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private ISizeService sizeService;
    @Autowired
    private IUserService userService;

    @GetMapping("")
    public ResponseEntity<Page<ProductDto>> getAllProduct(@RequestParam(name = "page",defaultValue = "0",required = false) int page,
                                                          @RequestParam(name = "name",defaultValue = "",required = false) String name,
                                                          @RequestParam(name = "sizeName",defaultValue = "",required = false) String sizeName,
                                                          @RequestParam(name = "categoryName",defaultValue = "",required = false) String categoryName,
                                                          @RequestParam(name = "minPrice",defaultValue = "0",required = false) Integer minPrice,
                                                          @RequestParam(name = "maxPrice",defaultValue = "25000000",required = false) Integer maxPrice) {
        Pageable pageable = PageRequest.of(page, 8, Sort.by("sizePrice","categoryName"));
        Page<ProductDto> newsList = service.findAll(pageable,name,sizeName,categoryName,minPrice,maxPrice);
        if (newsList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(newsList, HttpStatus.OK);
        }
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<ProductDto> showNewsDetails(@PathVariable Integer id) {
        Product product = service.findProductById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            ProductDto productDto = service.showProductDetails(id);
            return new ResponseEntity<>(productDto, HttpStatus.OK);
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> showUserDetails(@PathVariable Integer id) {
        User user = userService.findById(id);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            userService.showUserDetails(id);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
    }


    @GetMapping("/category")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> categories = categoryService.findAllCategory();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(categories, HttpStatus.OK);
        }
    }

    @GetMapping("/size")
    public ResponseEntity<List<Size>> getAllSize() {
        List<Size> sizeList = sizeService.findAllSize();
        if (sizeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(sizeList, HttpStatus.OK);
        }
    }
}

