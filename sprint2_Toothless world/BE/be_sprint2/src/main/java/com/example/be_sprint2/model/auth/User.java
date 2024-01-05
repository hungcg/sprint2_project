package com.example.be_sprint2.model.auth;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(name = "birthday")
    private String birthday;

    @Column(name = "gender", columnDefinition = "VARCHAR(10)")
    private String gender;

    @Column(name = "email", columnDefinition = "VARCHAR(255)")
    private String email;

    @Column(name = "phone", columnDefinition = "VARCHAR(20)")
    private String phone;

    @Column(name = "address", columnDefinition = "VARCHAR(255)")
    private String address;

    @Column(name = "username", columnDefinition = "VARCHAR(50)", unique = true)
    private String username;

    @Column(name = "password", columnDefinition = "VARCHAR(255)")
    private String password;

    @OneToOne
    @JoinColumn(name = "account_id",referencedColumnName = "id")
    private Account account;

}
