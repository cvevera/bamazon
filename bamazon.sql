DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE product (
item_id INTEGER NOT NULL auto_increment,
product_name VARCHAR(30),
department_name VARCHAR(30),
price INTEGER,
stock_quanity INTEGER,
PRIMARY KEY (item_id)
);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Jedi: Fallen Order", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Monopoly", "Board Games", 20, 300);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Stuffed Baby Yoda", "Toys", 45, 20);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Headphones", "Electronics", 75, 50);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Episode 9 Hoodie", "Apparel", 50, 500);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Rebels T-Shirt", "Apparel", 15, 200);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Pillow Case", "Home Goods", 10, 100);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Action Figure", "Toys", 25, 70);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Clue", "Board Games", 30, 40);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars Theme Xbox", "Electronics", 300, 150);

SELECT * FROM product;