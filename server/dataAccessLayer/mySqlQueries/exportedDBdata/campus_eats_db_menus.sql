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
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `restaurant_id` int DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `description` mediumtext,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurant_id` (`restaurant_id`),
  CONSTRAINT `menus_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,1,'Original Meals','Long time favorites that anyone would enjoy!','url'),(2,1,'Grilled Meals','Choices under 350 calories!','url'),(3,2,'9\" Hand Tossed Pizza','4 Slices per pizza | Calories Listed by Slice','url'),(4,2,'Pasta',' ','url'),(5,2,'Snacks',' ','url'),(6,5,'Food and Drinks',' ','url'),(7,4,'Subway Heroes',' ','url'),(8,4,'Fan Faves',' ','url'),(9,4,'Sides',' ','url'),(10,6,'Breakfast',' ','url'),(11,6,'Entrées',' ','url'),(12,6,'Brooks\' Stop Sides',' ','url'),(13,6,'Hot Drinks',' ','url'),(14,6,'Cold Beverages',' ','url'),(15,6,'Frappuccino',' ','url'),(16,7,'Dessert',' ','url'),(17,7,'Beverages',' ','url'),(18,7,'Classic Sandwiches','Honey Wheat, White, Sourdough, or French Baguette','url'),(19,7,'Panini',' ','url'),(20,7,'Salad',' ','url'),(21,7,'Wraps','All wraps are served on a Sundried Tomato Wrap.','url'),(22,8,'Hot Drinks',' ','url'),(23,8,'Cold Beverages',' ','url'),(24,8,'Frappuccino Blended Beverages',' ','url'),(25,9,'Acai Bowls',' ','url'),(26,9,'Fruit Bowls',' ','url'),(27,9,'Protein Shakes',' ','url'),(28,9,'Smoothies',' ','url'),(29,9,'Parfait',' ','url'),(30,9,'Juices',' ','url');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-16 10:27:34
