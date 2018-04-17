# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: joaobelo.pt (MySQL 5.5.5-10.0.34-MariaDB)
# Database: joaobelo_mindera_gp
# Generation Time: 2018-04-14 23:25:26 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table event_day_list_elements
# ------------------------------------------------------------

DROP TABLE IF EXISTS `event_day_list_elements`;

CREATE TABLE `event_day_list_elements` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `list_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `event_day_list_elements` WRITE;
/*!40000 ALTER TABLE `event_day_list_elements` DISABLE KEYS */;

INSERT INTO `event_day_list_elements` (`id`, `order_id`, `list_id`, `name`, `image`)
VALUES
	(1,1,'1','Description 01','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic01.jpg'),
	(2,2,'1','Description 02','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic02.jpg'),
	(3,3,'1','Description 03','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic03.jpg'),
	(4,4,'1','Description 04','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic04.jpg'),
	(5,5,'1','Description 05','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic01.jpg'),
	(6,6,'1','Description 06','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic02.jpg'),
	(7,7,'1','Description 07','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic03.jpg'),
	(8,8,'1','Description 08','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic04.jpg'),
	(9,9,'1','Description 09','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic01.jpg'),
	(10,9,'2','Description 09','http://www.ricoh-imaging.co.jp//english/products/k-s2/ex/img/ex-thumb-pic01.jpg');

/*!40000 ALTER TABLE `event_day_list_elements` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table event_day_lists
# ------------------------------------------------------------

DROP TABLE IF EXISTS `event_day_lists`;

CREATE TABLE `event_day_lists` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `day_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `event_day_lists` WRITE;
/*!40000 ALTER TABLE `event_day_lists` DISABLE KEYS */;

INSERT INTO `event_day_lists` (`id`, `day_id`, `name`)
VALUES
	(1,'1','List 01'),
	(2,'1','List 02'),
	(3,'1','List 03'),
	(4,'1','List 04'),
	(5,'1','List 05'),
	(6,'1','List 06'),
	(7,'1','List 07'),
	(8,'1','List 08'),
	(9,'1','List 09'),
	(10,'1','List 10'),
	(11,'1','List 11'),
	(12,'1','List 12'),
	(13,'1','List 13'),
	(14,'1','List 14'),
	(15,'2','List 201'),
	(16,'2','List 202');

/*!40000 ALTER TABLE `event_day_lists` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table event_days
# ------------------------------------------------------------

DROP TABLE IF EXISTS `event_days`;

CREATE TABLE `event_days` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `event_id` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `event_days` WRITE;
/*!40000 ALTER TABLE `event_days` DISABLE KEYS */;

INSERT INTO `event_days` (`id`, `event_id`, `date`, `name`)
VALUES
	(1,'1','2018-04-21','Day 01'),
	(2,'1','2018-04-22','Day 02'),
	(3,'1','2018-04-23','Day 03'),
	(4,'1','2018-04-24','Day 04'),
	(5,'2','2018-06-01','Welcoming'),
	(6,'2','2018-06-02','The Basics'),
	(7,'2','2018-06-03','Develop Skills'),
	(8,'2','2018-06-04','Implementation'),
	(9,'3','2018-08-01','Day 01'),
	(10,'3','2018-08-02','Day 02'),
	(11,'3','2018-08-03','Day 03');

/*!40000 ALTER TABLE `event_days` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table events
# ------------------------------------------------------------

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;

INSERT INTO `events` (`id`, `date`, `name`)
VALUES
	(1,'2018-04-21','Open Day ’18'),
	(2,'2018-06-01','Graduate Program'),
	(3,'2018-08-01','Meet Mindera Code & Culture');

/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table settings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `settings`;

CREATE TABLE `settings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `github` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;

INSERT INTO `settings` (`id`, `github`, `twitter`, `linkedin`, `email`)
VALUES
	(1,'','','','');

/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
