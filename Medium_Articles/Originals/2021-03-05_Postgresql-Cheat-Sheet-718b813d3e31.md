Postgresql Cheat Sheet {#postgresql-cheat-sheet .p-name}
======================


PostgreSQL commands


 
{.section .section .section--body .section--first name="4dd8"}
 

------------------------------------------------------------------------


  
### PostgreSQL Cheat Sheet {#9caf .graf .graf--h3 .graf--leading .graf--title name="9caf"}

· **Each table is made up of rows and columns. If you think of a table
as a grid, the column go from left to right across the grid and each
entry of data is listed down as a row.**

· **Each row in a relational is uniquely identified by a primary key.
This can be by one or more sets of column values. In most scenarios it
is a single column, such as employeeID.**

· **Every relational table has one primary key. Its purpose is to
uniquely identify each row in the database. No two rows can have the
same primary key value. The practical result of this is that you can
select every single row by just knowing its primary key.**

· **SQL Server UNIQUE constraints allow you to ensure that the data
stored in a column, or a group of columns, is unique among the rows in a
table.**

· **Although both UNIQUE and** [**PRIMARY
KEY**](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/)  **constraints enforce the uniqueness of data, you
should use the UNIQUE constraint instead of PRIMARY KEY constraint when
you want to enforce the uniqueness of a column, or a group of columns,
that are not the primary key columns.**

· **Different from PRIMARY KEY constraints, UNIQUE constraints allow
NULL. Moreover, UNIQUE constraints treat the NULL as a regular value,
therefore, it only allows one NULL per column.**

![](https://cdn-images-1.medium.com/max/800/1*kgzq5NoL5ejBGvuZ4qLDaQ.png) 

![](https://cdn-images-1.medium.com/max/800/1*hr8DccnpiR2Uj5UI3iLsOQ.png) 

![](https://cdn-images-1.medium.com/max/800/1*RiWJpwpVMdge3Sqofn3srA.png) 

![](https://cdn-images-1.medium.com/max/800/1*GN5aSwENOvntpfk90rHYFg.png) 

Create a new
[role](https://www.postgresqltutorial.com/postgresql-roles/) :

```
 {#bb13 .graf .graf--pre .graf-after--p name="bb13"}
CREATE ROLE role_name;
```


Create a new role with a `username`  and
`password` :
 
```
 {#e768 .graf .graf--pre .graf-after--p name="e768"}
CREATE ROLE username NOINHERIT LOGIN PASSWORD password;
```


Change role for the current session to the `new_role` :

```
 {#6185 .graf .graf--pre .graf-after--p name="6185"}
SET ROLE new_role;
```


Allow `role_1`  to set its role as
`role_2:` 
 
```
 {#6e8 -p name="6e80"}
GRANT role_2 TO role_1;
```


### Managing databases {#2186 .graf .graf--h3 .graf-after--pre name="2186"}

[Create a new
database](https://www.postgresqltutorial.com/postgresql-create-database/) :

```
 {#af0e .graf .graf--pre .graf-after--p name="af0e"}
CREATE DATABASE [IF NOT EXISTS] db_name;
```


[Delete a database
permanently](https://www.postgresqltutorial.com/postgresql-drop-database/) :

```
 {#948c .graf .graf--pre .graf-after--p name="948c"}
DROP DATABASE [IF EXISTS] db_name;
```


### Managing tables {#d0fc .graf .graf--h3 .graf-after--pre name="d0fc"}

[Create a new
table](https://www.postgresqltutorial.com/postgresql-create-table/)  or a [temporary
table](https://www.postgresqltutorial.com/postgresql-temporary-table/) 

```
 {#75fd .graf .graf--pre .graf-after--p name="75fd"}
CREATE [TEMP] TABLE [IF NOT EXISTS] table_name(
       pk SERIAL PRIMARY KEY,
   c1 type(size) NOT NULL,
   c2 type(size) NULL,
   ...
);
```


[Add a new
column](https://www.postgresqltutorial.com/postgresql-add-column/)  to a table:

```
 {#a356 .graf .graf--pre .graf-after--p name="a356"}
ALTER TABLE table_name ADD COLUMN new_column_name TYPE;
```


[Drop a
column](https://www.postgresqltutorial.com/postgresql-drop-column/)  in a table:

```
 {#fa80 .graf .graf--pre .graf-after--p name="fa80"}
ALTER TABLE table_name DROP COLUMN column_name;
```


[Rename a
column](https://www.postgresqltutorial.com/postgresql-rename-column/) :

```
 {#c506 .graf .graf--pre .graf-after--p name="c506"}
ALTER TABLE table_name RENAME column_name TO new_column_name;
```


Set or remove a default value for a column:

```
 {#b38b .graf .graf--pre .graf-after--p name="b38b"}
ALTER TABLE table_name ALTER COLUMN [SET DEFAULT value | DROP DEFAULT]
```


Add a [primary
key](https://www.postgresqltutorial.com/postgresql-primary-key/)  to a table.

```
 {#0d8f .graf .graf--pre .graf-after--p name="0d8f"}
ALTER TABLE table_name ADD PRIMARY KEY (column,...);
```


Remove the primary key from a table.

```
 {#372c .graf .graf--pre .graf-after--p name="372c"}
ALTER TABLE table_name
DROP CONSTRAINT primary_key_constraint_name;
```


[Rename a
table](https://www.postgresqltutorial.com/postgresql-rename-table/) .

```
 {#fbf5 .graf .graf--pre .graf-after--p name="fbf5"}
ALTER TABLE table_name RENAME TO new_table_name;
```


[Drop a
table](https://www.postgresqltutorial.com/postgresql-drop-table/)  and its dependent objects:

```
 {#274e .graf .graf--pre .graf-after--p name="274e"}
DROP TABLE [IF EXISTS] table_name CASCADE;
```


### Managing views {#ed6b .graf .graf--h3 .graf-after--pre name="ed6b"}

[Create a
view](https://www.postgresqltutorial.com/managing-postgresql-views/) :

```
 {#2f52 .graf .graf--pre .graf-after--p name="2f52"}
CREATE OR REPLACE view_name AS
query;
```


[Create a recursive
view](https://www.postgresqltutorial.com/postgresql-recursive-view/) :

```
 {#828e .graf .graf--pre .graf-after--p name="828e"}
CREATE RECURSIVE VIEW view_name(column_list) AS
SELECT column_list;
```


[Create a materialized
view](https://www.postgresqltutorial.com/postgresql-materialized-views/) :

```
 {#464e .graf .graf--pre .graf-after--p name="464e"}
CREATE MATERIALIZED VIEW view_name
AS
query
WITH [NO] DATA;
```


Refresh a materialized view:

```
 {#0876 .graf .graf--pre .graf-after--p name="0876"}
REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;
```


Drop a view:

```
 {#2619 .graf .graf--pre .graf-after--p name="2619"}
DROP VIEW [ IF EXISTS ] view_name;
```


Drop a materialized view:

```
 {#300e .graf .graf--pre .graf-after--p name="300e"}
DROP MATERIALIZED VIEW view_name;
```


Rename a view:

```
 {#4f15 .graf .graf--pre .graf-after--p name="4f15"}
ALTER VIEW view_name RENAME TO new_name;
```


### Managing indexes {#83a6 .graf .graf--h3 .graf-after--pre name="83a6"}

Creating an index with the specified name on a table

```
 {#2c66 .graf .graf--pre .graf-after--p name="2c66"}
CREATE [UNIQUE] INDEX index_name
ON table (column,...)
```


Removing a specified index from a table

```
 {#895b .graf .graf--pre .graf-after--p name="895b"}
DROP INDEX index_name;
```


### Querying data from tables {#fe6a .graf .graf--h3 .graf-after--pre name="fe6a"}
 
Query all data from a table:

```
 {#39e6 .graf .graf--pre .graf-after--p name="39e6"}
SELECT * FROM table_name;
```


Query data from specified columns of all rows in a table:

```
 {#cf17 .graf .graf--pre .graf-after--p name="cf17"}
SELECT column_list
FROM table;
```


Query data and select only unique rows:

```
 {#a094 .graf .graf--pre .graf-after--p name="a094"}
SELECT DISTINCT (column)
FROM table;
```


Query data from a table with a filter:

```
 {#77ee .graf .graf--pre .graf-after--p name="77ee"}
SELECT *
FROM table
WHERE condition;
```


Assign an
[alias](https://www.postgresqltutorial.com/postgresql-alias/)  to a column in the result set:

```
 {#fa48 .graf .graf--pre .graf-after--p name="fa48"}
SELECT column_1 AS new_column_1, ...
FROM table;
```


Query data using the `LIKE`  operator:

```
 {#78a0 .graf .graf--pre 
SELECT * FROM table_name
WHERE column LIKE '%value%'
```


Query data using the `BETWEEN               `{.markup--code
.markup--p-code .u-paddingRight0 .u-marginRight0}operator:

```
 {#4d45 .graf .graf--pre .graf-after--p name="4d45"}
SELECT * FROM table_name
WHERE column BETWEEN low AND high;
```


Query data using the `IN `{.markup--code .markup--p-code
.u-paddingRight0 .u-marginRight0}operator:

```
 {#5367 .graf .graf--pre .graf-after--p name="5367"}
SELECT * FROM table_name
WHERE column IN (value1, value2,...);
```


Constrain the returned rows with the `LIMIT`  clause:

```
 {#58d9 .graf .graf--pre .graf-after--p name="58d9"}
SELECT * FROM table_name
LIMIT limit OFFSET offset
ORDER BY column_name;
```


Query data from multiple using the [inner
join](https://www.postgresqltutorial.com/postgresql-inner-join/) , [left
join](https://www.postgresqltutorial.com/postgresql-left-join/) , [full outer
join](https://www.postgresqltutorial.com/postgresql-full-outer-join/) , [cross
join](https://www.postgresqltutorial.com/postgresql-cross-join/)  and [natural
join](https://www.postgresqltutorial.com/postgresql-natural-join/) :

```
 {#2a98 .graf .graf--pre .graf-after--p name="2a98"}
SELECT *
FROM table1
INNER JOIN table2 ON conditions
SELECT *
FROM table1
LEFT JOIN table2 ON conditions
SELECT *
FROM table1
FULL OUTER JOIN table2 ON conditions
SELECT *
FROM table1
CROSS JOIN table2;
SELECT *
FROM table1
NATURAL JOIN table2;
```


Return the number of rows of a table.

```
 {#4262 .graf .graf--pre .graf-after--p name="4262"}
SELECT COUNT (*)
FROM table_name;
```


Sort rows in ascending or descending order:

```
 {#6901 .graf .graf--pre .graf-after--p name="6901"}
SELECT select_list
FROM table
ORDER BY column ASC [DESC], column2 ASC [DESC],...;
```


Group rows using `GROUP BY`  clause.

```
 {#c594 .graf .graf--pre .graf-after--p name="c594"}
SELECT * 
FROM table
GROUP BY column_1, column_2, ...;
```


Filter groups using the `HAVING`  clause.

```
 {#6a2a .graf .graf--pre .graf-after--p name="6a2a"}
SELECT * 
FROM table
GROUP BY column_1
HAVING condition;
```


### Set operations {#7e5a .graf .graf--h3 .graf-after--pre name="7e5a"}

Combine the result set of two or more queries with `UNION`  operator:

```
 {#f700 .graf .graf--pre .graf-after--p name="f700"}
SELECT * FROM table1
UNION
SELECT * FROM table2;
```


Minus a result set using `EXCEPT` 
operator:

```
 {#cb48 .graf .graf--pre .graf-after--p name="cb48"}
SELECT * FROM table1 
EXCEPT
SELECT * FROM table2;
```


Get intersection of the result sets of two queries:

```
 {#f2da .graf .graf--pre .graf-after--p name="f2da"}
SELECT * FROM table1
INTERSECT
SELECT * FROM table2;
```


### Modifying data {#e0ef .graf .graf--h3 .graf-after--pre name="e0ef"}

[Insert a new row into a
table](https://www.postgresqltutorial.com/postgresql-insert/) :

```
 {#a553 .graf .graf--pre .graf-after--p name="a553"}
INSERT INTO table(column1,column2,...)
VALUES(value_1,value_2,...);
```


Insert multiple rows into a table:

```
 {#8589 .graf .graf--pre .graf-after--p name="8589"}
INSERT INTO table_name(column1,column2,...)
VALUES(value_1,value_2,...),
      (value_1,value_2,...),
      (value_1,value_2,...)...
```


[Update](https://www.postgresqltutorial.com/postgresql-update/)  data for all rows:

```
 {#dc14 .graf .graf--pre .graf-after--p name="dc14"}
UPDATE table_name
SET column_1 = value_1,
    ...;
```


Update data for a set of rows specified by a condition in the
`WHERE`  clause.

```
 {#11d0 .graf .graf--pre .graf-after--p name="11d0"}
UPDATE table
SET col 
    ...
WHERE condition;
```


[Delete all
rows](https://www.postgresqltutorial.com/postgresql-delete/)  of a table:

```
 {#f046 .graf .graf--pre .graf-after--p name="f046"}
DELETE FROM table_name;
```


Delete specific rows based on a condition:

```
 {#1630 .graf .graf--pre .graf-after--p name="1630"}
DELETE FROM table_name
WHERE condition;
```


### Performance {#c963 .graf .graf--h3 .graf-after--pre name="c963"}

Show the query plan for a query:

```
 {#6f6a .graf .graf--pre .graf-after--p name="6f6a"}
EXPLAIN query;
```


Show and execute the query plan for a query:

```
 {#15c8 .graf .graf--pre .graf-after--p name="15c8"}
EXPLAIN ANALYZE query;
```


Collect statistics:

```
 {#bfe0 .graf .graf--pre .graf-after--p .graf--trailing name="bfe0"}
ANALYZE table_name;
```





 

------------------------------------------------------------------------


  
### Postgres & JSON: {#da6f .graf .graf--h3 .graf--leading name="da6f"}
 ### Creating the DB and the Table {#1d65 .graf .graf--h3 .graf-after--h3 name="1d65"}
 
```
 {#c75d .graf .graf--pre .graf-after--h3 name="c75d"}
DROP DATABASE IF EXISTS boo s_db;
CREATE DATABASE books_db WITH ENCODING='UTF8' TEMPLATE template0;
```


```
 {#4851 .graf .graf--pre .graf-after--pre name="4851"}
DROP TABLE IF EXISTS books;
```


```
 {#8bc3 .graf .graf--pre .graf-after--pre name="8bc3"}
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  client VARCHAR NOT NULL,
  data JSONb NOT NULL
);
```


### Populating the DB {#4d07 .graf .graf--h3 .graf-after--pre name="4d07"}

```
 {#e5f6 .graf .graf--pre .graf-after--h3 name="e5f6"}
INSERT INTO books( lient, data) values( 'Joe', '{ "title": "Siddhartha", "author": { "first_name": "Herman", "last_name": "Hesse" } }' ); INSERT INTO books(client, data) values('Jenny', '{ "title": "Bryan Guner", "author": { "first_name": "Jack", "last_name": "Kerouac" } }'); INSERT INTO books(client, data) values('Jenny', '{ "title": "100 años de soledad", "author": { "first_name": "Gabo", "last_name": "Marquéz" } }');
```


Lets see everything inside the table books:

```
 {#dfe6 .graf .graf--pre .graf-after--p name="dfe6"}
SELECT * FROM books;
```


Output:

![](https://cdn-images-1.medium.com/max/800/0*GOQQ0qNGak2yIrtQ) 

### `->` operator returns values out of JSON columns {#afcf .graf .graf--h3 .graf-after--figure name="afcf"}

Selecting 1 column:
 
```
 {#288b .graf .graf--pre .graf-after--p name="288b"}
SELECT client, 
    data->'title' AS title
    FROM books;
```


Output:

![](https://cdn-images-1.medium.com/max/800/0*OIVYOfYcbVh65Mt5) 

Selecting 2 columns:

```
 {#1cb7 .graf .graf--pre .graf-after--p name="1cb7"}
SELECT client, 
   data->'title' AS title, data->'author' AS author
   FROM books;
```


Output:

![](https://cdn-images-1.medium.com/max/800/0*fEzPkSY8yGexKOk4) 

### `->` vs `->>` {#d26b .graf .graf--h3 .graf-after--figure name="d26b"}

The `->`  operator returns the original
JSON type (which might be an object), where s `->>`  returns text.

### Return NESTED objects {#505f .graf .graf--h3 .graf-after--p name="505f"}

You can use the `->`  to return a nested
object a 
 
```
 {#953e .graf .graf--pre .graf-after--p name="953e"}
SELECT client, 
   data->'author'->'last_name' AS author
   FROM books;
```
 

Output:

![](https://cdn-images-1.medium.com/max/800/0*lwy8bR7igaroMXeb) 

### Filtering {#490a .graf .graf--h3 .graf-after--figure name="490a"}

Select rows based on a value inside your JSON:

```
 {#a15b .graf .graf--pre .graf-after--p name="a15b"}
SELECT 
 client,
 data->'title' AS title
 FROM books
  WHERE data->'title' = '"Bryan Guner"';
```


Notice WHERE uses `->`  so we must compare
to JSON `'"Bryan Guner"'` 

Or we could use `->>`  and compare to
`'Bryan Guner'` 

Output:
 
![](https://cdn-images-1. 1qlXqE) 

### Nested filtering  ter--figure name="25c6"}
 
Find rows based on the value of a nested JSON object:

```
 {#e5e4 .graf .graf--pre .graf-after--p name="e5e4"}
SELECT 
 client,
 data->'title' AS title
 FROM books
  WHERE data->'author'->>'last_name' = 'Kerouac';
```


Output:

![](https://cdn-images-1.medium.com/max/800/0*R1kOhDK19ntdUYkq) 

### A real world example {#2b05 .graf .graf--h3 .graf-after--figure name="2b05"}

```
 {#013d .graf .graf--pre .graf-after--h3 name="013d"}
CREATE TABLE events (
  name varchar(2 0),
  visitor_id varchar(200),
  properties json,
  browser json
);
```


We're going to store events in this table, like pageviews. Each event
has properties, which could be anything (e.g. current page) and also
sends information about the browser (like OS, screen resolution, etc).
Both of these are completely free form and could change over time (as we
think of extra stuff to track).

```
 {#88c8 .graf .graf--pre .graf-after--p name="88c8"}
INSERT INTO events VALUES (
  'pageview', '1',
  '{ "page": "/" }',
  '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
);
INSERT INTO events VALUES (
  'pageview', '2',
  '{ "page": "/" }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1920, "y": 1200 } }'
);
INSERT INTO events VALUES (
  'pageview', '1',
  '{ "page": "/account" }',
  '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
);
INSERT INTO events VALUES (
  'purchase', '5',
  '{ "amount": 10 }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1024, "y": 768 } }'
);
INSERT INTO events VALUES (
  'purchase', '15',
  '{ "amount": 200 }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
);
INSERT INTO events VALUES (
  'purchase', '15',
  '{ "amount": 500 }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
);
```


Now lets select everything:

```
 {#c4b3 .graf .graf--pre .graf-after--p name="c4b3"}
SELECT * FROM events;
```


Output:

![](https://cdn-images-1.medium.com/max/800/0*ZPHfB4FxjSIlAVxL) 

### JSON operators + PostgreSQL aggregate functions {#e9ca .graf .graf--h3 .graf-after--figure name="e9ca"}

Using the JSON operators, combined with traditional PostgreSQL aggregate
functions, we can pull out whatever we want. You have the full might of
an RDBMS at your disposal.

-   [Lets see browser usage:]{#4ffd}
-   [`SELECT browser->>'name' AS browser, count(browser)                   FROM events GROUP BY browser->>'name';`{.markup--code
    .markup--li-code}]{#261c}

Output:

![](https://cdn-images-1.medium.com/max/800/0*4lEv2DgUk33FeUgo) 

-   [Total revenue per visitor:]{#946c}

`SELECT visitor_id, SUM(CAST(properties->>'amount' AS                 integer)) AS total FROM events WHERE CAST(properties->>'amount' AS integer) > 0 GROUP                 BY visitor_id;` 

Output:

![](https://cdn-images-1.medium.com/max/800/0*HxOS3CgwXBJ6A2FP) 

-   [Average screen resolution]{#9850}
-   [`SELECT                   AVG(CAST(browser->'resolution'->>'x' AS integer)) AS width,                   AVG(CAST(browser->'resolution'->>'y' AS integer)) AS height FROM                   events;`{.markup--code
    .markup--li-code}]{#132f}

Output:

![](https://cdn-images-1.medium.com/max/800/0*iyv4Iv4Rc8M8mwt1) 

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#4640 .graf .graf--h4 .graf-after--figure name="4640"}

[bgoonz's gists ·
GitHub](https://gist.github.com/bgoonz) 
 
[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 


Or Checkout my personal Resource Site:

 
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 


 


By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 5, 2021](https://medium.com/p/718b813d3e31).


