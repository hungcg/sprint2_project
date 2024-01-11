package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "SELECT \n" +
            "    p.id as productId, \n" +
            "    p.name as name, \n" +
            "    p.description as description, \n" +
            "    c.name as categoryName, \n" +
            "    s.name as sizeName, \n" +
            "    s.description as sizeDescription, \n" +
            "    s.price as sizePrice,\n" +
            "    i.name as imageName\n" +
            "FROM product as p\n" +
            " JOIN category_detail as cd ON p.id = cd.product_id\n" +
            " JOIN category as c ON cd.category_id = c.id\n" +
            " JOIN size as s ON p.id = s.product_id\n" +
            " JOIN image as i ON p.id = i.product_id\n" +
            "    where (s.name like :sizeName And c.name like :categoryName And p.name LIKE :name)\n" +
            "  AND s.price BETWEEN :minPrice AND :maxPrice", nativeQuery = true)
    Page<ProductDto> findAllProDuct(Pageable pageable,
                                    @Param("name") String name,
                                    @Param("sizeName") String sizeName,
                                    @Param("categoryName") String categoryName,
                                    @Param("minPrice") Integer minPrice,
                                    @Param("maxPrice") Integer maxPrice);

}
