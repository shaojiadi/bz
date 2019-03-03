SET NAMES UTF8;
DROP DATABASE IF EXISTS bz;
CREATE DATABASE bz CHARSET=UTF8;
USE bz;

/*创建用户表*/
CREATE TABLE bz_user(
  user_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  uname VARCHAR(36),
  upwd VARCHAR(32),
  phone VARCHAR(16) 
);

/*轮播图储存*/
CREATE TABLE bz_carousel_item(
  id INT PRIMARY KEY AUTO_INCREMENT, 
	imgpath VARCHAR(128)                 #图片路径
);

/*车型详情*/
CREATE TABLE bz_detail(
  bz_detail_imgpath VARCHAR(128),
  bz_detail_txt     VARCHAR(64),
  price VARCHAR(50)
);
-- price  VARCHAR(64)
/*用户表*/
INSERT INTO bz_user VALUES
(NULL,'lei','123456879','15234896520'),
(NULL,'feng','123780210','13364102589'),
(NULL,'wanger','10223598','15349932107'),
(NULL,'rouse','525695045','13698220156'),
(NULL,'dangdang','165723a54','13524153359');

/*轮播图图片*/
INSERT INTO bz_carousel_item VALUES
(NULL,'http://127.0.0.1:3000/AMG/ada-new.jpg'),
(NULL,'http://127.0.0.1:3000/AMG/AMG车主俱乐部PC.jpg'),
(NULL,'http://127.0.0.1:3000/AMG/AMG-GT4.jpg'),
(NULL,'http://127.0.0.1:3000/AMG/AMG_C63-pc.jpg'),
(NULL,'http://127.0.0.1:3000/AMG/glc63coupe.jpg'),
(NULL,'http://127.0.0.1:3000/AMG/GT-family.jpg'),
(NULL,'http://127.0.0.1:3000/cur4.jpg'),
(NULL,'http://127.0.0.1:3000/cur2.jpg'),
(NULL,'http://127.0.0.1:3000/cur3.jpg'),
(NULL,'http://127.0.0.1:3000/1(1).jpg'),
(NULL,'http://127.0.0.1:3000/cur5.jpg'),
(NULL,'http://127.0.0.1:3000/cur6.jpg');


/*车型详情数据*/
INSERT INTO bz_detail  VALUES
('http://127.0.0.1:3000/details/S级轿车.png','S级轿车','厂商建议零售价¥86.38万起*'),
('http://127.0.0.1:3000/details/s迈巴赫.png','梅赛德斯-迈巴赫S级轿车','厂商建议零售价¥140.88万起*'),
('http://127.0.0.1:3000/details/AMG-s.png','梅赛德斯-AMG S 63 L 4MATIC+','厂商建议零售价¥232.88万起*'),
('http://127.0.0.1:3000/details/长距轴E.png','长轴距E级轿车','厂商建议零售价¥43.58万起*'),
('http://127.0.0.1:3000/details/C460(3).png','长轴距E级运动轿车','厂商建议零售价¥43.58万起*'),
('http://127.0.0.1:3000/details/C460(4).png','标准轴距E级车运动版','厂商建议零售价¥45.38万起*'),
('http://127.0.0.1:3000/details/C460(5).png','梅赛德斯-AMG E 43 4MATIC 特别版','厂商建议零售价¥91.88万起*'),
('http://127.0.0.1:3000/details/C460(6).png','梅赛德斯-AMG E 63 S 4MATIC+特别版','厂商建议零售价¥166.88万起*'),
('http://127.0.0.1:3000/details/C460(7).png','新一代长轴距C级运动轿车','厂商建议零售价¥31.58万起*'),
('http://127.0.0.1:3000/details/C460(8).png','新一代标准轴距C级车运动版','厂商建议零售价¥31.88万起*'),
('http://127.0.0.1:3000/details/C460(9).png','新一代长轴距C级轿车','厂商建议零售价¥32.38万起*'),
('http://127.0.0.1:3000/details/3(1).png','新一代C级旅行轿车','厂商建议零售价¥36.38万起*'),
('http://127.0.0.1:3000/details/3(2).png','新一代梅赛德斯-AMG C 43 4MATIC','厂商建议零售价¥61.88万起*'),
('http://127.0.0.1:3000/details/3(3).png','新一代梅赛德斯-AMG C 63','厂商建议零售价¥94.18万起*'),
('http://127.0.0.1:3000/details/3(4).png','全新长轴距A级轿车','厂商建议零售价¥21.69万起*'),
('http://127.0.0.1:3000/details/C460(12).png','CLA运动轿车','厂商建议零售价¥23.78万起*'),
('http://127.0.0.1:3000/details/C460(11).png','梅赛德斯-AMG A 45 4MATIC','厂商建议零售价¥46.38万起*'),
('http://127.0.0.1:3000/details/C460(13).png','梅赛德斯-AMG CLA 45 4MATIC','厂商建议零售价¥55.88万起*'),
('http://127.0.0.1:3000/details/C460(14).png','B级运动旅行车','厂商建议零售价¥22.58万起*'),
('http://127.0.0.1:3000/details/C460(15).png','R级大型旅行车臻藏版','厂商建议零售价¥54.88万起*'),
('http://127.0.0.1:3000/details/3(5).png','全新G级越野车','厂商建议零售价¥155.88万起*'),
('http://127.0.0.1:3000/details/3(6).png','全新梅赛德斯-AMG G 63','厂商建议零售价¥219.88万起*'),
('http://127.0.0.1:3000/details/3(7).png','GLS SUV','厂商建议零售价¥95.68万起*'),
('http://127.0.0.1:3000/details/C460(16).png','梅赛德斯-AMG GLS 63 4MATIC','厂商建议零售价¥184.68万起*'),
('http://127.0.0.1:3000/details/C460(17).png','GLE SUVC','厂商建议零售价¥71.18万起*'),
('http://127.0.0.1:3000/details/C460(19).png','梅赛德斯-AMG GLE 43 4MATIC','厂商建议零售价¥96.58万起*'),
('http://127.0.0.1:3000/details/C460(20).png','梅赛德斯-AMG GLE 63 4MATIC','厂商建议零售价¥172.88万起*'),
('http://127.0.0.1:3000/details/C460(21).png','梅赛德斯-AMG GLE 43 4MATIC 轿跑 SUV','厂商建议零售价¥98.98万起*'),
('http://127.0.0.1:3000/details/C460(22).png','梅赛德斯-AMG GLE 63 4MATIC 轿跑 SUV','厂商建议零售价¥179.98万起*'),
('http://127.0.0.1:3000/details/C460(23).png','新梅赛德斯-奔驰长轴距GLC SUV','厂商建议零售价¥39.98万起*'),
('http://127.0.0.1:3000/details/C460(24).png','GLC轿跑SUV','厂商建议零售价¥46.38万起*'),
('http://127.0.0.1:3000/details/C460(25).png','GLA SUV','厂商建议零售价¥26.98万起*'),
('http://127.0.0.1:3000/details/C460(26).png','CLS四门轿跑车','厂商建议零售价¥64.88万起*'),
('http://127.0.0.1:3000/details/C460(27).png','E级轿跑车','厂商建议零售价¥52.88万起*'),
('http://127.0.0.1:3000/details/C460(28).png','E级敞篷轿跑车','厂商建议零售价¥64.28万起*'),
('http://127.0.0.1:3000/details/C460(29).png','新一代C级轿跑车','厂商建议零售价¥36.98万起*'),
('http://127.0.0.1:3000/details/C460(30).png','新一代梅赛德斯-AMG C 43 4MATIC 轿跑车','厂商建议零售价¥64.88万起*'),
('http://127.0.0.1:3000/details/C460(31).png','新一代梅赛德斯-AMG C 63 4MATIC 轿跑车','厂商建议零售价¥97.18万起*'),
('http://127.0.0.1:3000/details/C460(32).png','SLC敞篷跑车','厂商建议零售价¥51.88万起*'),
('http://127.0.0.1:3000/details/C460(33).png','梅赛德斯-AMG GT','厂商建议零售价¥132.18万起*'),
('http://127.0.0.1:3000/details/C460(34).png','梅赛德斯-AMG GT R','厂商建议零售价¥215.58万起*'),
('http://127.0.0.1:3000/details/C460(35).png','S级轿跑车','厂商建议零售价¥124.38万起*'),
('http://127.0.0.1:3000/details/C460(36).png','梅赛德斯-AMG S 63 4MATIC+ 轿跑车','厂商建议零售价¥234.78万起*'),
('http://127.0.0.1:3000/details/C460(37).png','SL敞篷跑车','厂商建议零售价¥101.68万起*'),
('http://127.0.0.1:3000/details/C460(38).png','V级豪华多功能车','厂商建议零售价¥48.50万起*'),
('http://127.0.0.1:3000/details/C460(39).png','威霆高端商务车','厂商建议零售价¥29.60万起*');