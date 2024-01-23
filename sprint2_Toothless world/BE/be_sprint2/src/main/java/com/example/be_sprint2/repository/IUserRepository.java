package com.example.be_sprint2.repository;

import com.example.be_sprint2.dto.ProductDto;
import com.example.be_sprint2.model.auth.User;
import com.example.be_sprint2.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface IUserRepository extends JpaRepository<User,Integer> {

    @Query(value = "SELECT * FROM user WHERE id = :userId ",
            nativeQuery = true)
    User showUserDetails(@Param("userId") Integer userId);

}
