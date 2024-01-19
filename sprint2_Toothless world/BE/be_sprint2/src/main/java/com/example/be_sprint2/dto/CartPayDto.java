package com.example.be_sprint2.dto;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import java.time.LocalDateTime;

import static com.example.be_sprint2.comon.Enum.INVALID_DATE;
import static com.example.be_sprint2.comon.Enum.INVALID_VALUE;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartPayDto implements Validator {
    @NotBlank
    private int productId;
    @NotBlank
    private int productQuantity;
    @NotBlank
    private Long totalCost;
    @NotBlank
    private String payday;

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }

    public Long getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Long totalCost) {
        this.totalCost = totalCost;
    }

    public String getPayday() {
        return payday;
    }

    public void setPayday(String payday) {
        this.payday = payday;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        CartPayDto cartPayDto = (CartPayDto) errors;
        LocalDateTime payDate = LocalDateTime.parse(cartPayDto.getPayday());
        LocalDateTime now = LocalDateTime.now();

        if (cartPayDto.totalCost < 0) {
            errors.rejectValue("totalCost", null, INVALID_VALUE);
        }

        if (payDate.isBefore(now)) {
            errors.rejectValue("payday", null, INVALID_DATE);
        }

        if (cartPayDto.productQuantity < 0) {
            errors.rejectValue("productQuantity", null, INVALID_VALUE);
        }
    }
}