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
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

INSERT INTO product (product_name, department_name, price, stock_quanity)
VALUES ("Star Wars", "Video Games", 60, 150);

SELECT * FROM product;