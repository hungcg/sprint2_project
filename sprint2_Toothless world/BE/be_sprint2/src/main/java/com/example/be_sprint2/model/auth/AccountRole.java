package com.example.be_sprint2.model.auth;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "account_roles")
public class AccountRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "account_id",referencedColumnName = "id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "role_id",referencedColumnName = "id")
    private Role role;

    public AccountRole() {
    }

    public AccountRole(Integer id, Account account, Role role) {
        this.id = id;
        this.account = account;
        this.role = role;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}