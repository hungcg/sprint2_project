package com.example.be_sprint2.repository;

import com.example.be_sprint2.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IUserRepository extends JpaRepository<User,Integer> {

}
