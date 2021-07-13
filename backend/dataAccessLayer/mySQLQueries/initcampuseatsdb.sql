use campus_eats_db;
CREATE TABLE restaurants (
id int primary key auto_increment,
name varchar(50),
description mediumtext,
location varchar(255),
image varchar(255)
);

CREATE TABLE menus (
id int primary key auto_increment,
restaurant_id int,
FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
name varchar(50) NOT NULL,
description mediumtext,
image varchar(255)
);

CREATE TABLE meals (
id int primary key auto_increment,
menu_id int,
FOREIGN KEY (menu_id) REFERENCES menus(id),
name varchar(50),
description mediumtext,
image varchar(255),
price FLOAT
);

CREATE TABLE ingredients (
id int primary key auto_increment,
name varchar(50) NOT NULL,
description mediumtext
);

CREATE TABLE meal_ingredients (
meal_id int,
FOREIGN KEY (meal_id) REFERENCES meals(id),
ingredient_id int,
FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
PRIMARY KEY (meal_id, ingredient_id)
);
