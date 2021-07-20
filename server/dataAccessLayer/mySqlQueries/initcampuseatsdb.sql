-- CREATE DATABASE campus_eats_db;
-- USE campus_eats_db;
CREATE TABLE IF NOT EXISTS restaurants (
id int PRIMARY KEY auto_increment NOT NULL,
path VARCHAR(50) NOT NULL,
name varchar(50) NOT NULL,
logo VARCHAR(255),
background_image varchar(255) NOT NULL,
description mediumtext,
location varchar(255) NOT NULL,
map VARCHAR(255) 
);

CREATE TABLE IF NOT EXISTS menu_categories (
id int PRIMARY KEY auto_increment NOT NULL,
restaurant_id int,
name varchar(50) NOT NULL,
description mediumtext,
FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS meals (
id int PRIMARY KEY auto_increment NOT NULL,
menu_id int,
name varchar(50) NOT NULL,
description mediumtext,
image varchar(255),
price FLOAT,
calories VARCHAR(20)
FOREIGN KEY (menu_id) REFERENCES menu_categories(id)
);

CREATE TABLE IF NOT EXISTS hour (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  restaurant_id INT,
  day_of_week VARCHAR(25),
  open_hour VARCHAR(15),
  close_hour VARCHAR(15),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS restaurant_hour (
  restaurant_id INT NOT NULL,
  hour_id INT NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE,
  FOREIGN KEY (hour_id) REFERENCES hour(id),
 PRIMARY KEY (restaurant_id, hour_id)
);

CREATE TABLE IF NOT EXISTS customizations (
id int PRIMARY KEY auto_increment NOT NULL,
meal_id INT,
name varchar(255) NOT NULL,
changed_price FLOAT,
description mediumtext,
calories VARCHAR(255),
selected BOOLEAN NOT NULL DEFAULT FALSE,
FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
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
