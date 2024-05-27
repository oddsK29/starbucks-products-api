-- -------------------------------------------------------------
-- TablePlus 6.0.0(550)
--
-- https://tableplus.com/
--
-- Database: starbucksdb
-- Generation Time: 2024-05-27 17:32:23.7540
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS orderdetail_id_seq;

-- Table Definition
CREATE TABLE "public"."orderdetail" (
    "id" int4 NOT NULL DEFAULT nextval('orderdetail_id_seq'::regclass),
    "products_id" int4 NOT NULL,
    "amout" int4 NOT NULL,
    "orders_date" timestamp DEFAULT CURRENT_TIMESTAMP,
    "orders_id" int4 NOT NULL,
    "orders_complete_date" timestamp,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS orders_id_seq;

-- Table Definition
CREATE TABLE "public"."orders" (
    "id" int4 NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    "users_id" int4 NOT NULL,
    "orders_date" timestamp DEFAULT CURRENT_TIMESTAMP,
    "orders_complete_date" timestamp,
    "status" varchar(50) NOT NULL,
    "total" float4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS products_id_seq;

-- Table Definition
CREATE TABLE "public"."products" (
    "id" int4 NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "description" text,
    "price" float4,
    "region" varchar(255),
    "weight" int4,
    "flavor_profile" jsonb,
    "grind_option" jsonb,
    "roast_level" int4,
    "image_url" jsonb,
    "stock" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."orderdetail" ("id", "products_id", "amout", "orders_date", "orders_id", "orders_complete_date") VALUES
(3, 1, 2, '2024-05-26 19:50:07.94543', 4, '2024-05-27 08:51:42.704'),
(4, 20, 1, '2024-05-26 19:50:56.800109', 4, '2024-05-27 08:51:42.704'),
(5, 2, 1, '2024-05-26 19:52:40.359631', 8, '2024-05-27 08:29:24.984'),
(7, 3, 1, '2024-05-27 03:14:34.451909', 4, '2024-05-27 08:51:42.704'),
(8, 5, 1, '2024-05-27 03:15:03.270167', 8, '2024-05-27 08:29:24.984'),
(9, 10, 1, '2024-05-27 03:17:33.915764', 4, '2024-05-27 08:51:42.704'),
(10, 19, 1, '2024-05-27 03:40:58.72734', 4, '2024-05-27 08:51:42.704'),
(11, 4, 2, '2024-05-27 03:41:05.449237', 4, '2024-05-27 08:51:42.704'),
(12, 2, 2, '2024-05-27 03:41:45.174326', 8, '2024-05-27 08:29:24.984'),
(13, 4, 3, '2024-05-27 03:42:27.915646', 4, '2024-05-27 08:51:42.704'),
(14, 1, 1, '2024-05-27 03:42:30.520722', 4, '2024-05-27 08:51:42.704'),
(15, 18, 4, '2024-05-27 03:42:30.520722', 4, '2024-05-27 08:51:42.704'),
(16, 10, 1, '2024-05-27 03:43:28.124465', 4, '2024-05-27 08:51:42.704'),
(17, 2, 1, '2024-05-27 09:27:55.710838', 13, '2024-05-27 09:29:47.239');

INSERT INTO "public"."orders" ("id", "users_id", "orders_date", "orders_complete_date", "status", "total") VALUES
(4, 4, '2024-05-26 19:49:26.511332', NULL, 'shopping', NULL),
(8, 1, '2024-05-26 19:52:02.575483', '2024-05-27 08:29:24.984', 'complete', 45.96),
(10, 4, '2024-05-26 19:49:26.511332', '2024-05-27 08:29:34.738', 'complete', 0),
(11, 4, '2024-05-26 19:52:02.575483', NULL, 'close', NULL),
(12, 4, '2024-05-26 19:49:26.511332', NULL, 'shopping', NULL),
(13, 1, '2024-05-27 09:27:09.129035', '2024-05-27 09:29:47.239', 'complete', 10.99);

INSERT INTO "public"."products" ("id", "name", "description", "price", "region", "weight", "flavor_profile", "grind_option", "roast_level", "image_url", "stock") VALUES
(1, 'Signature Blend', 'A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.', 13.99, 'Central America', 500, '["Dark Chocolate", "Black Cherry"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y78Qt.webp", "https://iili.io/H8Y78Qt.webp", "https://iili.io/H8Y78Qt.webp"]', 0),
(2, 'Golden Sunrise', 'A smooth and bright coffee with a citrusy kick. Sourced from the rolling hills of Africa.', 10.99, 'Africa', 500, '["Citrus"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 2, '["https://iili.io/H8Y7WEg.webp", "https://iili.io/H8Y7WEg.webp", "https://iili.io/H8Y7WEg.webp"]', 9),
(3, 'Rainforest Rhapsody', 'An earthy and complex coffee with notes of toasted nuts and caramel. Sustainably grown in the rainforests of South America.', 14.99, 'South America', 500, '["Citrus"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 2, '["https://iili.io/H8Y7kTN.webp", "https://iili.io/H8Y7kTN.webp", "https://iili.io/H8Y7kTN.webp"]', 2),
(4, 'Harvest Moon', 'A smooth and earthy blend with notes of cocoa and hazelnut.', 9.99, 'Central America', 500, '["Cocoa", "Hazelnut"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7X4a.webp", "https://iili.io/H8Y7X4a.webp", "https://iili.io/H8Y7X4a.webp"]', 3),
(5, 'Wildfire', 'A bold and smoky blend with notes of dark chocolate and molasses.', 12.99, 'Africa', 500, '["Dark Chocolate", "Molasses"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 5, '["https://iili.io/H8Y7r4s.webp", "https://iili.io/H8Y7r4s.webp", "https://iili.io/H8Y7r4s.webp"]', 10),
(6, 'Walnut Wonder', 'A smooth and nutty coffee from the slopes of South America.', 9.99, 'South America', 500, '["Nutty", "Smooth"]', '["Whole bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7gGn.webp", "https://iili.io/H8Y7gGn.webp", "https://iili.io/H8Y7gGn.webp"]', 7),
(7, 'Breezy Beans', 'This coffee blend is made from beans sourced from Honduras and Costa Rica. It is a light roast coffee with a bright and citrusy flavor profile. It is perfect for pour-over and drip coffee brewing methods.', 11.99, 'Central America', 500, '["Citrusy"]', '["Whole bean", "Filter"]', 1, '["https://iili.io/H8Y7lpV.webp", "https://iili.io/H8Y7lpV.webp", "https://iili.io/H8Y7lpV.webp"]', 6),
(8, 'Indo-Viet Roast', 'This coffee blend is made from beans sourced from Indonesia and Vietnam. It is a medium-dark roast coffee with a spicy and earthy flavor profile, with notes of cinnamon and clove. It is perfect for drip and French press brewing methods.', 13.99, 'Asia Pacific', 500, '["Spicy", "Earthy", "Cinnamon", "Clove"]', '["Whole bean", "Filter", "French press"]', 4, '["https://iili.io/H8Y7wYv.webp", "https://iili.io/H8Y7wYv.webp", "https://iili.io/H8Y7wYv.webp"]', 8),
(9, 'Ethiopian Yirgacheffe', 'A light and fruity coffee with notes of blueberry and citrus. Grown in the highlands of Ethiopia, this coffee is sure to brighten up your morning.', 12.99, 'Africa', 500, '["Blueberry", "Citrus"]', '["Whole bean", "Cafetiere", "Filter", "Espresso"]', 2, '["https://iili.io/H8Y7VCF.webp", "https://iili.io/H8Y7VCF.webp", "https://iili.io/H8Y7VCF.webp"]', 4),
(10, 'Lazy Days', 'A medium-bodied coffee with a sweet and nutty flavor. Grown in the lush regions of Brazil, this coffee is perfect for a lazy afternoon.', 9.99, 'South America', 500, '["Hazelnut", "Chocolate", "Caramel"]', '["Whole bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7NvR.webp", "https://iili.io/H8Y7NvR.webp", "https://iili.io/H8Y7NvR.webp"]', 9),
(11, 'Andean Almond', 'A smooth and mellow coffee from the mountains of South America, with hints of almond and toffee.', 10.99, 'South America', 500, '["Almond", "Toffee"]', '["Whole Bean", "Cafetiere", "Filter"]', 3, '["https://iili.io/H8Y5Sgj.webp", "https://iili.io/H8Y5Sgj.webp", "https://iili.io/H8Y5Sgj.webp"]', 6),
(12, 'Savanna Noir', 'A bold and rich coffee from the African savanna, with notes of dark chocolate and blackcurrant.', 12.99, 'Africa', 500, '["Dark Chocolate", "Blackcurrant"]', '["Whole Bean", "Filter", "Espresso"]', 4, '["https://iili.io/H8Y7vjI.webp", "https://iili.io/H8Y7vjI.webp", "https://iili.io/H8Y7vjI.webp"]', 3),
(13, 'Coconut Kiss', 'A light and refreshing coffee from the shores of the Asia Pacific, with a subtle coconut flavor.', 9.99, 'Asia Pacific', 500, '["Coconut"]', '["Whole Bean", "Filter"]', 2, '["https://iili.io/H8Y7GQ1.webp", "https://iili.io/H8Y7GQ1.webp", "https://iili.io/H8Y7GQ1.webp"]', 10),
(14, 'Arabian Nights', 'A bold and spicy coffee from the Middle East, with notes of cardamom and cinnamon.', 13.99, 'Middle East', 500, '["Cardamom", "Cinnamon"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 0, '["https://iili.io/H8Y7ckQ.webp", "https://iili.io/H8Y7ckQ.webp", "https://iili.io/H8Y7ckQ.webp"]', 2),
(15, 'Midnight Mocha', 'Indulge in the rich, velvety flavors of this decadent mocha blend. Dark chocolate and espresso notes are combined with a touch of vanilla for a luxurious coffee experience.', 14.99, 'South America', 500, '["Dark Chocolate", "Espresso", "Vanilla"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 4, '["https://iili.io/H8Y7Opp.webp", "https://iili.io/H8Y7Opp.webp", "https://iili.io/H8Y7Opp.webp"]', 4),
(16, 'Himalayan Heights', 'Grown on the steep slopes of the Himalayan Mountains, this coffee is known for its bright acidity and delicate floral notes. This light roast is perfect for those who prefer a more delicate flavor profile.', 12.99, 'Asia Pacific', 500, '["Floral", "Citrus", "Honey"]', '["Whole Bean", "Cafetiere", "Filter", "Pour Over"]', 1, '["https://iili.io/H8Y7j3J.webp", "https://iili.io/H8Y7j3J.webp", "https://iili.io/H8Y7j3J.webp"]', 8),
(17, 'Sumatra Blend', 'Get your day started with the bold and earthy flavors of Sumatra. Grown on the lush tropical slopes of the Gayo Highlands, this coffee is known for its full body, low acidity, and notes of dark chocolate and smoke.', 8.99, 'Asia Pacific', 500, '["Dark Chocolate", "Smoke"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 5, '["https://iili.io/H8Y7UCX.webp", "https://iili.io/H8Y7UCX.webp", "https://iili.io/H8Y7UCX.webp"]', 5),
(18, 'Bali Bliss', 'Escape to the tropical paradise of Bali with this smooth and mellow blend. Grown on small family farms, this coffee is shade-grown and hand-picked for a rich and nuanced flavor profile. Notes of milk chocolate, hazelnut, and a hint of tropical fruit.', 11.99, 'Asia Pacific', 500, '["Milk Chocolate", "Hazelnut", "Tropical Fruit"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y71TB.webp", "https://iili.io/H8Y71TB.webp", "https://iili.io/H8Y71TB.webp"]', 1),
(19, 'Central Perk', 'A medium roast coffee with a smooth, nutty flavor and a hint of caramel. Inspired by your favorite coffee shop!', 9.99, 'Central America', 500, '["Nutty", "Caramel"]', '["Whole bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7aYx.webp", "https://iili.io/H8Y7aYx.webp", "https://iili.io/H8Y7aYx.webp"]', 3),
(20, 'Chilean Charm', 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.', 12.99, 'South America', 500, '["Chocolate", "Caramel", "Fruit"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp"]', 7),
(21, 'Test Test', 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.', 12.99, 'South America', 500, '["Chocolate", "Caramel", "Fruit"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 2, '["https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp"]', 7),
(22, 'Chilean Charm', 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.', 12.99, 'South America', 500, '["Chocolate", "Caramel", "Fruit"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp"]', 7),
(23, 'Chilean Charm', 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.', 12.99, 'South America', 500, '["Chocolate", "Caramel", "Fruit"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp"]', 7),
(24, 'Chilean Charm', 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.', 12.99, 'South America', 500, '["Chocolate", "Caramel", "Fruit"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp"]', 7),
(25, 'Chilean Charm', 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.', 12.99, 'South America', 500, '["Chocolate", "Caramel", "Fruit"]', '["Whole Bean", "Cafetiere", "Filter", "Espresso"]', 3, '["https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp", "https://iili.io/H8Y7EhP.webp"]', 7);

INSERT INTO "public"."users" ("id", "name", "email") VALUES
(1, 'King', 'jukrin@odds.team'),
(4, 'game', 'jj.com');

ALTER TABLE "public"."orderdetail" ADD FOREIGN KEY ("products_id") REFERENCES "public"."products"("id");
ALTER TABLE "public"."orderdetail" ADD FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id");
ALTER TABLE "public"."orders" ADD FOREIGN KEY ("users_id") REFERENCES "public"."users"("id");
