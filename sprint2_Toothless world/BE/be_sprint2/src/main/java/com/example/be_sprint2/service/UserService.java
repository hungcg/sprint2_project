package com.example.be_sprint2.service;
import com.example.be_sprint2.model.auth.User;
import com.example.be_sprint2.repository.IUserRepository;
import com.example.be_sprint2.service.impl.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository repository;
    @Override
    public Optional<User> findById(Integer id) {
        return repository.findById(id);
    }
}
