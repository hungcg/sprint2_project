SELECT * FROM sprint2_project.size;
use sprint2_project;



-- Insert into role table
INSERT INTO role (name)
VALUES
 ('ROLES_ADMIN'),
 ('ROLES_USER');

INSERT INTO accounts (password, username)
VALUES 
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hungoke'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha'),
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'hunghaha');

INSERT INTO account_roles (account_id, role_id)
VALUES (1, 1);




-- Insert into user table
INSERT INTO user (account_id, address, birthday, email, gender, name, phone) VALUES 
  (1, 'Address1', '1990-01-01', 'email1@example.com', 'Male', 'John Doe', '1234567890'),
  (2, 'Address2', '1991-02-02', 'email2@example.com', 'Female', 'Jane Doe', '2345678901'),
  (3, 'Address3', '1992-03-03', 'email3@example.com', 'Male', 'Bob Smith', '3456789012'),
  (4, 'Address4', '1993-04-04', 'email4@example.com', 'Female', 'Alice Johnson', '4567890123'),
  (5, 'Address5', '1994-05-05', 'email5@example.com', 'Male', 'Sam Wilson', '5678901234'),
  (6, 'Address6', '1995-06-06', 'email6@example.com', 'Female', 'Emily White', '6789012345'),
  (7, 'Address7', '1996-07-07', 'email7@example.com', 'Male', 'Chris Brown', '7890123456'),
  (8, 'Address8', '1997-08-08', 'email8@example.com', 'Female', 'Jessica Green', '8901234567'),
  (9, 'Address9', '1998-09-09', 'email9@example.com', 'Male', 'Megan Taylor', '9012345678'),
  (10, 'Address10', '1999-10-10', 'email10@example.com', 'Female', 'Daniel Davis', '0123456789');
  
  
-- Insert into product table for Sofas
INSERT INTO product (description, name) VALUES 
  ('Modern Leather Sofa', 'Elegant White Sofa'),
  ('Sectional Sofa', 'Gray Fabric Sectional'),
  ('Classic Sofa', 'Vintage Brown Leather Sofa'),
  ('Convertible Sofa', 'Multifunctional Gray Sofa'),
  ('L-Shaped Sofa', 'Contemporary Black L-Shaped Sofa'),
  ('Reclining Sofa', 'Comfortable Beige Recliner Sofa'),
  ('Chaise Lounge Sofa', 'Modern Chaise Lounge Sofa'),
  ('Velvet Sofa', 'Luxurious Emerald Green Velvet Sofa'),
  ('Outdoor Sofa', 'Weather-resistant Patio Sofa'),
  ('Sleeper Sofa', 'Compact Blue Sleeper Sofa');


-- Assuming you have the product IDs for the sofa products
-- Replace the values of product_id with the actual IDs from your product table

-- Insert into category table for Sofa categories
INSERT INTO category (product_id, name) VALUES 
  (1, 'Elegant Sofas'),
  (2, 'Sectional Sofas'),
  (3, 'Classic Sofas'),
  (4, 'Convertible Sofas'),
  (5, 'L-Shaped Sofas'),
  (6, 'Reclining Sofas'),
  (7, 'Chaise Lounge Sofas'),
  (8, 'Velvet Sofas'),
  (9, 'Outdoor Sofas'),
  (10, 'Sleeper Sofas');

  
  

  
  INSERT INTO image (product_id, name)
VALUES
(1, 'https://i.pinimg.com/236x/8b/6a/53/8b6a5316a3a3a327bd0280b0033a2134.jpg'),
(2, 'https://i.pinimg.com/236x/d5/81/be/d581be2ba1405243e9bdbe1816756a03.jpg'),
(3, 'https://i.pinimg.com/236x/74/0b/90/740b904a6f5d86254a8f6747d89e1eaa.jpg'),
(4, 'https://i.pinimg.com/236x/6d/6a/64/6d6a6448df9f4f654ef663561b08fd9b.jpg'),
(5, 'https://i.pinimg.com/236x/30/b1/98/30b198e4f20fbf583559d183d4a7149a.jpg'),
(6, 'https://i.pinimg.com/236x/31/c8/b9/31c8b958bd5442fed1ba3d20e8f62ca3.jpg'),
(7, 'https://i.pinimg.com/236x/ed/26/24/ed26246479c9016738d83e4a8c9a8f13.jpg'),
(8, 'https://i.pinimg.com/236x/62/5f/fb/625ffbc231e75604fdff5edc56ea7497.jpg'),
(9, 'https://i.pinimg.com/236x/e8/0f/66/e80f6621387a9b2e3f2cd1765a7dfd13.jpg'),
(10, 'https://i.pinimg.com/236x/f1/43/45/f143453d7ea6ad8b7fe37f34e91cdd64.jpg');


-- Insert into size table with prices in VND (between 1 million and 10 million)
INSERT INTO size (price, quantity, status, product_id, name) VALUES 
  (5000000, 50, 1, 1, 'Large Sofa'),
  (1500000, 100, 1, 2, 'Medium Sofa'),
  (2500000, 30, 1, 3, 'Hardcover Sofa'),
  (3500000, 20, 1, 4, 'Small Sofa'),
  (9000000, 200, 1, 5, 'L-Shaped Sectional Sofa'),
  (4500000, 50, 1, 6, '3-Seater Sofa'),
  (8000000, 80, 1, 7, 'Matte Finish Sofa'),
  (3500000, 40, 1, 8, '5W-30 Oil'),
  (7000000, 10, 1, 9, 'Standard Sofa'),
  (9500000, 5, 1, 10, 'Double Door Sofa');




-- Insert into cart table
INSERT INTO cart (is_deleted, quantity_order, product_id, user_id) VALUES 
  (0, 2, 1, 1),
  (0, 1, 2, 2),
  (0, 3, 3, 3),
  (0, 1, 4, 4),
  (0, 2, 5, 5),
  (0, 1, 6, 6),
  (0, 2, 7, 7),
  (0, 1, 8, 8),
  (0, 3, 9, 9),
  (0, 1, 10, 10);

INSERT INTO orders (is_deleted, total_money, user_id, date_of_order, order_code)
VALUES
    (0, 100.50, 1, '2024-01-19 12:30:00', 'ABC123'),
    (0, 75.20, 2, '2024-01-20 14:45:00', 'DEF456'),
    (0, 120.75, 3, '2024-01-21 10:15:00', 'GHI789'),
    (0, 50.80, 1, '2024-01-22 08:00:00', 'JKL012'),
    (0, 90.30, 2, '2024-01-23 16:20:00', 'MNO345'),
    (0, 110.60, 3, '2024-01-24 09:30:00', 'PQR678'),
    (0, 65.90, 1, '2024-01-25 11:45:00', 'STU901'),
    (0, 80.45, 2, '2024-01-26 13:00:00', 'VWX234'),
    (0, 95.75, 3, '2024-01-27 15:10:00', 'YZA567'),
    (0, 55.20, 1, '2024-01-28 07:30:00', 'BCD890');


-- Insert into order_detail table
INSERT INTO order_detail (price_order, quantity, order_id, product_id) VALUES 
  (799.99, 2, 1, 1),
  (19.99, 1, 2, 2),
  (29.99, 3, 3, 3),
  (39.99, 1, 4, 4),
  (9.99, 2, 5, 5),
  (49.99, 1, 6, 6),
  (14.99, 2, 7, 7),
  (29.99, 1, 8, 8),
  (799.99, 3, 9, 9),
  (999.99, 1, 10, 10);




SELECT
    p.id AS product_id,
    p.name AS product_name,
    p.description,
    c.name AS category_name,
    s.name AS size_name,
    s.price AS size_price,
    i.name AS image_name
FROM product p
JOIN category c ON p.id = c.product_id
JOIN size s ON p.id = s.product_id
LEFT JOIN image i ON p.id = i.product_id
WHERE p.name LIKE '%%' AND c.name LIKE '%%' AND s.name LIKE '%%' AND s.price BETWEEN 0 AND 100000000; 




SELECT
    c.id AS id,
    c.quantity_order AS quantity_order,
    p.id AS product_id,
    p.name AS product_name
FROM
    cart c
JOIN
    product p ON c.product_id = p.id
WHERE
    c.product_id = 1 AND c.user_id = 1 AND c.is_deleted = false;

SELECT c.*
FROM cart AS c
JOIN product AS p ON c.product_id = p.id
WHERE c.product_id = 1 AND c.user_id = 1 AND c.is_deleted = 0;

ALTER TABLE cart
    ADD UNIQUE INDEX user_product_index (user_id, product_id);
    
    
SELECT 
    u.id AS user_id,
    od.order_id,
    od.price_order,
    od.product_id,
    od.quantity,
    c.name AS category_name,
    p.name AS product_name
FROM order_detail od
JOIN product p ON od.product_id = p.id
JOIN user u ON od.order_id = u.account_id
LEFT JOIN category c ON p.id = c.product_id
WHERE u.id = 1 AND od.id = 1;



SELECT
    o.id AS order_id,
    o.is_deleted AS order_is_deleted,
    o.total_money AS order_total_money,
    o.user_id AS order_user_id,
    o.date_of_order AS order_date_of_order,
    o.order_code AS order_order_code,
    u.id AS user_id
FROM orders o
JOIN user u ON o.user_id = u.id
WHERE o.user_id = 1 AND o.order_code = '';


select * from size
join product on size.product_id = product.id
where size.product_id = 1;



