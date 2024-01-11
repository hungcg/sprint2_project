SELECT * FROM sprint2_project.size;
use sprint2_project;


INSERT INTO accounts (password, username)
VALUES ('123123', 'hunghaha');


INSERT INTO role (name)
VALUES
 ('ROLES_ADMIN'),
 ('ROLES_USER');

INSERT INTO account_roles (account_id, role_id)
VALUES (1, 1);




INSERT INTO product (description, name)
VALUES
('Product 1 Description', 'Product 1'),
('Product 2 Description', 'Product 2'),
('Product 3 Description', 'Product 3'),
('Product 4 Description', 'Product 4'),
('Product 5 Description', 'Product 5'),
('Product 6 Description', 'Product 6'),
('Product 7 Description', 'Product 7'),
('Product 8 Description', 'Product 8'),
('Product 9 Description', 'Product 9'),
('Product 10 Description', 'Product 10');

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



INSERT INTO Size (name, status, description, quantity, price, product_id)
VALUES 
('Size 1', true, 'Description for Size 1', 10, 20.0, 1),
('Size 2', true, 'Description for Size 2', 20, 40.0, 2),
('Size 3', true, 'Description for Size 3', 30, 60.0, 3),
('Size 4', true, 'Description for Size 4', 40, 80.0, 4),
('Size 5', true, 'Description for Size 5', 50, 100.0, 5),
('Size 6', true, 'Description for Size 6', 60, 120.0, 6),
('Size 7', true, 'Description for Size 7', 70, 140.0, 7),
('Size 8', true, 'Description for Size 8', 80, 160.0, 8),
('Size 9', true, 'Description for Size 9', 90, 180.0, 9),
('Size 10', true, 'Description for Size 10', 90, 180.0, 10);



INSERT INTO category (description, name)
VALUES
( 'Category 1 Description', 'Category 1'),
( 'Category 2 Description', 'Category 2'),
( 'Category 3 Description', 'Category 3'),
( 'Category 4 Description', 'Category 4'),
( 'Category 5 Description', 'Category 5'),
( 'Category 6 Description', 'Category 6'),
( 'Category 7 Description', 'Category 7'),
( 'Category 8 Description', 'Category 8'),
( 'Category 9 Description', 'Category 9'),
( 'Category 10 Description', 'Category 10');



INSERT INTO category_detail (category_id, product_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(1, 4),
(2, 5),
(3, 6),
(1, 7),
(2, 8),
(3, 9),
(1, 10);


INSERT INTO user (account_id, address, birthday, email, gender, name, password, phone, username)
VALUES
(1, '123 Main St', '1990-01-01', 'user1@example.com', 'Male', 'John Doe', 'password1', '1234567890', 'john_doe'),
(2, '456 Oak St', '1985-02-15', 'user2@example.com', 'Female', 'Jane Smith', 'password2', '9876543210', 'jane_smith'),
(3, '789 Elm St', '1992-07-20', 'user3@example.com', 'Male', 'Mike Johnson', 'password3', '5555555555', 'mike_johnson'),
(4, '101 Pine St', '1988-11-10', 'user4@example.com', 'Female', 'Emily Davis', 'password4', '3333333333', 'emily_davis'),
(5, '202 Cedar St', '1995-04-05', 'user5@example.com', 'Male', 'Alex White', 'password5', '9999999999', 'alex_white'),
(6, '303 Birch St', '1980-09-30', 'user6@example.com', 'Female', 'Chris Brown', 'password6', '7777777777', 'chris_brown'),
(7, '404 Maple St', '1998-12-15', 'user7@example.com', 'Male', 'Jessica Lee', 'password7', '1111111111', 'jessica_lee'),
(8, '505 Walnut St', '1983-06-25', 'user8@example.com', 'Female', 'David Taylor', 'password8', '4444444444', 'david_taylor'),
(9, '606 Pineapple St', '1993-03-20', 'user9@example.com', 'Male', 'Sophia Martin', 'password9', '6666666666', 'sophia_martin'),
(10, '707 Banana St', '1987-08-10', 'user10@example.com', 'Female', 'Andrew Wilson', 'password10', '8888888888', 'andrew_wilson');


SELECT 
    p.id as productId, 
    p.name as name, 
    p.description as description, 
    c.name as categoryName, 
    s.name as sizeName, 
    s.description as sizeDescription, 
    s.price as sizePrice,
    i.name as imageName
FROM product as p
LEFT JOIN category_detail as cd ON p.id = cd.product_id
LEFT JOIN category as c ON cd.category_id = c.id
LEFT JOIN size as s ON p.id = s.product_id
LEFT JOIN image as i ON p.id = i.product_id;



SELECT 
    p.id as productId, 
    p.name as name, 
    p.description as description, 
    c.name as categoryName, 
    s.name as sizeName, 
    s.description as sizeDescription, 
    s.price as sizePrice,
    i.name as imageName
FROM product as p
LEFT JOIN category_detail as cd ON p.id = cd.product_id
LEFT JOIN category as c ON cd.category_id = c.id
LEFT JOIN size as s ON p.id = s.product_id
LEFT JOIN image as i ON p.id = i.product_id
WHERE s.price BETWEEN 0 AND 40 -- Thay min_price và max_price bằng giá trị tương ứng
    AND (s.name LIKE '%a%' OR c.name LIKE '%a%' OR p.name LIKE '%a%');

