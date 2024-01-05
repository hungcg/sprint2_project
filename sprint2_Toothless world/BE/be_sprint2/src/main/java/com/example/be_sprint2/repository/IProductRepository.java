package com.example.be_sprint2.repository;
import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {

    @Query(value = "SELECT p.id, p.name, p.description, c.name AS category_name, s.name AS size_name, s.description AS size_description, i.name AS image_name\n" +
            "FROM product p\n" +
            "LEFT JOIN category_detail cd ON p.id = cd.product_id\n" +
            "LEFT JOIN category c ON cd.category_id = c.id\n" +
            "LEFT JOIN size s ON p.id = s.product_id\n" +
            "LEFT JOIN image i ON p.id = i.product_id", nativeQuery = true)
    List<ProductDto> findAllProDuct();
}
