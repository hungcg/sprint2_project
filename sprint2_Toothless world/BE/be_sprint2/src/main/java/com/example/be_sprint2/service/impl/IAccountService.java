package com.example.be_sprint2.service.impl;


import com.example.be_sprint2.model.auth.Account;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IAccountService {
    Account findAccountById(Long id);
    Optional<Account> findByUsername(String username);

}