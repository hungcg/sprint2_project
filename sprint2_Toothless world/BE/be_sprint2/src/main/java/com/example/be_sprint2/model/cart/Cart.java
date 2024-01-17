package com.example.be_sprint2.model.cart;
import com.example.be_sprint2.model.product.Product;
import com.example.be_sprint2.model.auth.User;
import jakarta.persistence.*;


@Entity

public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "quantity_order")
    private Integer quantityOrder;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private Boolean isDeleted;



    public Cart(User user, Product product, Integer quantityOrder) {
    }

    public Cart(Integer id, Integer quantityOrder, User user, Product product, Boolean isDeleted) {
        this.id = id;
        this.quantityOrder = quantityOrder;
        this.user = user;
        this.product = product;
        this.isDeleted = isDeleted;
    }

    public Cart() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(Integer quantityOrder) {
        this.quantityOrder = quantityOrder;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }
}
