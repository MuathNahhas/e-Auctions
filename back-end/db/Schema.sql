

Use sql6444417;





CREATE TABLE IF NOT EXISTS  roles (
role_id INT AUTO_INCREMENT NOT NULL,
permission VARCHAR(255),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (role_id)
);


CREATE TABLE IF NOT EXISTS   payments(
payment_id INT AUTO_INCREMENT NOT NULL,
payment_type VARCHAR(255),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (payment_id)
);

CREATE TABLE IF NOT EXISTS  users(
user_id INT AUTO_INCREMENT NOT NULL,
user_name VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
payment_ref INT,
role_id INT,
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (user_id),
FOREIGN KEY (role_id) REFERENCES roles(role_id),
FOREIGN KEY (payment_ref) REFERENCES payments(payment_id)
); 


CREATE TABLE IF NOT EXISTS  items(
item_id INT AUTO_INCREMENT NOT NULL,
owner_id INT,
image VARCHAR(255),
title VARCHAR(255),
details VARCHAR(1200),
FOREIGN KEY (owner_id) REFERENCES users(user_id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (item_id)
);

CREATE TABLE IF NOT EXISTS  bids (
bid_id INT AUTO_INCREMENT NOT NULL,
auction_id INT,
date Date,
user_id INT,
bid_value INT,
PRIMARY KEY (bid_id),
FOREIGN KEY (user_id)
REFERENCES users(user_id)
);


CREATE TABLE IF NOT EXISTS  auctions (
auction_id INT AUTO_INCREMENT NOT NULL,
user_id INT,
item_id INT,
starter_bid INT,
start_date Date ,
end_date Date ,
bid_jump INT,
closed_on INT,
is_deleted TINYINT DEFAULT 0,
FOREIGN KEY (closed_on) REFERENCES bids(bid_id),
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (item_id) REFERENCES items(item_id),
PRIMARY KEY (auction_id)
);



CREATE TABLE IF NOT EXISTS  favoritesUsers (
user_id INT NOT NULL,
fav_user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (fav_user_id) REFERENCES users(user_id),
PRIMARY KEY (user_id,fav_user_id )
);

CREATE TABLE IF NOT EXISTS  favoritesAuctions (
user_id INT NOT NULL,
fav_auction_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (fav_auction_id) REFERENCES auctions(auction_id),
PRIMARY KEY (user_id,fav_auction_id )
);


CREATE TABLE IF NOT EXISTS contacts(
    user_id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(255),
    email VARCHAR(255),
    message VARCHAR(255),
    PRIMARY KEY (user_id)
)



ALTER TABLE bids 
 ADD FOREIGN KEY (auction_id) REFERENCES auctions(aution_id);
