create database toothless_world;
use toothless_world;

create table roles(
id int primary key auto_increment,
name varchar(250)
);

create table users(
id int primary key auto_increment,
name varchar(250),
birthday date,
gender varchar(50),
email varchar(250),
phone varchar(50),
address varchar(250),
username varchar(250),
`password` varchar(250),
role_id int,
foreign key(role_id) references roles(id)
);

create table products(
id int primary key auto_increment,
name varchar(250),
`description` longtext
);

create table categories(
id int primary key auto_increment,
name varchar(250),
`description` longtext
);

create table category_details(
category_id int,
product_id int,
primary key(category_id,product_id),
foreign key(product_id) references products(id),
foreign key(category_id) references categories(id)
);


create table sizes(
id int primary key auto_increment,
`name` varchar(250),
`status` bit(1) ,
price double, 
`description` longtext,
quantity int
);

create table size_details(
size_id int,
product_id int,
primary key(size_id,product_id),
foreign key(product_id) references products(id),
foreign key(size_id) references sizes(id)
);


create table images(
id  int primary key auto_increment,
name varchar(250),
product_id int,
foreign key(product_id) references products(id)
);

create table orders(
id int primary key auto_increment,
date_of_order date,
total_money double,
user_id int,
foreign key(user_id) references users(id)
);

create table order_details(
id int primary key auto_increment,
quantity int,
price_order double,
order_id int, 
product_id int,
foreign key(order_id) references orders(id),
foreign key(product_id) references products(id)
);

create table carts(
id int primary key auto_increment,
quantity_order int,
user_id int,
product_id int,
foreign key(user_id) references users(id),
foreign key(product_id) references products(id)
);