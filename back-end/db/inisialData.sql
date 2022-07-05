Use sql6444417;

-- first
-- INSERT INTO  roles  (role_id,permission) VALUES (5,"admin"),(1,"user");
-- INSERT INTO  users  (user_name,phone,email,password,role_id) VALUES ("Mohammad Ghazal","00962788812223","moh.g.ghazal@gmail.com","$2b$10$ofEa/jDwJlw3YgOzghwweewbkRRCb/mIulRI21dYNSofFwIjYcGQW",5),
-- ("Muath Nahhas","+962785958024","muath.nahhas@yahoo.com","$2b$10$ofEa/jDwJlw3YgOzghwweewbkRRCb/mIulRI21dYNSofFwIjYcGQW",5),("Ahmad Okasha","+971585930308","ahmad.r.okasha@gmail.com","$2b$10$ofEa/jDwJlw3YgOzghwweewbkRRCb/mIulRI21dYNSofFwIjYcGQW",5),("Test user","+975555666600","test.user@gmail.com","$2b$10$ofEa/jDwJlw3YgOzghwweewbkRRCb/mIulRI21dYNSofFwIjYcGQW",1);

-- second when get owner ids fill it for each user of 3 admins 
-- INSERT INTO  items  (owner_id,title,details,image) VALUES (1
-- ,"1984 Rockhopper vintage mountain bike red large mens bicycle"
-- ,"Core-Line fixed gear and single speed bicycles are what we're best known for. Built on a durable steel frame with seat stay rack mounts, eyelet mounts on the fork and cable stops, the Core Line models are as stylish as they are versatile. Quality components, a flip-flop hub that will allow you to ride fixed gear or freewheel and Cult x Vans ‘waffle pattern” grips will keep you comfortable and riding hassle-free for years to come"
-- ,"https://firebasestorage.googleapis.com/v0/b/bermuda-e0248.appspot.com/o/images%2Fg.jpg?alt=media&token=ac014760-e50f-4091-983b-317dc68ff0ee")


-- ,(2
-- ,"Ernien, 1 Barnes (America938-2009). Pool Hall. Oil on canvas. 36 x 48 inches (91.4 x 121.9 cm)"
-- ,"adOriginal canvas. Under UV exam, there does not appear to be inpaint. 2 inch scuff in the lower left corner. Small spots of surface soiling along the extreme bottom edges.
-- Framed Dimensions 42.5 X 54.5 Inches
-- -- *Heritage Auctions strives to provide as much information as possible but encourages in-person inspection by bidders. Statements regarding the condition of objects are only for general guidance and should not be relied upon as complete statements of fact, and do not constitute a representation, warranty or assumption of liability by Heritage. Some condition issues may not be noted in the condition report but are apparent in the provided photos which are considered part of the condition report. Please note that we do not de-frame lots estimated at $1,000 or less and may not be able to provide additional details for lots valued under $500. Heritage does not guarantee the condition of frames and shall not be liable for any damage/scratches to frames, glass/acrylic coverings, original boxes, display accessories, or art that has slipped in frames. All lots are sold AS IS under the Terms & Conditions of Auction.minFramed Dimensions 42.5 X 54.5 Inches"
-- -- ,"https://firebasestorage.googleapis.com/v0/b/bermuda-e0248.appspot.com/o/images%2Fpaint.gif?alt=media&token=63852865-5436-442c-a42b-d6939c71e8e9")

-- ,(3
-- ,"Rolex, An Important And Very Rare Yellow Gold GMT-Master, Bakelite Bezel, circa 1959"
-- ,"Rolex, An Important And Very Rare Yellow Gold GMT-Master, Bakelite Bezel, Ref. 6542, circa 1959
-- Case: 38 mm, 18k yellow gold, three body, rare original cognac brown-colored Bakelite bezel, original screw down crown, screw down case back, No. 486453
-- Dial: rich chocolate brown dial, luminous gold and baton indexes, date aperture at 3, gold lettering, luminous gold alpha hands, long slim gold GMT hand
-- Movement: Rolex caliber 1066, rhodium finish, self-winding, 25 jewels, adjusted to five positions and temperature, DN904269
-- Band: original 18k gold riveted spring bracelet, polished and brushed, full length, 13 links, deployant clasp with G makers mark in an oval frame
-- Signed: Rolex on the dial, case and movement
-- Property from a Corpus Christi Estate
-- Condition Report*:
-- Type: Rolex, An Important And Very Rare Yellow Gold GMT-Master, Bakelite Bezel, Ref. 6542, circa 1959
-- Dial: rich chocolate brown dial, luminous gold and baton indexes, date aperture at 3, gold lettering
-- Hands: luminous gold alpha hands, long slim gold GMT hand
-- Metal: 18k yellow gold
-- Case: #No. 486453
-- Case Info: three body, rare original cognac brown-colored Bakelite bezel, original screw down crown, screw down case back
-- Case Width: 38 mm
-- Crystal: acrylic
-- Watch Movement: Rolex caliber 1066, rhodium finish, self-winding, 25 jewels, adjusted to five positions and temperature, DN904269
-- Band: original 18k gold riveted spring bracelet, polished and brushed, full length, 13 links, deployant clasp with G makers mark in an oval frame
-- Condition: It is without a doubt that this timepiece ranks among the finest, most well preserved examples of this legendary reference. The timepiece features an all original bezel, strong case showing minimal wear, ultra-rich deep colored dial, unblemished movement with finish preserved as new, and a tight, very fine gold expansion band. Movement runs and sets as it should. Heritage does not guarantee timekeeping accuracy. We always recommend servicing for daily use and timekeeping accuracy,
-- *Heritage Auctions strongly encourages in-person inspection of items by the bidder. Statements by Heritage regarding the condition of objects are for guidance only and should not be relied upon as statements of fact, and do not constitute a representation, warranty, or assumption of liability by Heritage. All lots offered are sold AS IS"
-- ,"https://firebasestorage.googleapis.com/v0/b/bermuda-e0248.appspot.com/o/images%2FRolex.jpeg?alt=media&token=d9c8404e-6bc5-4bbd-bf11-6a5380bd61c1");





-- third
INSERT INTO  auctions  (user_id,item_id,starter_bid,bid_jump,start_date,end_date) VALUES (1,1,100,25,"2021-12-14T12:36:16.000Z","2022-01-14T12:36:16.000Z")
,(2,2,7000,300,"2021-12-16T12:15:16.000Z","2021-12-20T20:20:16.000Z"),(3,3,22000,500,"2021-12-20T15:15:16.000Z","2021-12-30T20:12:16.000Z");
