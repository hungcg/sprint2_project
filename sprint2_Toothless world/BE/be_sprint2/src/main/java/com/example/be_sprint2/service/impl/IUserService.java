package com.example.be_sprint2.service.impl;

import com.example.be_sprint2.model.auth.User;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IUserService {
    User findById(Integer id);

    User showUserDetails(Integer userId);


}
