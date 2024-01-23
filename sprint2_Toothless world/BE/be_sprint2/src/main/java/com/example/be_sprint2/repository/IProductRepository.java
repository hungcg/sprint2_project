package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface IProductRepository extends JpaRepository<Product, Integer> {


    @Query(value = "SELECT\n" +
            "    p.id AS productId,\n" +
            "    p.name AS name,\n" +
            "    p.description AS description,\n" +
            "    c.name AS categoryName,\n" +
            "    s.name AS sizeName,\n" +
            "    s.price AS sizePrice,\n" +
            "    i.name AS imageName\n" +
            "FROM product p\n" +
            "JOIN category c ON p.id = c.product_id\n" +
            "JOIN size s ON p.id = s.product_id\n" +
            "LEFT JOIN image i ON p.id = i.product_id\n" +
            "WHERE p.name LIKE :name AND c.name LIKE :categoryName AND s.name LIKE :sizeName AND s.price BETWEEN :minPrice AND :maxPrice ", nativeQuery = true)
    Page<ProductDto> findAllProDuct(Pageable pageable,
                                    @Param("name") String name,
                                    @Param("sizeName") String sizeName,
                                    @Param("categoryName") String categoryName,
                                    @Param("minPrice") Integer minPrice,
                                    @Param("maxPrice") Integer maxPrice);



    @Query(value = "SELECT " +
            "    p.id AS productId, " +
            "    p.name AS name, " +
            "    p.description AS description, " +
            "    c.name AS categoryName, " +
            "    s.name AS sizeName, " +
            "    s.price AS sizePrice, " +
            "    i.name AS imageName " +
            "FROM product p " +
            "JOIN category c ON p.id = c.product_id " +
            "JOIN size s ON p.id = s.product_id " +
            "LEFT JOIN image i ON p.id = i.product_id " +
            "WHERE p.id = :productId",
            nativeQuery = true)
    ProductDto showProductDetails(@Param("productId") Integer productId);

}
