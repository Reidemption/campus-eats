CREATE DATABASE IF NOT EXISTS campus_eats_db;
USE campus_eats_db;
CREATE TABLE IF NOT EXISTS restaurants (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50) NOT NULL,
description mediumtext,
location varchar(255) NOT NULL,
image varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS menus (
id int PRIMARY KEY auto_increment NOT NULL,
restaurant_id int,
name varchar(50) NOT NULL,
description mediumtext,
image varchar(255),
FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE IF NOT EXISTS meals (
id int PRIMARY KEY auto_increment NOT NULL,
menu_id int,
name varchar(50) NOT NULL,
description mediumtext,
image varchar(255),
price FLOAT,
calories varchar(15),
FOREIGN KEY (menu_id) REFERENCES menus(id)
);

CREATE TABLE IF NOT EXISTS ingredients (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50) NOT NULL,
description mediumtext
);

CREATE TABLE IF NOT EXISTS meals_ingredients (
meal_id int NOT NULL,
ingredient_id int NOT NULL,
FOREIGN KEY (meal_id) REFERENCES meals(id),
FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
PRIMARY KEY (meal_id, ingredient_id)
);

CREATE TABLE IF NOT EXISTS roles (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50),
role_id int NOT NULL,
location varchar(255) NOT NULL,
d_number VARCHAR(10) NOT NULL,
phone_number VARCHAR (12),
image varchar(255),
FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE IF NOT EXISTS permissions (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50)
);

CREATE TABLE IF NOT EXISTS roles_permissions (
role_id int NOT NULL,
FOREIGN KEY (role_id) REFERENCES roles(id),
permission_id int NOT NULL,
FOREIGN KEY (permission_id) REFERENCES permissions(id),
PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS orders (
id int PRIMARY KEY auto_increment NOT NULL,
user_id INT NOT NULL,
name varchar(50),
total_price FLOAT NOT NULL,
order_time DATETIME NOT NULL,
is_delivered BIT NOT NULL,
deliver_time DATETIME,
FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS order_details (
order_id int NOT NULL,
meal_id int NOT NULL,
partial_price FLOAT NOT NULL,
order_time DATETIME NOT NULL,
FOREIGN KEY (order_id) REFERENCES orders(id),
FOREIGN KEY (meal_id) REFERENCES meals(id),
PRIMARY KEY (order_id, meal_id)
);

