CREATE DATABASE DatabaseName CHARACTER SET utf8;
USE campus_eats_db;
CREATE TABLE restaurants (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50) NOT NULL,
description mediumtext,
location varchar(255) NOT NULL,
image varchar(255) NOT NULL
);

CREATE TABLE menus (
id int PRIMARY KEY auto_increment NOT NULL,
restaurant_id int,
name varchar(50) NOT NULL,
description mediumtext,
image varchar(255),
FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE meals (
id int PRIMARY KEY auto_increment NOT NULL,
menu_id int,
name varchar(50) NOT NULL,
description mediumtext,
image varchar(255),
price FLOAT,
FOREIGN KEY (menu_id) REFERENCES menus(id)
);

CREATE TABLE ingredients (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50) NOT NULL,
description mediumtext
);

CREATE TABLE meals_ingredients (
meal_id int NOT NULL,
ingredient_id int NOT NULL,
FOREIGN KEY (meal_id) REFERENCES meals(id),
FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
PRIMARY KEY (meal_id, ingredient_id)
);

CREATE TABLE roles (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50) NOT NULL
);

CREATE TABLE users (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50),
role_id int NOT NULL,
location varchar(255) NOT NULL,
d_number VARCHAR(10) NOT NULL,
phone_number VARCHAR (12),
image varchar(255),
FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE permissions (
id int PRIMARY KEY auto_increment NOT NULL,
name varchar(50)
);

CREATE TABLE roles_permissions (
role_id int NOT NULL,
FOREIGN KEY (role_id) REFERENCES roles(id),
permission_id int NOT NULL,
FOREIGN KEY (permission_id) REFERENCES permissions(id),
PRIMARY KEY (role_id, permission_id)
);
