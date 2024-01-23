SELECT * FROM sprint2_project.size;
use sprint2_project;



-- Insert into role table
INSERT INTO role (name)
VALUES
 ('ROLES_ADMIN'),
 ('ROLES_USER');

INSERT INTO accounts (password, username)
VALUES 
('$2a$12$hVxhULWb5Ra9K0Xxv0jhG.oKgK0v4JFQJjvZXyxVH50uDmpANEQD6', 'user01'),
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
  ('Là biểu tượng của sự thoải mái và phong cách trong không gian sống của bạn. Bề mặt bọc nệm chất lượng cao kết hợp với thiết kế hiện đại, tạo nên một chiếc sofa đẳng cấp và thuận tiện cho mọi gia đình.
Dễ Dàng Trang Trí: Có sẵn trong nhiều màu sắc và kích thước, ghế sofa Luxurious Comfort dễ dàng kết hợp với phong cách trang trí của bạn.', 'Elegant White Sofa'),
  ('Ghế sofa Deluxe Comfort Haven không chỉ là một chiếc ghế ngồi thông thường mà còn là một tác phẩm nghệ thuật tinh tế, chăm sóc đến từng chi tiết. Với chất liệu vải cao cấp, chiếc sofa này tạo ra một không gian sống sang trọng và thoải mái.

Chất liệu vải chọn lọc không chỉ mang lại cảm giác mềm mại dễ chịu mà còn là sự đảm bảo về độ bền. Mỗi đường may và góc cạnh được chăm chút tỉ mỉ, tạo nên một thiết kế thanh lịch và đẳng cấp.', 'Gray Fabric Sectional'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.', 'Vintage Brown Leather Sofa'),
  ('Ghế sofa Royal Comfort Oasis là biểu tượng của sự xa hoa và thoải mái trong không gian sống. Chất liệu da cao cấp được chọn lựa kỹ lưỡng, mang lại không chỉ sự êm ái mà còn là vẻ ngoài sang trọng. Đường may tỉ mỉ và chi tiết tinh tế tạo nên một kiệt tác nghệ thuật trong nội thất.
  Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.', 'Multifunctional Gray Sofa'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.

', 'Contemporary Black L-Shaped Sofa'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.

', 'Comfortable Beige Recliner Sofa'),
  (' không chỉ là một chiếc ghế ngồi thông thường mà còn là một tác phẩm nghệ thuật tinh tế, chăm sóc đến từng chi tiết. Với chất liệu vải cao cấp, chiếc sofa này tạo ra một không gian sống sang trọng và thoải mái.

Chất liệu vải chọn lọc không chỉ mang lại cảm giác mềm mại dễ chịu mà còn là sự đảm bảo về độ bền. Mỗi đường may và góc cạnh được chăm chút tỉ mỉ, tạo nên một thiết kế thanh lịch và đẳng cấp.', 'Modern Chaise Lounge Sofa'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Luxurious Emerald Green Velvet Sofa'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Weather-resistant Patio Sofa'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Sofa Urban Explorer'),

  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', ' Sofa Rustic Comfort'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Compact Blue Sleeper Sofa'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Sofa Coastal Retreat'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Sofa Family Oasis'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Sofa Classic Elegance'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Sofa Modern Chic'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Ghế Sofa Cozy Retreat'),
  ('Với kích thước rộng rãi, ghế sofa này là lựa chọn hoàn hảo cho không gian phòng khách hay phòng gia đình. Nệm đàn hồi và thoải mái cung cấp sự hỗ trợ tốt nhất, cho phép bạn thư giãn sau một ngày làm việc căng thẳng.

Thiết kế màu sắc tinh tế và hiện đại giúp chiếc sofa này dễ dàng kết hợp với bất kỳ phong cách trang trí nào. Màu sắc trung tính như xám, beige hoặc nâu đậm làm nổi bật vẻ đẹp của chiếc sofa và làm nổi bật không gian sống của bạn.

Ghế sofa Deluxe Comfort Haven không chỉ là một sản phẩm nội thất, mà là một phần của cuộc sống hiện đại, nơi sự thoải mái và đẳng cấp hòa quyện để tạo ra một trải nghiệm thực sự đặc biệt.', 'Sofa Urban Explorer');



-- Assuming you have the product IDs for the sofa products
-- Replace the values of product_id with the actual IDs from your product table

-- Insert into category table for Sofa categories
INSERT INTO category (product_id, name) VALUES 
  (1, 'Sofa da'),
  (2, 'Sofa vải nỉ'),
  (3, 'Sofa gỗ đệm'),
  (4, 'Sofa da lộn'),
    (5, 'Sofa da'),
  (6, 'Sofa vải nỉ'),
  (7, 'Sofa gỗ đệm'),
  (8, 'Sofa da lộn'),
    (9, 'Sofa da'),
  (10, 'Sofa vải nỉ'),
  (11, 'Sofa gỗ đệm'),
  (12, 'Sofa da lộn'),
    (13, 'Sofa da'),
  (14, 'Sofa vải nỉ'),
  (15, 'Sofa gỗ đệm'),
  (16, 'Sofa da lộn'),
    (17, 'Sofa da'),
  (18, 'Sofa vải nỉ');




  
  
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
(10, 'https://i.pinimg.com/564x/e7/a4/fe/e7a4fec2a1963474453be11817868153.jpg'),
(11, 'https://i.pinimg.com/564x/7e/d4/34/7ed4343b271f1e16767c5476f346bced.jpg'),
(12, 'https://i.pinimg.com/564x/54/3e/2c/543e2c812fb0ce1a53ca9d4cce34081e.jpg'),
(13, 'https://i.pinimg.com/564x/0f/42/50/0f4250e40aedc53e5fed095f26e48509.jpg'),
(14, 'https://i.pinimg.com/564x/5c/a2/ad/5ca2ad5067e22dd59a88c44ed04cf91b.jpg'),
(15, 'https://i.pinimg.com/564x/7f/84/10/7f8410f4ca82b7e99544533407b4d4a8.jpg'),
(16, 'https://i.pinimg.com/564x/50/9a/46/509a46fea8a92c9c312fb5fd58db41d4.jpg'),
(17, 'https://i.pinimg.com/564x/3b/42/c0/3b42c0970ca73896d8666a369f6de7d4.jpg'),
(18, 'https://i.pinimg.com/736x/e0/f4/0e/e0f40eb4d2d3592822eeff0c27495819.jpg');



-- Insert into size table with prices in VND (between 1 million and 10 million)
INSERT INTO size (price, quantity, status, product_id, name) VALUES 
  (5000000, 50, 1, 1, 'Dài: 2m2 - Rộng:1m1 - Cao:80cm'),
  (8000000, 100, 1, 2,'Dài: 2m4 - Rộng:1m3 - Cao:80cm'),
  (12000000, 30, 1, 3, 'Dài: 2m6 - Rộng:1m5 - Cao:80cm'),
  (15000000, 20, 1, 4, 'Dài: 2m8 - Rộng:1m9 - Cao:95cm'),
  (22000000, 200, 1,5,'Dài: 3m2 - Rộng:2m1 - Cao:1m'),
  (5000000, 50, 1, 6, 'Dài: 2m2 - Rộng:1m1 - Cao:80cm'),
  (8000000, 100, 1, 7,'Dài: 2m4 - Rộng:1m3 - Cao:80cm'),
  (12000000, 30, 1, 8, 'Dài: 2m6 - Rộng:1m5 - Cao:80cm'),
  (15000000, 20, 1, 9, 'Dài: 2m8 - Rộng:1m9 - Cao:95cm'),
  (22000000, 200, 1,10,'Dài: 3m2 - Rộng:2m1 - Cao:1m'),
  (5000000, 50, 1, 11, 'Dài: 2m2 - Rộng:1m1 - Cao:80cm'),
  (8000000, 100, 1, 12,'Dài: 2m4 - Rộng:1m3 - Cao:80cm'),
  (12000000, 30, 1, 13, 'Dài: 2m6 - Rộng:1m5 - Cao:80cm'),
  (15000000, 20, 1, 14, 'Dài: 2m8 - Rộng:1m9 - Cao:95cm'),
  (22000000, 200, 1,15,'Dài: 3m2 - Rộng:2m1 - Cao:1m'),
  (5000000, 50, 1, 16, 'Dài: 2m2 - Rộng:1m1 - Cao:80cm'),
  (8000000, 100, 1, 17,'Dài: 2m4 - Rộng:1m3 - Cao:80cm'),
  (12000000, 30, 1, 18, 'Dài: 2m6 - Rộng:1m5 - Cao:80cm');

  
  
  
SELECT id, name, price, quantity, product_id, status
FROM (
    SELECT s.id, s.name, s.price, s.quantity, s.product_id, s.status,
           ROW_NUMBER() OVER (PARTITION BY s.name ORDER BY s.id) AS row_num
    FROM size s
    JOIN product ON s.product_id = product.id
) AS numbered
WHERE row_num = 1;




-- Insert into cart table
-- INSERT INTO cart (is_deleted, quantity_order, product_id, user_id) VALUES 
--   (0, 2, 1, 1),
--   (0, 1, 2, 2),
--   (0, 3, 3, 3),
--   (0, 1, 4, 4),
--   (0, 2, 5, 5),
--   (0, 1, 6, 6),
--   (0, 2, 7, 7),
--   (0, 1, 8, 8),
--   (0, 3, 9, 9),
--   (0, 1, 10, 10);

-- INSERT INTO orders (is_deleted, total_money, user_id, date_of_order, order_code)
-- VALUES
--     (0, 100.50, 1, '2024-01-19 12:30:00', 'ABC123'),
--     (0, 75.20, 2, '2024-01-20 14:45:00', 'DEF456'),
--     (0, 120.75, 3, '2024-01-21 10:15:00', 'GHI789'),
--     (0, 50.80, 1, '2024-01-22 08:00:00', 'JKL012'),
--     (0, 90.30, 2, '2024-01-23 16:20:00', 'MNO345'),
--     (0, 110.60, 3, '2024-01-24 09:30:00', 'PQR678'),
--     (0, 65.90, 1, '2024-01-25 11:45:00', 'STU901'),
--     (0, 80.45, 2, '2024-01-26 13:00:00', 'VWX234'),
--     (0, 95.75, 3, '2024-01-27 15:10:00', 'YZA567'),
--     (0, 55.20, 1, '2024-01-28 07:30:00', 'BCD890');


-- -- Insert into order_detail table
-- INSERT INTO order_detail (price_order, quantity, order_id, product_id) VALUES 
--   (799.99, 2, 1, 1),
--   (19.99, 1, 2, 2),
--   (29.99, 3, 3, 3),
--   (39.99, 1, 4, 4),
--   (9.99, 2, 5, 5),
--   (49.99, 1, 6, 6),
--   (14.99, 2, 7, 7),
--   (29.99, 1, 8, 8),
--   (799.99, 3, 9, 9),
--   (999.99, 1, 10, 10);
--   
  ALTER TABLE cart
    ADD UNIQUE INDEX user_product_index (user_id, product_id);

-- -----------------------------------------------------------------------------------------------------------


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
WHERE u.id = 1 AND od.id = 35;

SELECT u.id AS user_id, od.order_id AS orderId, od.price_order AS price_order,
       od.product_id AS product_id, od.quantity AS quantity, c.name AS category_name,
       p.name AS product_name
FROM order_detail od
JOIN product p ON od.product_id = p.id
JOIN user u ON od.order_id = u.account_id
LEFT JOIN category c ON p.id = c.product_id
WHERE u.id = 1 AND od.id = 29 AND od.is_deleted = 0;




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
WHERE p.id = 2;




SELECT
    od.id AS order_detail_id,
    od.price_order,
    od.quantity,
    o.id AS order_id,
    o.total_money,
    u.id AS user_id,
    p.id AS product_id,
    p.name AS product_name,
    i.name AS image_name
FROM
    order_detail od
JOIN
    orders o ON od.order_id = o.id
JOIN
    product p ON od.product_id = p.id
JOIN
    user u ON o.user_id = u.id
LEFT JOIN
    image i ON p.id = i.product_id
WHERE
    u.id = 1 AND
    o.id = 45;





SELECT id, name, product_id
FROM (
    SELECT c.id, c.name, c.product_id,
           ROW_NUMBER() OVER (PARTITION BY c.name ORDER BY c.id) AS row_num
    FROM category c
) AS numbered
WHERE row_num = 1;



