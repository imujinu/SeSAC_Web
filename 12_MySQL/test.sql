show databases;

CREATE DATABASE sesac2 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY ,
    name VARCHAR(5) NOT NULL,
    age INT NULL,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50) NULL,
    promotion VARCHAR(2) NULL DEFAULT 'x'
);

desc member

DROP TABLE member;

ALTER TABLE member MODIFY id VARCHAR(10);

ALTER TABLE member DROP age;

ALTER TABLE member ADD interest VARCHAR(100) NULL;

CREATE TABLE user2(
    id VARCHAR(10) not null PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

desc user2;

INSERT INTO user2(id,pw,name,gender,birthday,age)
VALUES
('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
('sexysung','87awjkdf','성춘향','F','1992-03-31',31),
('power70','qxur8sda','변사또','M','1970-05-05',53),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18',39),
('widowmaker','38ewifh3','위도우','F','1976-06-27',47),
('dvadva','k3f3ah','송하나','F', '2001-06-03',22),
('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);

DROP TABLE user2;

SELECT * FROM user2;

SELECT * FROM user2 ORDER BY birthday ASC;
SELECT * FROM user2 WHERE gender='M' ORDER BY name DESC;
SELECT id,name FROm user2 WHERE birthday LIKE('199%');
SELECT * FROM user2 WHERE birthday LIKE('%06%') ORDER BY birthday ASC;
SELECT * FROM user2 WHERE gender='M' && birthday LIKE('197%');
SELECT * FROM user2 ORDER BY age DESC LIMIT 3;
SELECT * FROM user2 WHERE age BETWEEN 25 AND 50;

UPDATE user2 SET pw ="12345678" WHERE id="hong1234";

DELETE FROM user2 Where id="jungkrat";