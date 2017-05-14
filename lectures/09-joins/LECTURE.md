# Announcements - Tue May 9th

## Code 301: SQL- Lecture (8th Topic)

### Get your reviews in

### Assignments for this Week

* May 15th: Portfolio 7 Due
* May 19th: Portfolio 8 Due

* May 17th: Lab 10 Functional (May 18th will be co-working day)
* May 22nd (Monday: Lecture 12: REST
* May 23rd (Tuesday): Lab 12: REST
* I will be out May 25th, the thursday of that week

# Review


## Learning Objectives

- Understand the basic concepts of a database
- Effectively use basic SQL commands to create, read, update, and delete rows from a table

---

## Resources

[SQL Syntax Cheatsheet](cheatsheets/sql.md)
[PostgreSQL Shell Cheatsheet](cheatsheets/postgress-shell.md)



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



# Pair Programming

### Some prerequisite knowledge

* Github link for tonight's lab:
	* [https://github.com/cfpdx-301night-spring-2017/08-sql-intro](https://github.com/cfpdx-301night-spring-2017/08-sql-intro)

---

## Feature Tasks
<!-- a list or description of the feature tasks you want the students to implement -->
1. Study each of the new routes in your `server.js` file by examining the SQL statements and any associated data being handed through the request.
  * You may test each of these routes, by utilizing the corresponding Article prototype methods in the `article.js` file.
  * For example, the `app.post()` route in `server.js` corresponds to the `Article.prototype.insertRecord()` method in `article.js`. You can create a new Article object and call that method on it from the browser console. You can then check your Postgres DB to confirm that it exists in the DB. It will also render to the page upon refreshing the browser.

```javascript
    // In the browser console
    let myArticle = new Article({title:'Flibbity goes Jibbiting', author:'Flibbity Jibbit', authorUrl:'flibbity.jibbit.com', category:'jibbits', publishedOn:'01-01-2217', body:'Flibbity Jibbit and the Key Keeper'});

    myArticle.insertRecord();

    Refresh the page and you will see the new article at the top of the blog, plus the relevant information populated into the author and category filters.
```

2. For each of the NOTE items in `server.js`, provide a brief description of what that function immediately below is doing. Be sure to indicate, where applicable, details such as:
  - What number(s) of the full-stack-diagram.png image is this part of the code interacting with?
  - Which method of `article.js` is interacting with this particular piece of `server.js`?
  - What part of ***CRUD*** is being enacted/managed by this particular piece of code?
  - As applicable, an additional sentence or two of explanation about what the code is doing, what NPM packages are involved, etc. The goal is to demonstrate that you understand what is going on in the code without glossing over details, but also without writing a novel about it.

---



# Questions?












