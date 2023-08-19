create database admission;

drop table students;
CREATE TABLE students (
ID int primary key auto_increment,
first_name varchar(50),
last_name varchar(50),
email varchar(50),
gender varchar(10)
);

INSERT INTO students(
first_name,
last_name,
email,
gender
)
values("Shurlocke", "Caesman", "scaesman0@lulu.com", "Male"),
("Sloane", "Morrill", "smorrill1@simplemachines.org", "Male"),
("Bunnie", "Steanyng", "bsteanyng2@fotki.com", "Female"),
("Vern", "McGillivray", "vmcgillivray3@bloomberg.com", "Male"),
("Ilario", "Lis", "ilis4@scientificamerican.com", "Male"),
("Orton", "Hacksby", "ohacksby5@admin.ch", "Male"),
("Jedidiah", "Pescud", "jpescud6@usda.gov", "Male"),
("Michel", "Labbey", "mlabbey7@phoca.cz", "Female"),
("Ambrosius", "Iacomo", "aiacomo8@t-online.de", "Male"),
("Norry", "Ganning", "nganning9@senate.gov", "Male"
);

select \* from students;

update students set first_name = "Shubham3" where ID = 1;
delete from students where ID = 5;
