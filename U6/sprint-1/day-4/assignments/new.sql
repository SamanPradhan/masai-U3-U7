create table Students (student_id int primary key,student_name VARCHAR(100),
  grade INT
);


create table Courses ( course_id int primary KEY, course_name varchar(100) );

insert into Students (student_id, student_name, grade) VALUES (1, 'John', 85), (2, 'Jane', 95), (3, 'Mike', 78), (4, 'Alice', 92), (5, 'Bob', 89), (6, 'Eve', 97); INSERT INTO Courses (course_id, course_name) VALUES (101, 'Mathematics'), (102, 'Science'), (103, 'History'), (104, 'English'); 


create table StudentCourse ( student_id INT, course_id INT, PRIMARY KEY (student_id, course_id) ); 

 insert into StudentCourse (student_id, course_id) values (1, 101), (1, 102), (1, 103), (2, 101), (2, 102), (2, 104), (3, 101), (3, 104), (4, 101), (4, 102), (4, 103), (4, 104), (5, 101), (5, 102), (6, 101), (6, 102), (6, 103), (6, 104);

 select distinct student_name from Students where grade > 90;

 select s.student_name from Students s INNER JOIN StudentCourse sc ON s.student_id = sc.student_id GROUP BY s.student_id, s.student_name HAVING COUNT(sc.course_id) > 3;