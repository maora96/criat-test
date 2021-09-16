-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: cria-test
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('3bd918b1-7209-4378-8743-c8a9f8a4f0c6','dba82003816ec0200ef52d5a895fab1f9cbece466db6653cf1e22cf2f162b276','2021-09-15 11:59:01.973','20210915115901_init',NULL,NULL,'2021-09-15 11:59:01.915',1),('95f1da49-7419-4376-9dca-ce5003909cf1','c51eef8b03498de0c692957443c866e0be87d97f5661d35963a7eed50cb5f9e5','2021-09-15 21:08:28.280','20210915210828_init',NULL,NULL,'2021-09-15 21:08:28.065',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` enum('PORTOBELLO','DECORTILES','PORTINARI','DELTA','CEUSA') COLLATE utf8mb4_unicode_ci NOT NULL,
  `desactivatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `isActive` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumb` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (12,'Madeira clara de veios suaves, com leve passagem de cor. Assim como os portos que oferecem abrigo e segurança, Harbour proporciona aconchego para todos os ambientes da casa.','PORTOBELLO','2021-09-16 00:19:37.850',0,'Easy Collection','1631751577833.jpg'),(13,'A reprodução da Araucária, espécie nativa da Mata Atlântica da região Sul do Brasil. ','PORTOBELLO','2021-09-16 00:20:27.826',0,'Araucaria','1631753165618.jpg'),(14,'Area representa a essência das cores puras e básicas que se opõem e se complementam em diversas escalas, colocando-se como matéria prima para projetos únicos.\n','PORTOBELLO','2021-09-16 00:22:12.032',0,'Area','1631751732015.jpg'),(15,'Inspirada na personalidade ícone de inovação, beleza e charme, de Brigitte Bardot, essa coleção de mosaicos pode transformar os ambientes. ','PORTOBELLO','2021-09-16 00:23:26.805',0,'Bardot','1631751806798.jpg'),(16,'As florestas boreais ocorrem apenas no hemisfério norte, em uma região onde o solo ainda se mantém descongelado durante o verão.','PORTOBELLO','2021-09-16 00:24:38.219',0,'Boreal','1631751878213.jpg'),(17,'Casa de campo, em tradução literária, a Linha Cottage representa o charme e o estilo da Provence, onde o branco é um recurso para que materiais e texturas seculares mantenham a essência e ganhem uma roupagem contemporânea. ','PORTOBELLO','2021-09-16 00:26:35.469',0,'Cottage','1631751995463.jpg'),(18,'Desenhos suaves e tons iluminados proporcionam aconchego aos ambientes.','PORTOBELLO','2021-09-16 00:27:41.583',0,'Ecodiversa','1631752061577.jpg'),(19,'Ricas espécies de madeiras.','PORTOBELLO','2021-09-16 00:28:17.280',0,'Ecollection','1631752097272.jpg'),(20,'Reprodução de madeira de demolição vinda de Minas Gerais, Ecowood 2.0 supera sua versão anterior, em formatos, superfície e design, mas conserva suas raízes e vai deixar as pessoas apaixonadas novamente.','PORTOBELLO','2021-09-16 00:28:58.299',0,'Ecowood 2.0','1631752138295.jpg'),(21,'No lugar das tesouras, tecnologia de ponta com jato d’água para criar looks surpreendentes e exclusivos para todos os ambientes. ','PORTOBELLO','2021-09-16 00:29:40.056',0,'Forma','1631752180051.jpg');
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-15 21:50:10
