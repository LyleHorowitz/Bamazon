CREATE DATABASE bamazonDB;

use bamazonDB;

CREATE TABLE bamazon_table (
	id INTEGER AUTO_INCREMENT NOT NULL,
    item_id VARCHAR(100) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(6,2),
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY(id)
    );

DESCRIBE bamazon_table;

INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity)
VALUES ("BSIN001", "Belgian Waffle Maker", "Home Appliances", 45, 10),
	   ("BSIN002", "Looney Tunes Golden Collection - Vol. 1", "Electronics", 25, 15),
       ("BSIN003", "North Face Winter Jacket - Black", "Clothing", 120, 20),
       ("BSIN004", "Rice Krispy Treats Cereal", "Food", 5, 50),
       ("BSIN005", "Monopoly - Star Wars Edition", "Toys & Board Games", 25, 10),
       ("BSIN006", "Tales From The Crypt - The Complete Series", "Electronics", 130, 15),
       ("BSIN007", "Wild Mountain Brand Organic Honey", "Food", 9, 30),
       ("BSIN008", "Tapout Brand Gym Shorts - Heather Grey", "Clothing", 35, 20),
	   ("BSIN009", "Hansen's Energy - 8oz 6-Pack", "Beverages", 12, 25),
	   ("BSIN010", "Old Spice Bodywash", "Home Goods", 5, 45);
-- insert 10 products
SELECT * FROM bamazon_table;

-- NPM Easy Table