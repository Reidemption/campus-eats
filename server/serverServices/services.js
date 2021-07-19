const express = require("express");
const cors = require("cors");
const services = express();
const dataAccess = require("../dataAccessLayer/DAO");

// ========== Middlewares ===========
services.use(cors());
services.use(express.json({}));

// ======== Request handlers =========
// --- LOG ---
services.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  console.log("======================== REQUEST ==========================");
  console.log(
    "- Time:",
    Date.now(),
    "- Method:",
    req.method,
    "- Url:",
    req.url,
    "- Body:",
    req.body
  ),
    next();
});

services.get("/hello", (req, res) => {
  res.status(200).json({});
});

//  Get Restaurant name
services.get("/restaurant/", (req, res) => {
  let sql = `SELECT * FROM restaurants`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get Menus
services.get("/menus/", (req, res) => {
  let sql = `SELECT * FROM menus`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get Meals
services.get("/meals/", (req, res) => {
  let sql = `SELECT * FROM meals`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get specific Restaurants
services.get("/restaurants/", (req, res) => {
  let sql = `SELECT * FROM restaurants`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get specific Menus
services.get("/menus/", (req, res) => {
  let sql = `SELECT * FROM menus`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get specific Meals
services.get("/meals/", (req, res) => {
  let sql = `SELECT * FROM meals`;
  let data = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

<<<<<<< HEAD
=======
// Error in Brook's Stop formatting according to mySQL.
// Inserts all the restaurants
services.get("/in/restaurants", (req, res) => {
  let sql =
    "INSERT INTO `restaurants` VALUES (1,'Chick-fil-A','Eat Mor Chikin at Dixie State University!  Located in the Trailblazer Cafe, offering both original and grilled Chick-fil-A classics.','Gardner Building','url'),(2,'Pizza Hut','No one outpizzas the Hut.  Also serving pasta, wings, and bread/pretzel bites!','Gardner Building','url'),(3,'Ace Sushi','Offering a variety of sushi options available at various locations on campus.','Gardner Building','url'),(4,'Subway','Offering a variety of sandwich options that you can experience at any other Subway.','Gardner Building','url'),(5,'The Market','The Market at Dixie, located on the first floor of the Gardner Student Center, is more than just a convenience store. It’s a place where friends can meet, do homework, be tutored or just eat a snack or two while studying.','Gardner Building','url'),(6,'Brooks Stop','Located near the bulk of student housing, Brooks’ Stop provides a wide selection of breakfast, lunch, and dinner for students on the go.','Next to Campus View','url'),(7,'Stacks','Our campus sandwich shop also offers wraps, salads, paninis, and soup!  Not to mention our famous s’mores cookie with ice cream.','2nd Floor Holland Building','url'),(8,'Infusion','Not only do we serve beverages, but we also serve Starbucks coffees, teas, freshly squeezed orange juice, hot toasted bagels, muffins, donuts, and other snacks.','1st Floor Holland Building','url'),(9,'Grazers','Located in the Human Performance Center we offer a variety of toasts! NEW this fall we are introducing B-Fruity who will offer acai bowls, smoothies, protein shakes, fresh pressed juices, parfaits, and more!','HPC','url');";
  let query = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

// Insert menu categories into the mySQL local database
services.get("/in/menus", (req, res) => {
  let sql =
    "INSERT INTO `menus` VALUES (1,1,'Original Meals','Long time favorites that anyone would enjoy!','url'),(2,1,'Grilled Meals','Choices under 350 calories!','url'),(3,2,'9 inch Hand Tossed Pizza','4 Slices per pizza | Calories Listed by Slice','url'),(4,2,'Pasta',' ','url'),(5,2,'Snacks',' ','url'),(6,5,'Food and Drinks',' ','url'),(7,4,'Subway Heroes',' ','url'),(8,4,'Fan Faves',' ','url'),(9,4,'Sides',' ','url'),(10,6,'Breakfast',' ','url'),(11,6,'Entrées',' ','url'),(12,6,'Brooks Stop Sides',' ','url'),(13,6,'Hot Drinks',' ','url'),(14,6,'Cold Beverages',' ','url'),(15,6,'Frappuccino',' ','url'),(16,7,'Dessert',' ','url'),(17,7,'Beverages',' ','url'),(18,7,'Classic Sandwiches','Honey Wheat, White, Sourdough, or French Baguette','url'),(19,7,'Panini',' ','url'),(20,7,'Salad',' ','url'),(21,7,'Wraps','All wraps are served on a Sundried Tomato Wrap.','url'),(22,8,'Hot Drinks',' ','url'),(23,8,'Cold Beverages',' ','url'),(24,8,'Frappuccino Blended Beverages',' ','url'),(25,9,'Acai Bowls',' ','url'),(26,9,'Fruit Bowls',' ','url'),(27,9,'Protein Shakes',' ','url'),(28,9,'Smoothies',' ','url'),(29,9,'Parfait',' ','url'),(30,9,'Juices',' ','url');";
  let query = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

// Insert meals into the mySQL local database
services.get("/in/meals", (req, res) => {
  let sql =
    "INSERT INTO `meals` VALUES (1,1,'Chick-fil-A Chicken Sandwich Meal','A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.','url',6.99,'660-1040'),(2,1,'Chick-fil-A Chicken Sandwich Entrée Regular',' ','url',3.89,'440'),(3,1,'Chick-fil-A Chicken Sandwich Deluxe Entrée','with lettuce, tomato & American Cheese','url',4.49,'500'),(4,1,'Chick-fil-A Chicken Sandwich Deluxe Meal',' ','url',7.59,'720-1100'),(5,1,'Chick-fil-A Spicy Chicken Sandwich Meal',' ','url',7.39,'680-1070'),(6,1,'Chick-fil-A Spicy Chicken Sandwich Entrée',' ','url',4.25,'540'),(7,1,'Chick-fil-A Spicy Chicken Sandwich Deluxe Entrée','with lettuce, tomato & Pepper Jack cheese','url',4.85,'550'),(9,1,'Chick-fil-A Spicy Chicken Sandwich Deluxe Meal','with lettuce, tomato & Pepper Jack cheese','url',7.99,'760-1150'),(10,1,'Chick-fil-A Nuggets 8-ct Meal','Bite-sized pieces of tender all breast meat chicken, seasoned to perfection, hand-breaded and pressure cooked in 100% refined peanut oil.','url',7.09,'470-860'),(11,1,'Chick-fil-A Nuggets 8-ct Entrée',' ','url',3.99,'250'),(12,1,'Chick-fil-A Nuggets 12-ct Entrée',' ','url',5.75,'380'),(13,1,'Chick-fil-A Nuggets 30-ct Entrée',' ','url',14.35,'900'),(14,1,'Chick-fil-A Nuggets 12-ct Meal',' ','url',8.85,'600-990'),(15,2,'Grilled Chicken Meal','A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce and tomato. Served with Honey Roasted BBQ Sauce.','url',8.75,'540-930'),(16,2,'Grilled Chicken Entrée',' ','url',5.55,'320'),(17,2,'Grilled Chicken Club Entrée',' ','url',6.89,'460'),(18,2,'Grilled Chicken Club Meal','A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy backyard-smokey taste, served on a toasted Multigrain Brioche bun with Green Leaf lettuce, tomato, bacon & Colby-Jack cheese. Served with Honey Roasted BBQ Sauce.','url',10.09,'670-1060'),(19,2,'Grilled Chicken Nuggets 8-ct Meal','Bite-sized pieces of boneless breast of chicken, marinated with a special blend of seasonings and grilled for a tender and juicy backyard-grilled taste.','url',7.95,'350-740'),(20,2,'Grilled Chicken Nuggets 12-ct Meal',' ','url',10.09,'420-800'),(21,2,'Grilled Chicken Nuggets 30-ct Entrée',' ','url',17.45,'450'),(22,2,'Grilled Chicken Nuggets 12-ct Entrée',' ','url',6.99,'200'),(23,2,'Grilled Chicken Nuggets 8-ct Entrée',' ','url',4.79,'130'),(24,3,'Cheese',' ','url',5.99,'250'),(25,3,'Pepperoni',' ','url',5.99,'250'),(26,3,'Supreme',' ','url',7.49,'290'),(27,4,'Chicken Alfredo',' ','url',5.99,'750'),(28,5,'8 PC Bread Bites',' ','url',2.49,'40/bite'),(29,5,'Make It A Combo','Add 8 PC Bites & 24 oz drink to any entrée.','url',3.99,'adds 320-650'),(40,6,'Red Bull',' ','url',1.99,'168'),(41,7,'Black Forest Ham 6 Inch Regular Sub',' ','url',4.59,'260'),(42,8,'Ham & Cheese Melt Footlong Melt',' ','url',9.18,'520'),(43,9,'Chocolate Chip Cookie','Soft, buttery, chock full of chips. What more can we say? Enjoy.','url',0.99,'220'),(46,10,'The Original Breakfast Sandwich','White bread, egg, cheese, and your choice of sausage, ham, or bacon.','url',4.39,'500'),(47,10,'Bagel Breakfast Sandwich','Fresh made bagel, egg, cheese, and your choice of sausage, ham, or bacon.','url',4.89,'500'),(48,11,'Americana','Beef patty, cheese, bacon, lettuce, tomato, and onion.','url',7.49,' '),(49,11,'The Cali','Grilled chicken breast, lettuce, tomato, onion, and avocado.','url',7.79,' '),(50,11,'The Honky-Tonk','Beef patty, Onion Ring, bacon, cheese, BBQ sauce, and peppered pork.','url',8.49,' '),(51,11,'Sunny Side Up','Beef patty, sunny side up egg, ham, bacon, lettuce, tomato, and onion.','url',7.79,' '),(52,11,'Bison Bites','Tater tots topped with smoked pulled pork, cheese, jalapeños, BBQ Sauce, and our homemade fry sauce.','url',7.59,' '),(53,11,'Chicken Basket','Homestyle breaded chicken strips on top of our crispy coated fries.','url',9.99,' '),(54,11,'Cheese Pizza','Homemade artisan dough pizza topped with sauce and cheese.','url',5.29,' '),(55,11,'Pepperoni Pizza','Homemade artisan dough pizza topped with sauce, cheese, and pepperoni.','url',5.59,' '),(56,11,'Sausage Pizza','Homemade artisan dough pizza topped with sauce, cheese, and sausage.','url',5.59,' '),(57,11,'Bison Wing Basket','6 Chicken Wings smothered in Hot or BBQ sauce and a side of fries.','url',8.99,' '),(58,11,'Bison Wings','10 Wings smothered in Hot or BBQ sauce.','url',12.99,' '),(59,12,'French Fries','Crispy coated fry seasoned with our Blaze seasoning.','url',2.99,' '),(60,12,'Tater Tots','Crunchy tots seasoned with seasoning salt.','url',2.99,' '),(61,13,'Caramel Macchiato Venti',' ','url',4.95,' '),(62,13,'Caramel Macchiato Grande',' ','url',4.65,' '),(63,13,'Caramel Macchiato Tall',' ','url',3.95,' '),(64,13,'Caffe Mocha Venti',' ','url',4.75,' '),(65,13,'Caffe Mocha Grande',' ','url',4.15,' '),(66,13,'Caffe Mocha Tall',' ','url',3.45,' '),(67,13,'White Chocolate Mocha Venti',' ','url',4.95,' '),(68,13,'White Chocolate Mocha Grande',' ','url',4.65,' '),(69,13,'White Chocolate Mocha Tall',' ','url',3.95,' '),(70,13,'Caffe Latte Venti',' ','url',4.25,' '),(71,13,'Caffe Latte Grande',' ','url',3.65,' '),(72,13,'Caffe Latte Tall',' ','url',2.95,' '),(73,13,'Vanilla Latte Venti',' ','url',4.75,' '),(74,13,'Vanilla Latte Grande',' ','url',4.15,' '),(75,13,'Vanilla Latte Tall',' ','url',3.45,' '),(76,13,'Cappuccino Venti',' ','url',4.25,' '),(77,13,'Cappuccino Grande',' ','url',3.65,' '),(78,13,'Cappuccino Tall',' ','url',2.95,' '),(79,13,'Caffe Americano Venti',' ','url',3.25,' '),(80,13,'Caffe Americano Grande',' ','url',2.95,' '),(81,13,'Caffe Americano Tall',' ','url',2.25,' '),(82,13,'Espresso Doppio',' ','url',1.95,' '),(83,13,'Espresso Solo',' ','url',1.75,' '),(84,13,'Coffee Venti',' ','url',2.45,' '),(85,13,'Coffee Grande',' ','url',2.15,' '),(86,13,'Coffee Tall',' ','url',1.95,' '),(87,13,'Hot Chocolate Venti',' ','url',3.45,' '),(88,13,'Hot Chocolate Grande',' ','url',3.25,' '),(89,13,'Hot Chocolate  Tall',' ','url',2.75,' '),(90,13,'Hot White Chocolate Venti',' ','url',3.95,' '),(91,13,'Hot White Chocolate Grande',' ','url',3.55,' '),(92,13,'Hot White Chocolate Tall',' ','url',2.95,' '),(93,13,'Flavored Steamer Venti',' ','url',3.45,' '),(94,13,'Flavored Steamer Grande',' ','url',3.25,' '),(95,13,'Flavored Steamer Tall',' ','url',2.75,' '),(96,13,'Teavana Hot Tea Venti',' ','url',2.45,' '),(97,13,'Teavana Hot Tea Grande',' ','url',2.15,' '),(98,13,'Teavana Hot Tea Tall',' ','url',1.95,' '),(99,22,'Caramel Macchiato Venti',' ','url',4.95,' '),(100,22,'Caramel Macchiato Grande',' ','url',4.65,' '),(101,22,'Caramel Macchiato Tall',' ','url',3.95,' '),(102,22,'Caffe Mocha Venti',' ','url',4.75,' '),(103,22,'Caffe Mocha Grande',' ','url',4.15,' '),(104,22,'Caffe Mocha Tall',' ','url',3.45,' '),(105,22,'White Chocolate Mocha Venti',' ','url',4.95,' '),(106,22,'White Chocolate Mocha Grande',' ','url',4.65,' '),(107,22,'White Chocolate Mocha Tall',' ','url',3.95,' '),(108,22,'Caffe Latte Venti',' ','url',4.25,' '),(109,22,'Caffe Latte Grande',' ','url',3.65,' '),(110,22,'Caffe Latte Tall',' ','url',2.95,' '),(111,22,'Vanilla Latte Venti',' ','url',4.75,' '),(112,22,'Vanilla Latte Grande',' ','url',4.15,' '),(113,22,'Vanilla Latte Tall',' ','url',3.45,' '),(114,22,'Cappuccino Venti',' ','url',4.25,' '),(115,22,'Cappuccino Grande',' ','url',3.65,' '),(116,22,'Cappuccino Tall',' ','url',2.95,' '),(117,22,'Caffe Americano Venti',' ','url',3.25,' '),(118,22,'Caffe Americano Grande',' ','url',2.95,' '),(119,22,'Caffe Americano Tall',' ','url',2.25,' '),(120,22,'Espresso Doppio',' ','url',1.95,' '),(121,22,'Espresso Solo',' ','url',1.75,' '),(122,22,'Coffee Venti',' ','url',2.45,' '),(123,22,'Coffee Grande',' ','url',2.15,' '),(124,22,'Coffee Tall',' ','url',1.95,' '),(125,22,'Hot Chocolate Venti',' ','url',3.45,' '),(126,22,'Hot Chocolate Grande',' ','url',3.25,' '),(127,22,'Hot Chocolate  Tall',' ','url',2.75,' '),(128,22,'Hot White Chocolate Venti',' ','url',3.95,' '),(129,22,'Hot White Chocolate Grande',' ','url',3.55,' '),(130,22,'Hot White Chocolate Tall',' ','url',2.95,' '),(131,22,'Flavored Steamer Venti',' ','url',3.45,' '),(132,22,'Flavored Steamer Grande',' ','url',3.25,' '),(133,22,'Flavored Steamer Tall',' ','url',2.75,' '),(134,22,'Teavana Hot Tea Venti',' ','url',2.45,' '),(135,22,'Teavana Hot Tea Grande',' ','url',2.15,' '),(136,22,'Teavana Hot Tea Tall',' ','url',1.95,' '),(137,14,'Iced Caramel Macchiato Venti',' ','url',5.25,' '),(138,14,'Iced Caramel Macchiato Grande',' ','url',4.65,' '),(139,14,'Iced Caffe Mocha Venti',' ','url',4.75,' '),(140,14,'Iced Caffe Mocha Grande',' ','url',4.15,' '),(141,14,'Iced White Chocolate Mocha Venti',' ','url',5.25,' '),(142,14,'Iced White Chocolate Mocha Grande',' ','url',4.45,' '),(143,14,'Iced Caffe Latte Venti',' ','url',4.25,' '),(144,14,'Iced Caffe Latte Grande',' ','url',3.65,' '),(145,14,'Iced Tazo Chai Latte Venti',' ','url',4.25,' '),(146,14,'Iced Tazo Chai Latte Grande',' ','url',3.95,' '),(147,14,'Iced Coffee Venti',' ','url',2.95,' '),(148,14,'Iced Coffee Grande',' ','url',2.65,' '),(149,14,'Vanilla Iced Coffee Venti',' ','url',2.95,' '),(150,14,'Vanilla Iced Coffee Grande',' ','url',2.65,' '),(151,14,'Caramel Iced Coffee Venti',' ','url',2.95,' '),(152,14,'Caramel Iced Coffee Grande',' ','url',2.65,' '),(153,14,'Americano Venti',' ','url',2.95,' '),(154,14,'Americano Grande',' ','url',2.65,' '),(155,14,'Iced Tea Lemonade Venti',' ','url',3.45,' '),(156,14,'Iced Tea Lemonade Grande',' ','url',2.95,' '),(157,14,'Teavana Ice Tea Venti',' ','url',2.65,' '),(158,14,'Teavana Ice Tea Grande',' ','url',2.25,' '),(159,23,'Iced Caramel Macchiato Venti',' ','url',5.25,' '),(160,23,'Iced Caramel Macchiato Grande',' ','url',4.65,' '),(161,23,'Iced Caffe Mocha Venti',' ','url',4.75,' '),(162,23,'Iced Caffe Mocha Grande',' ','url',4.15,' '),(163,23,'Iced White Chocolate Mocha Venti',' ','url',5.25,' '),(164,23,'Iced White Chocolate Mocha Grande',' ','url',4.45,' '),(165,23,'Iced Caffe Latte Venti',' ','url',4.25,' '),(166,23,'Iced Caffe Latte Grande',' ','url',3.65,' '),(167,23,'Iced Tazo Chai Latte Venti',' ','url',4.25,' '),(168,23,'Iced Tazo Chai Latte Grande',' ','url',3.95,' '),(169,23,'Iced Coffee Venti',' ','url',2.95,' '),(170,23,'Iced Coffee Grande',' ','url',2.65,' '),(171,23,'Vanilla Iced Coffee Venti',' ','url',2.95,' '),(172,23,'Vanilla Iced Coffee Grande',' ','url',2.65,' '),(173,23,'Caramel Iced Coffee Venti',' ','url',2.95,' '),(174,23,'Caramel Iced Coffee Grande',' ','url',2.65,' '),(175,23,'Americano Venti',' ','url',2.95,' '),(176,23,'Americano Grande',' ','url',2.65,' '),(177,23,'Iced Tea Lemonade Venti',' ','url',3.45,' '),(178,23,'Iced Tea Lemonade Grande',' ','url',2.95,' '),(179,23,'Teavana Ice Tea Venti',' ','url',2.65,' '),(180,23,'Teavana Ice Tea Grande',' ','url',2.25,' '),(181,24,'Coffee Venti',' ','url',4.45,' '),(182,24,'Coffee Grande',' ','url',3.95,' '),(183,24,'Mocha Venti',' ','url',4.95,' '),(184,24,'Mocha Grande',' ','url',4.65,' '),(185,24,'Caramel Venti',' ','url',4.95,' '),(186,24,'Caramel Grande',' ','url',4.65,' '),(187,24,'Vanilla Bean Venti',' ','url',4.45,' '),(188,24,'Vanilla Bean Grande',' ','url',3.95,' '),(189,24,'Strawberries & Crème Venti',' ','url',4.95,' '),(190,24,'Strawberries & Crème Grande',' ','url',4.65,' '),(191,24,'Java Chip Venti',' ','url',4.95,' '),(192,24,'Java Chip Grande',' ','url',4.65,' '),(193,24,'White Mocha Venti',' ','url',4.95,' '),(194,24,'White Mocha Grande',' ','url',4.65,' '),(195,24,'Double Chocolaty Venti',' ','url',4.95,' '),(196,24,'Double Chocolaty Grande',' ','url',4.65,' '),(197,15,'Coffee Venti',' ','url',4.45,' '),(198,15,'Coffee Grande',' ','url',3.95,' '),(199,15,'Mocha Venti',' ','url',4.95,' '),(200,15,'Mocha Grande',' ','url',4.65,' '),(201,15,'Caramel Venti',' ','url',4.95,' '),(202,15,'Caramel Grande',' ','url',4.65,' '),(203,15,'Vanilla Bean Venti',' ','url',4.45,' '),(204,15,'Vanilla Bean Grande',' ','url',3.95,' '),(205,15,'Strawberries & Crème Venti',' ','url',4.95,' '),(206,15,'Strawberries & Crème Grande',' ','url',4.65,' '),(207,15,'Java Chip Venti',' ','url',4.95,' '),(208,15,'Java Chip Grande',' ','url',4.65,' '),(209,15,'White Mocha Venti',' ','url',4.95,' '),(210,15,'White Mocha Grande',' ','url',4.65,' '),(211,15,'Double Chocolaty Venti',' ','url',4.95,' '),(212,15,'Double Chocolaty Grande',' ','url',4.65,' '),(213,16,'Smores Cookie',' ','url',1.49,' '),(214,16,'Ice Cream (Single Scoop)',' ','url',1.99,' '),(215,16,'Ice Cream (Double Scoop)',' ','url',3.49,' '),(216,16,'Smores Cookie with Ice Cream',' ','url',3.19,' '),(217,17,'Trailblazer Bottled Water (23.7oz)',' ','url',1.29,' '),(218,17,'20oz Bottled Soda',' ','url',1.99,' '),(219,17,'Island Oasis Smoothie Small','Strawberry, Mango, Pina Colada, Peach, Ice Cream, Oreo Blast, Frozen Hot Chocolate','url',4.99,' '),(220,17,'Island Oasis Smoothie Large','Strawberry, Mango, Pina Colada, Peach, Ice Cream, Oreo Blast, Frozen Hot Chocolate','url',5.99,' '),(221,18,'Club Sandwich Whole','Turkey, ham, and applewood bacon with cheddar and swiss cheese, finished with lettuce, tomato, and mayo.','url',7.19,' '),(222,18,'Club Sandwich Half','','url',3.99,' '),(223,18,'Classic BLT Whole','Applewood bacon, lettuce, tomato, and spread.','url',5.99,' '),(224,18,'Classic BLT Half',' ','url',3.49,' '),(225,18,'Applewood Bacon/Chicken Whole','A whole chicken breast with applewood bacon, tomato, onion, lettuce, and sun-dried tomato spread.','url',7.19,' '),(226,18,'Applewood Bacon/Chicken Half',' ','url',3.99,' '),(233,19,'Hawaiian Chicken Whole','A full chicken breast, swiss cheese, and pineapple rings topped with teriyaki sauce.','url',7.19,' '),(234,19,'Hawaiian Chicken Half','','url',3.99,' '),(235,19,'Chipotle Turkey Melt Whole','One of our top sellers. Turkey topped with bacon and melted pepper jack cheese and finished off with pico de gallo and chipotle mayo.','url',5.99,' '),(236,19,'Chipotle Turkey Melt Half',' ','url',3.49,' '),(237,19,'Grilled Cheese Whole','A perfect combination of muenster and cheddar cheese with a basil pesto spread.','url',7.19,' '),(238,19,'Grilled Cheese Half',' ','url',3.99,' '),(239,20,'Chipotle Ranch','A bed of garden greens, fresh black bean salsa, chicken, avocado, tortilla strips and cheddar cheese.','url',8.29,' '),(240,20,'Sweet Sesame Chicken','Garden greens, chicken, carrots, red cabbage and onions topped with wontons and a sweet seame dressing.','url',7.99,' '),(241,20,'BLTA','Garden greens with bacon, tomato, avocado and ranch.','url',7.99,' '),(242,21,'Southwest Chicken','Loaded with chicken, black bean salsa, lettuce, avocado, cheddar cheese, tortilla strips and chipotle mayo.','url',6.99,' '),(243,21,'Sweet Sesame Chicken','A flavor explosion of chicken, carrots, red cabbage, and onions. Topped with wontons and a sweet sesame dressing.','url',5.99,' '),(244,21,'Hearty Hummus','A great vegetarian option packed with hummus, cucumber slices, lettuce, tomato, onion and avocado.','url',5.49,' '),(245,21,'Stacks Special','This wrap is loaded, with turkey, lettuce, cheese, tortilla strips, avocado & more.','url',6.99,' '),(246,21,'Aztec','Hummus paired with avocado pico de gallo, cheddar cheese and finished with tortilla strips.','url',6.19,' '),(247,25,'Bali','blueberry, strawberry, banana, almond milk','url',8.5,' '),(248,25,'Beach Babe','coconut, strawberry, banana, apple juice','url',8.5,' '),(249,25,'Moana','Pb, chocolate chip, strawberry, banana, almond milk','url',8.5,' '),(250,25,'Blazer','coco, chocolate chip, strawberry, banana, almond milk','url',8.5,' '),(251,25,'Maui','raspberry, coconut, banana, strawberry, almond milk','url',8.5,' '),(252,27,'Activator','pineapple, banana, spinach, vanilla protein, chia seed, flex seed','url',6.75,' '),(253,27,'Hunk','Pb, chocolate protein, banana','url',6.75,' '),(254,27,'Slim','strawberry, banana, vanilla protein','url',6.75,' '),(255,27,'Fusion','blueberry, strawberry, pineapple, vanilla protein','url',6.75,' '),(256,26,'Aloha','Mango, pineapple, coconut, banana, strawberry, almond milk','url',8.5,' '),(257,26,'Passion','Peach, pineapple, sherbet, strawberry, coconut','url',8.5,' '),(258,28,'Caribbean','Peach, strawberry, sherbet, mango, almond milk','url',6,' '),(259,28,'Orange Crush','Orange, pineapple, strawberry, mango, almond milk','url',6,' '),(260,28,'Strawberry Surf','Strawberry, banana, raspberry, blueberry, almond milk','url',6,' '),(261,28,'Sunrise','Raspberry, orange, pineapple, mango juice, almond milk','url',6,' '),(262,28,'Mango Tango','Mango, pineapple, banana','url',6,' '),(263,28,'Ripetide','Acai, blueberry, banana, strawberry, almond milk','url',6,' '),(264,30,'Refresher','Orange, pineapple, apple, lemon, grapefruit','url',7.5,' '),(265,30,'Mr. Beet','Beet, apple, lemon, carrot, ginger','url',7.5,' '),(266,30,'Green Goddess','Kale, spinach, parsley, cucumber, celery, apple, lemon','url',7.5,' '),(267,30,'Detox','Lemon, ginger, carrot, cucumber, apple','url',7.5,' '),(268,30,'Oxogen','Beet, apple, carrot, lemon, orange','url',7.5,' '),(269,29,'Parfait','Low-fat yogurt, strawberry, blueberry, granola','url',4.25,' '),(270,7,'Steak & Cheese',' ','url',8.99,'660'),(271,7,'Chicken & Bacon Ranch',' ','url',9.39,'1100'),(272,7,'Sweet Onion Chicken Teriyaki',' ','url',8.99,'660'),(273,7,'All-American Club',' ','url',8.69,'740'),(274,7,'Italian B.M.T',' ','url',7.49,'740'),(275,7,'Buffalo Chicken',' ','url',8.99,'700'),(276,8,'Oven-Roasted Turkey',' ','url',7.69,'560'),(277,8,'Spicy Italian',' ','url',6.29,'880'),(278,8,'Meatball Marinara',' ','url',5.89,'800'),(279,8,'Tuna',' ','url',7.29,'880'),(280,8,'Black Forest Ham',' ','url',6.39,'540'),(281,8,'Cold Cut Combo',' ','url',5.59,'600'),(282,6,'Skittles Sour Sharing Size',' ','url',2.19,'150'),(283,6,'Skittles Original',' ','url',1.49,'60'),(284,6,'Snickers Almond',' ','url',1.49,'230'),(285,6,'Reese's Sticks',' ','url',2.19,'219'),(286,6,'Extra Gum',' ','url',1.59,'5'),(287,6,'Skittles Sour Sharing Size',' ','url',2.19,'150'),(288,6,'f'real milkshake',' ','url',3.79,'580'),(289,6,'Bugles',' ','url',2.09,'150'),(290,6,'Chex Muddy Buddies',' ','url',3.09,'389'),(291,6,'Blue Diamond BOLD Almonds',' ','url',1.59,'170'),(292,6,'Aquafina 1 Liter',' ','url',2.79,''),(293,6,'Life Water 700mL',' ','url',2.39,''),(294,6,'Smartwater 23.7oz',' ','url',1.69,''),(295,6,'Dasani 1 Liter',' ','url',1.99,''),(296,6,'Vitamin Water',' ','url',1.99,''),(297,6,'Sobe',' ','url',2.89,''),(298,6,'Tropicana Orange Juice',' ','url',1.99,''),(299,6,'Starbucks Frapps',' ','url',3.39,''),(300,6,'Muscle Milk',' ','url',4.99,''),(301,6,'Pepsi 20oz',' ','url',2.29,''),(302,6,'Arizona',' ','url',0.99,''),(303,6,'Pure Leaf Tea',' ','url',2.89,''),(304,6,'Gatorade 28oz',' ','url',2.99,''),(305,6,'Gatorade 24oz',' ','url',2.49,''),(306,6,'Monster',' ','url',2.69,''),(307,6,'Bang Energy',' ','url',2.99,''),(308,6,'Nos',' ','url',2.69,''),(309,6,'Kickstart',' ','url',2.69,'');";
  let query = connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

>>>>>>> a57f1e1174b23e11c523b81ccfbafb9c4f9d24f8
// ========= EXPORT MODULE ==========
module.exports = services;
