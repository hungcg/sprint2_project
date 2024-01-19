package com.example.be_sprint2.model.cart;

import com.example.be_sprint2.model.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer quantity;

    @Column(name = "price_order")
    private Double priceOrder;
    @Column(name = "is_deleted", columnDefinition = "bit(1) default 0")
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

}
