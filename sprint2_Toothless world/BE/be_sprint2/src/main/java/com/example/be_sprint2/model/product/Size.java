package com.example.be_sprint2.model.product;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Size {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Boolean status;
    private String description;
    private Integer quantity;
    private Double price;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
