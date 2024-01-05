package com.example.be_sprint2.service;
import com.example.be_sprint2.model.auth.Account;
import com.example.be_sprint2.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountServiceImpl implements IAccountService {
    @Autowired
    private IAccountRepository repository;
    @Override
    public Account findAccountById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public Optional<Account> findByUsername(String username) {
        return repository.findByUsername(username);
    }
}