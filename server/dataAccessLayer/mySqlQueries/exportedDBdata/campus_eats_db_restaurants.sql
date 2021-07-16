-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: campus_eats_db
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` mediumtext,
  `location` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Chick-fil-A','Eat Mor Chikin at Dixie State University!  Located in the Trailblazer Cafe, offering both original and grilled Chick-fil-A classics.','Gardner Building','url'),(2,'Pizza Hut','No one outpizzas the Hut.  Also serving pasta, wings, and bread/pretzel bites!','Gardner Building','url'),(3,'Ace Sushi','Offering a variety of sushi options available at various locations on campus.','Gardner Building','url'),(4,'Subway','Offering a variety of sandwich options that you can experience at any other Subway.','Gardner Building','url'),(5,'The Market','The Market at Dixie, located on the first floor of the Gardner Student Center, is more than just a convenience store. It’s a place where friends can meet, do homework, be tutored or just eat a snack or two while studying.','Gardner Building','url'),(6,'Brooks Stop','Located near the bulk of student housing, Brooks’ Stop provides a wide selection of breakfast, lunch, and dinner for students on the go.','Next to Campus View','url'),(7,'Stacks','Our campus sandwich shop also offers wraps, salads, paninis, and soup!  Not to mention our famous s’mores cookie with ice cream.','2nd Floor Holland Building','url'),(8,'Infusion','Not only do we serve beverages, but we also serve Starbucks coffees, teas, freshly squeezed orange juice, hot toasted bagels, muffins, donuts, and other snacks.','1st Floor Holland Building','url'),(9,'Grazers','Located in the Human Performance Center we offer a variety of toasts! NEW this fall we are introducing B-Fruity who will offer acai bowls, smoothies, protein shakes, fresh pressed juices, parfaits, and more!','HPC','url');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-16 10:27:35
