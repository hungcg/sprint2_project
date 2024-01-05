package com.example.be_sprint2.model.product;
import com.example.be_sprint2.model.auth.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_of_order")
    private Date dateOfOrder;

    @Column(name = "total_money")
    private Double totalMoney;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
