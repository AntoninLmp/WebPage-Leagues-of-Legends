CREATE DATABASE if not exists leagueOfLengend; 
USE leagueOfLengend;

DROP TABLE if exists player; 
DROP TABLE if exists team; 
DROP TABLE if exists game_caractere; 

CREATE TABLE team(
	team_id int auto_increment PRIMARY KEY, 
    team_name varchar(100),
    team_gamePlay int NOT NULL,
    team_victory int NOT NULL, 
    team_defeat int NOT NULL,
    team_continent varchar(100),
    team_numbMember int NOT NULL
);

CREATE TABLE game_caractere(
	caract_id int auto_increment PRIMARY KEY, 
    caract_name varchar(100),
    caract_title varchar(100),
    caract_HP int NOT NULL,
    caract_armor float NOT NULL, 
    caract_attackDamage float NOT NULL, 
    caract_attackSpeed float NOT NULL,
    caract_icon varchar(200)
);


CREATE TABLE player (
	player_id int auto_increment PRIMARY KEY,
	player_firstName varchar(100),
    player_lastName varchar(100),
    player_pseudo varchar(100),
    player_country varchar(100),
    player_team int NOT NULL,    
    player_favCaract int,
    CONSTRAINT fk_team FOREIGN KEY (player_team) REFERENCES team(team_id),
    CONSTRAINT fk_favcaract FOREIGN KEY (player_favCaract) REFERENCES game_caractere(caract_id)
);

/* https://www.rotowire.com/esports/team-stats-lol.php?league=297&series= */
INSERT INTO team VALUES 
	(1,"T1",69, 49, 20, "Korean",7),
    (2,"Cloud9", 86, 47, 39, "USA",6),
    (3,"Fnatic", 78, 43, 35, "Europe",7),
    (4,"G2 Esport", 68, 37, 31, "Europe",7),
    (5,"Edward Gaming", 58, 31, 27, "China",7),
    (6,"Royal Never Give Up", 46, 27, 19, "China",7),
    (7,"FunPlus Phoenix ", 23, 16, 7, "China",7),
    (8,"Team Liquid", 26, 14, 12, "USA",7),
    (9,"Unicorn of Love", 30, 12, 18, "Europe",7),
    (10,"Hanwha Life Esports", 10, 7,3, "korean",7);
    
INSERT INTO game_caractere VALUES
    (NULL, "Aatrox", "the Darkin Blade", 580, 38, 60, 0.651, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Aatrox.png"),
    (NULL, "Ahri", "the Nine-Tailed Fox", 526, 20.88, 53.04, 0.668, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ahri.png"),
    (NULL, "Akali", "the Rogue Assassin", 575, 23, 62.4, 0.625, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Akali.png"),
    (NULL, "Alistar", "the Minotaur", 600, 44, 62, 0.625, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Alistar.png"),
    (NULL, "Amumu", "the Sade Mummy", 615, 30, 53.38, 0.736, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Amumu.png"),
    (NULL, "Anivia", "the Cryophoenix", 480, 21.22, 51.376, 0.625,"http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Anivia.png"),
    (NULL, "Annie", "the Dark Child", 524, 19.22, 50.41, 0.579, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Annie.png"),
    (NULL, "Aphelios", "the Weapon of the Faithful", 530, 28, 57, 0.64, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Aphelios.png"),
    (NULL, "Ashe", "the Frost Archer", 570, 26, 59, 0.658, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ashe.png"),
    (NULL, "Aurelion Sol", "The Star Forger", 575, 19, 57, 0.625, "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/AurelionSol.png");

INSERT INTO player VALUES 
	(1,"LEE","SANGHYEOK","Faker", "Korean", 1 ,7), 
    (2,"LEE","MINHYUNG","Gumayusi", "Korean", 1 ,9),
    (3,"RAU","GABRIEL","Bwipo", "Belgium", 3 ,6),
    (4,"TIAN","YE","Meiko", "China", 5 ,7),
    (5,"YECHAN","LEE","Scout", "China", 5 ,4),
    (6,"HUANG","ROBERT","Blaber", "USA", 2 ,2),
    (7,"LAFLAMME","PHILIPPE","Vulcan", "USA", 2 ,7),
    (8,"PARK","GI-TAE","Morgan", "Korean", 10 ,9),
    (9,"JO","YONGIN","CoreJJ", "USA", 8 ,1),
    (10,"JENSEN","NICOLAJ","Jensen", "USA", 8 ,10);

SELECT * FROM player; 
SELECT * FROM team; 
SELECT * FROM game_caractere; 
