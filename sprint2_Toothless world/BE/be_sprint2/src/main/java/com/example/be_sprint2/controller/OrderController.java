package com.example.be_sprint2.controller;
import com.example.be_sprint2.dto.IOrderDto;
import com.example.be_sprint2.dto.OrderDetailsDto;
import com.example.be_sprint2.model.auth.User;
import com.example.be_sprint2.repository.IUserRepository;
import com.example.be_sprint2.service.impl.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IUserRepository userRepository;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getOrderByUserId(@PathVariable(name = "userId") Integer userId,
                                                @RequestParam(name = "page") int page,
                                                @RequestParam(name = "orderCode") String orderCode
    ) {
        Optional<User> existedUser = this.userRepository.findById(userId);

        if (!existedUser.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Pageable pageable = PageRequest.of(page, 5);
        Page<IOrderDto> orders = this.orderService.getOrderByUserId(pageable, userId, orderCode);

        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ResponseEntity.ok(orders);
    }


    @GetMapping("/details/{userId}/{orderId}")
    public ResponseEntity<?> getOrderDetail(@PathVariable(name = "orderId") Integer orderId,
                                            @PathVariable(name = "userId")Integer userId) {
        Optional<User> existedUser = this.userRepository.findById(userId);

        if (!existedUser.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Collection<OrderDetailsDto> ordersDetail =
                this.orderService.findOrderDetailByUserIdAndOrderId(userId, orderId);

        if (ordersDetail.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ResponseEntity.ok(ordersDetail);
    }


//    @GetMapping("/firstOrder/{username}")
//    public ResponseEntity<?> getFirstOrderDateByUsername(@PathVariable(name = "username") String username) {
//        String firstOrder = this.orderService.getFirstOrderDateWithUserName(username);
//
//        if (firstOrder != null) {
//            return ResponseEntity.ok(firstOrder);
//        }
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//
//
//    @GetMapping("/lastOrder/{username}")
//    public ResponseEntity<?> getLastOrderDateByUsername(@PathVariable(name = "username") String username) {
//        String lastOrder = this.orderService.getLastOrderDateWithUserName(username);
//
//        if (lastOrder != null) {
//            return ResponseEntity.ok(lastOrder);
//        }
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

}