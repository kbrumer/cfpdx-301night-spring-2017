# Announcements - Sun May 14th

## Code 301: JOINS - Lecture (Topic 9)

### Get your reviews in

### Assignments for this Week

* May 15th: Portfolio 7 Due
* May 19th: Portfolio 8 Due

* May 17th: Lab 10 Functional (May 18th will be co-working day)
* May 22nd (Monday: Lecture 12: REST
* May 23rd (Tuesday): Lab 12: REST
* I will be out May 25th, the Thursday of that week

We are at the Midway point for this class !!

# Review


## Learning Objectives

- Understand how objects in a database can be interrelated with foreign keys
- Have familiarity with queries using SQL that select data from across multiple tables
- Have familiarity with different relationships in database tables

---

## Resources

- [SQLBolt](http://sqlbolt.com/) -- Interactive SQL Tutorial
- [SQL Cheat Sheet](http://www.cheat-sheets.org/sites/sql.su/)
- [Query String Primer](https://en.wikipedia.org/wiki/Query_string)


---

# Lecture

* [slides](./slides/Code301-Class14.pdf)
* [joins](./demos/joins.md)


# Demos

```
DROP TABLE articles;

CREATE TABLE articles(
	id SERIAL INTEGER PRIMARY KEY,
	title VARCHAR(50),
	author VARCHAR(50),
	markdown TEXT,
	publishedOn DATE );


INSERT INTO articles (title, author, markdown, publishedOn)
VALUES ('Bacon Ipsum', 'Kevin Bacon', '# hickory smoked', '2012-12-25');

INSERT INTO articles (title, author, markdown, publishedOn)
VALUES ('Return of Bacon Ipsum', 'Kevin Bacon', '# hickory smoked', '2014-12-25');

INSERT INTO articles (title, author, markdown, publishedOn)
VALUES ('Revenge of Bacon Ipsum', 'Kevin Bacron', '# hickory smoked', '2015-12-25');

  SELECT title, author, publishedOn
    FROM articles
   WHERE publishedOn
 BETWEEN '2015-01-01' AND '2015-12-31'
   ORDER BY publishedOn DESC;

UPDATE articles SET author = 'Kevin Bacon' WHERE author = 'Keven Bacron';

DELETE FROM articles WHERE author = 'Keven Bacron';

```

```
/*
from https://github.com/b4oshany/school
*/

DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL,
  teacher_id INT NOT NULL
);

INSERT INTO courses VALUES
(10001, 'Computer Science 142', 1234),
(10002, 'Computer Science 143', 5678),
(10003, 'Computer Science 190M', 9012),
(10004, 'Informatics 100', 1234);

DROP TABLE IF EXISTS grades;
CREATE TABLE grades (
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  grade varchar(2) DEFAULT NULL
);

INSERT INTO grades VALUES
(123, 10001, 'B-'),
(123, 10002, 'C'),
(456, 10001, 'B+'),
(888, 10002, 'A+'),
(888, 10003, 'A+'),
(404, 10004, 'D+'),
(404, 10002, 'B'),
(456, 10002, 'D-');

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL,
  email VARCHAR(32) DEFAULT NULL,
  password VARCHAR(16) DEFAULT NULL
);

INSERT INTO students VALUES
(123, 'Bart', 'bart@fox.com', 'bartman'),
(404, 'Ralph', 'ralph@fox.com', 'catfood'),
(456, 'Milhouse', 'milhouse@fox.com', 'fallout'),
(888, 'Lisa', 'lisa@fox.com', 'vegan');

DROP TABLE IF EXISTS teachers;
CREATE TABLE teachers (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL
);

INSERT INTO teachers VALUES
(1234, 'Krabappel'),
(5678, 'Hoover'),
(9012, 'Stepp');
```

Getting our values:

```sql
-- SELECT students and grades, no explicit join
SELECT *
 FROM students, grades
WHERE students.id = grades.student_id

-- SELECT students and grades, join
SELECT *
  FROM students
  JOIN grades ON grades.student_id = students.id

-- SELECT students and grades, inner join
SELECT *
  FROM students
 INNER JOIN grades ON grades.student_id = students.id

-- SELECT students and grades, inner join using alias
SELECT *
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id

-- SELECT specifc columns from students and grades, inner join using alias
SELECT s.id
     , s.name
     , s.email
     , g.course_id
     , g.grade
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id

-- select from students, grades and courses
SELECT s.id
     , s.name
     , s.email
     , g.course_id
     , g.grade
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id
 INNER JOIN courses AS c ON c.id = g.course_id

-- select from students, grades and courses, labelling all columns explicitly
SELECT s.id AS student_id
     , s.name AS student_name
     , s.email AS student_email
     , g.course_id AS course_id
     , g.grade AS course_grade
     , c.name AS course_name
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id
 INNER JOIN courses AS c ON c.id = g.course_id


-- select from students, grades, courses and teachers, labelling all columns explicitly
SELECT s.id AS student_id
     , s.name AS student_name
     , s.email AS student_email
     , g.course_id AS course_id
     , g.grade AS course_grade
     , c.name AS course_name
     , t.name AS teacher_name
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id
 INNER JOIN courses AS c ON c.id = g.course_id
 INNER JOIN teachers AS t on t.id = c.teacher_id


INSERT INTO students VALUES (999, 'Nelson', 'nelson@fox.com', 'newton');

SELECT s.id AS student_id
     , s.name AS student_name
     , s.email AS student_email
     , g.course_id AS course_id
     , g.grade AS course_grade
     , c.name AS course_name
     , t.name AS teacher_name
  FROM students AS s
  LEFT OUTER JOIN grades AS g ON g.student_id = s.id
  LEFT OUTER JOIN courses AS c ON c.id = g.course_id
  LEFT OUTER JOIN teachers AS t on t.id = c.teacher_id

```




# Pair Programming

### Some prerequisite knowledge

* Github link for tonight's lab:
  * [https://github.com/cfpdx-301night-spring-2017/09-sql-joins-relations](https://github.com/cfpdx-301night-spring-2017/09-sql-joins-relations)

---


## Getting started (DO THIS AFTER CLONING YOUR FORK)
1. `cd starter-code` to change dirs to the starter code directory
2. **You will need to drop the table that we created yesterday in Postgres!**
  * To do so, start Postgres in the terminal using the `psql` command
  * Once you're in the Postgres shell, enter `DROP TABLE articles;` to remove the table from your local DB
  * Enter `\dt` in your Postgres shell, and it should return "No relations found"; if it shows that the "articles" table still exists, or does nothing, then you probably forgot the semicolon in the previous step. If so, enter one now, ignore the complaints, and redo the `DROP TABLE articles;`
  * Leave the shell open so you can check on your new tables in the upcoming setup steps!
3. In your Postgres shell:
  * Run `select count(*) from articles;`
    * The output should read that you now have 250 records in the articles table.
  * Then run `select * from authors;`
    * The output should read each of the five author records to your with their respective data

You're ready to go!

## User Stories: MVP
 - As a developer, I want article data to persist with SQL, so that I can store more, faster and have more query flexibility.

This means you'll want to be able to do full CRUD on articles in the database. You'll have to use SQL to make a table for articles (**and clear out the table for troubleshooting**), with a class-level method attached to the constructor function (because it does not apply to any single instance). Then teach each article instance how to write or update itself to the database, or delete itself, via instance methods (available for use as needed in the code).

Crucially, you'll need to trace through the app logic, and all those callback functions to determine WHEN is the right time to load data, or convert JSON.

Look through the TODOs, which signify areas of the code with varying levels of completeness, and focus initially on writing correct SQL. Practice in the web inspector.


---

# Portfolio Assignment

This is no portfolio assignment for this class.


# Questions?












