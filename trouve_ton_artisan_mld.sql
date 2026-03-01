DROP DATABASE IF EXISTS trouve_ton_artisan ;
CREATE DATABASE trouve_ton_artisan ;
USE trouve_ton_artisan ;

CREATE TABLE Ville(
   id_ville INT AUTO_INCREMENT,
   nom VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_ville)
) 
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE Categorie(
   id_categorie INT AUTO_INCREMENT,
   nom VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_categorie)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE Specialite(
   id_specialite INT AUTO_INCREMENT,
   nom VARCHAR(50)  NOT NULL,
   id_categorie INT NOT NULL,
   PRIMARY KEY(id_specialite),
   FOREIGN KEY(id_categorie) REFERENCES Categorie(id_categorie)
	ON DELETE RESTRICT
    ON UPDATE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE Artisan(
   id_artisan INT AUTO_INCREMENT,
   nom VARCHAR(50)  NOT NULL,
   note DECIMAL(2,1) CHECK (note BETWEEN 0 AND 5),
   a_propos TEXT,
   email VARCHAR(100)  NOT NULL,
   site_web VARCHAR(255) ,
   top BOOLEAN NOT NULL DEFAULT FALSE,
   id_specialite INT NOT NULL,
   id_ville INT NOT NULL,
   PRIMARY KEY(id_artisan),
   UNIQUE(email),
   FOREIGN KEY(id_specialite) REFERENCES Specialite(id_specialite)
	ON DELETE RESTRICT
    ON UPDATE CASCADE,
   FOREIGN KEY(id_ville) REFERENCES Ville(id_ville)
	ON DELETE RESTRICT
    ON UPDATE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;