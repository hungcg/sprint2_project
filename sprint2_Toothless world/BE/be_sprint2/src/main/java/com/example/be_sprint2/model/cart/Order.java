package com.example.be_sprint2.model.cart;
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
    private Integer id;

    @Column(name = "date_of_order")
    private Date dateOfOrder;

    @Column(columnDefinition = "VARCHAR(50)")
    private String orderCode;

    @Column(name = "total_money")
    private Double totalMoney;
    @Column(name = "is_deleted",columnDefinition = "bit(1) default 0")
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
