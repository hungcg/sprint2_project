package com.example.be_sprint2.service.impl;

import com.example.be_sprint2.model.auth.User;

import java.util.Optional;

public interface IUserService {

    Optional<User> findById(Integer id);
}
