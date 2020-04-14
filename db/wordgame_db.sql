 CREATE TABLE IF NOT EXISTS `Lettersets` 
 (`id` INTEGER NOT NULL auto_increment ,
  `letterset` VARCHAR(255), 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, 
  PRIMARY KEY (`id`)) ENGINE=InnoDB;
 SHOW INDEX FROM `Lettersets` FROM `wordgame_db`
 
 CREATE TABLE IF NOT EXISTS `Scores` 
 (`id` INTEGER NOT NULL auto_increment , 
 `score` INTEGER, 
 `createdAt` DATETIME NOT NULL, 
 `updatedAt` DATETIME NOT NULL, 
 PRIMARY KEY (`id`)) ENGINE=InnoDB;
 SHOW INDEX FROM `Scores` FROM `wordgame_db`
 
 CREATE TABLE IF NOT EXISTS `Users` 
 (`id` INTEGER NOT NULL auto_increment , 
 `email` VARCHAR(255), 
 `password` VARCHAR(255), 
 `createdAt` DATETIME NOT NULL, 
 `updatedAt` DATETIME NOT NULL, 
 PRIMARY KEY (`id`)) ENGINE=InnoDB;
 SHOW INDEX FROM `Users` FROM `wordgame_db`