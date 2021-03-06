PostgreSQL Setup For Windows & WSL/Ubuntu {#postgresql-setup-for-windows-wslubuntu .p-name}
=========================================


If you follow this guide to a tee... you will install PostgreSQL itself
on your Windows installation. Then, you will install psql in your...


 
{.section .section .section--body .section--first .section--last name="6719"}
 

------------------------------------------------------------------------


  
### PostgreSQL Setup For Windows & WSL/Ubuntu {#b38c .graf .graf--h3 .graf--leading .graf--title name="b38c"}

![](https://cdn-images-1.medium.com/max/600/0*mhTM08D1J612VW7J) 

If you follow this guide to a tee... you will install PostgreSQL itself
on your Windows installation. Then, you will install
`psql`{.markup--code .markup--p-code} in your Ubuntu installation. Then
you will also install Postbird, a cross-platform graphical user
interface that makes working with SQL and PostgreSQL
'allegedly' ...(personally I prefer to just use the command line but PG
Admin makes for an immeasurably more complicated tutorial than
postbird)... better than just using the **command line tool**
`psql`{.markup--code .markup--p-code}**.**

### Important Distinction: PSQL is the frontend interface for PostgreSQL ... they are not synonymous! {#d62d .graf .graf--h3 .graf-after--p name="d62d"}

**Postgres**, is a [free and
open-source](https://en.wikipedia.org/wiki/Free_and_open-source_software "Free and open-source software")  [relational database management
system](https://en.wikipedia.org/wiki/Relational_database_management_system "Relational database management system")  (RDBMS)

**PSQL:**

The primary
[front-end](https://en.wikipedia.org/wiki/Front_and_back_ends "Front and back ends")  for PostgreSQL is the `psql`  [command-line
program](https://en.wikipedia.org/wiki/Command-line_program "Command-line program") , which can be used to enter SQL queries directly, or
execute them from a file.

In addition, psql provides a number of meta-commands and various
shell-like features to facilitate writing scripts and automating a wide
variety of tasks; for example tab completion of object names and SQL
syntax.

**pgAdmin:**

The pgAdmin package is a free and open-source [graphical user
interface](https://en.wikipedia.org/wiki/Graphical_user_interface "Graphical user interface")  (GUI) administration tool for PostgreSQL.

When you read "installation", that means the actual OS that's running on
your machine. So, you have a Windows installation, Windows 10, that's
running when you boot your computer. Then, when you start the Ubuntu
installation, it's as if there's a completely separate computer running
inside your computer. It's like having two completely different laptops.

### Other Noteworthy Distinctions: {#8a2f .graf .graf--h3 .graf-after--p name="8a2f"}

![](https://cdn-images-1.medium.com/max/800/1*um8fm6FDTYYOXZrLudddpg.png) 

### Installing PostgreSQL 12 {#e44b .graf .graf--h3 .graf-after--figure name="e44b"}

To install PostgreSQL 12, you need to download the installer from the
Internet. PostgreSQL's commercial company, Enterprise DB, offers
installers for PostgreSQL for every major platform.

Open
<https://www.enterprisedb.com/downloads/postgres-postgresql-downloads>.
Click the link for PostgreSQL 12 for Windows x86--64.

![](https://cdn-images-1.medium.com/max/800/0*wi4EbaVo-mamG_tH.png) 

Once that installer downloads, run it. You need to go through the normal
steps of installing software.

-   [Yes, Windows, let the installer make changes to *my*
    device.]{#a223}
-   [Thanks for the welcome. Next.]{#d4d0}
-   [Yeah, that's a good place to install it. Next.]{#1283}
-   [I don't want that pgAdmin nor the Stack Builder things. Uncheck.
    Uncheck. Next.]{#79cc}

![](https://cdn-images-1.medium.com/max/800/0*PSDmTsaD37MgFJ-A.png) 

-   [Also, great looking directory. Thanks. Next.]{#e09d}

### Oooh! A password! I'll enter **\*\*\*\***. I sure won't forget that because, if I do, I'll have to uninstall and reinstall PostgreSQL and lose all of my hard work. **Seriously, write down this password or use one you will not forget!!!!!!!!!!!!!!!** {#ffcd .graf .graf--h3 .graf-after--li name="ffcd"}

### I REALLY CANNOT STRESS THE ABOVE POINT ENOUGH... Experience is a great teacher but in this case ... it's not worth it. {#17ae .graf .graf--h3 .graf-after--h3 name="17ae"}
  
-   [Sure. 5432. Good to go. Next.]{#25b7}
-   [Not even sure what that means. Default! Next.]{#28be}
-   [Yep. Looks good. Next.]{#b378}

Insert pop culture reference to pass the time

### Installing PostgreSQL Client Tools on Ubuntu {#9523 .graf .graf--h3 .graf-after--p name="9523"}
 
Now, to install the PostgreSQL Client tools for Ubuntu. You need to do
this so that the Node.js (and later Python) programs running on your
Ubuntu installation can access the PostgreSQL server running on your
Windows installation. You need to tell `apt` , the package manager, that you want it to go find the
PostgreSQL 12 client tools from PostgreSQL itself rather than the common
package repositories. You do that by issuing the following two commands.
Copy and paste them one at a time into your shell. (If your Ubuntu shell
isn\'t running, start one.)

**Pro-tip**: Copy those commands because you're not going to type them,
right? After you copy one of them, you can just right-click on the
Ubuntu shell. That should paste them in there for you.

```
 {#300c .graf .graf--pre .graf-after--p name="300c"}
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```


If prompted for your password, type it.

```
 {#32ea .graf .graf--pre .graf-after--p name="32ea"}
echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | sudo tee  /etc/apt/sources.list.d/pgdg.list
```


The last line of output of those two commands running should read "OK".
If it does not, try copying and pasting them one at a time.

Now that you've registered the PostgreSQL repositories as a source to
look for PostgreSQL, you need to update the `apt`  registry. You should do this before you install *any*
software on Ubuntu.

```
 {#8b20 .graf .graf--pre .graf-after--p name="8b20"}
sudo apt update
```


Once that's finished running, the new entries for PostgreSQL 12 should
be in the repository. Now, you can install them with the following
command.

```
 {#7a9e .graf .graf--pre .graf-after--p name="7a9e"}
sudo apt install postgresql-client-12 postgresql-common
```


If it asks you if you want to install them, please tell it "Y".

Test that it installed by typing `psql --version` . You should see it print out information about the
version of the installed tools. If it tells you that it can\'t find the
command, try these instructions over.

### Configuring the client tools {#aace .graf .graf--h3 .graf-after--p name="aace"}

Since you're going to be accessing the PosgreSQL installation from your
Ubuntu installation on your Windows installation, you're going to have
to type that you want to a cess it over and over, which means extra
typing. To prevent you from having to do this, you can customize your
shell to always add the extra commands for you.

This assumes you're still using Bash. If you changed the shell that your
Ubuntu installation uses, please follow that shell's directions for
adding an alias to its startup file.

Make sure you're in your Ubuntu home directory. You can do that by
typing `cd`{.markup--code .markup--p-code} and hitting enter. Use
`ls`{.markup--code .markup--p-code} to find out if you have
a `.bashrc`{.markup--code .markup--p-code} file. Type
`ls .bashrc`{.markup--code .markup--p-code}. If it shows you that one
exists, that\'s the one you will add the alias to. If it tells you that
there is no file named that, then type `ls .profile` . If it shows you that one exists, that\'s the one you
w ll add the alias to. If it shows you that it does not exist, then use
the file name `.bashrc`{.markup--code .markup--p-code} in the following
section.
 
Now that you know which profile file to use, type
`code ??profile file name??`{.markup--code .markup--p-code} where
\"profile fil  name\" is the name of the file you determined from the
last section. Once Visual Studio Code starts up with your file, at the
end of it (or if you\'ve already added aliases, in that section), type
the following.

```
 {#e808 .graf .graf--pre .graf-after--p name="e808"}
alias psql="psql -h localhost"
```


When you run `psql`{.markup--code .markup--p-code} from the command
line, it will now always add the part about wanting to connect to
*localhost* every time. You would have to type that each time,
otherwise.

To make sure that you set that up correctly, type
`psql -U postgres postgres`{.markup--code .markup--p-code}. This tells
the `psql`{.markup--code .markup--p-code} client that you want to
connect as the user \"postgres\" (`-U postgres` ) to the database postgres (`postgres`  at the end), which is the default database created when
PostgreSQL is installed. It will prompt you for a password. Type the
password that you used when you installed PostgrSQL, earlier. If the
alias works correctly and you type the correct password, then you should
see something like the following output.

```
 {#36ba .graf .graf--pre .graf-after--p name="36ba"}
psql (12.2 (Ubuntu 12.2-2.pgdg18.04+1))
Type "help" for help.
```


```
 {#12f0 .graf .graf--pre .graf-after--pre name="12f0"}
postgres=#
```


Type `\q`{.markup--code .markup--p-code} and hit Enter to exit the
PostgreSQL client tool.

Now, you will add a user for your Ubuntu identity so that you don't have
to specify it all the time. Then, you will create a file that PostgreSQL
will use to automatically send your password every time.

Copy and paste the following into your Ubuntu shell. Think of a password
that you want to use for your user. **Replace the password in the single
quotes in the command with the password that you want.** It *has* to be
a non-empty string. PostgreSQL doesn't like it when it's not.

```
 {#b07c .graf .graf--pre .graf-after--p name="b07c"}
psql -U postgres -c "CREATE USER `whoami` WITH PASSWORD 'password' SUPERUSER"
```


It should prompt you for a password. Type the password that you created
when you installed PostgreSQL. Once you type the correct password, you
should see "CREATE ROLE".

Now you will create your PostgreSQL password file. Type the following
into your Ubuntu shell to open Visual Studio Code and create a new file.

```
 {#3707 .graf .graf--pre .graf-after--p name="3707"}
code ~/.pgpass
```


In that file, you will add this line, which tells it that on localhost
for port 5432 (where PostgreSQL is running), for all databases (\*),
**use your Ubuntu user name and the password that you just created for
that user with the** `psql`{.markup--code .markup--p-code} **command you
just typed.** (If you have forgotten your Ubuntu user name, type
`whoami`{.markup--code .markup--p-code} on the command line.) Your entry
in the file should have this format.

```
 {#76ca .graf .graf--pre .graf-after--p name="76ca"}
localhost:5432:*:??your Ubuntu user name??:??the password you just used??
```


Once you have that information in the file, save it, and close Visual
Studio Code.

The last step you have to take is change the permission on that file so
that it is only readable by your user. PostgreSQL will ignore it if just
anyone can read and write to it. This is for *your* security. Change the
file permissions so only you can read and write to it. You did this once
upon a time. Here's the command.

```
 {#5e66 .graf .graf--pre .graf-after--p name="5e66"}
chmod go-rw ~/.pgpass
```


You can confirm that only you have read/write permission by typing
`ls -al ~/.pgpass`{.markup--code .markup--p-code}. That should return
output that looks like this, **with your Ubuntu user name instead of
\"web-dev-hub\".**

```
 {#5419 .graf .graf--pre .graf-after--p name="5419"}
-rw------- 1 web-dev-hub web-dev-hub 37 Mar 28 21:20 /home/web-dev-hub/.pgpass
```


Now, try connecting to PostreSQL by typing `psql postgres` . Because you added the alias to your startup script,
and because you created your **.pgpass** file, it should now connect
without prompting you for any credentials! Type `\q`  and press Enter to exit the PostgreSQL command line
client.

### Installing Postbird {#bb3a .graf .graf--h3 .graf-after--p name="bb3a"}

Head over to the [Postbird releases page on
GitHub](https://github.com/Paxa/postbird/releases) . Click th  installer for Windows which you can
recognize because it's the only file in the list that ends with ".exe".

![](https://cdn-images-1.medium.com/max/800/0*ZdKurvQ4bHs3vDLT.png) 

After that installer downloads, run it. You will get a warning from
Windows that this is from an unidentified developer. If you don't want
to install this, find a PostgreSQL GUI client that you do trust and
install it or do everything from the command line.

![](https://cdn-images-1.medium.com/max/800/0*EWpFEwM0YUDQCW_i.png) 

You should get used to seeing this because many open-source applications
aren't signed with the Microsoft Store for monetary and philosophical
reasons.

Otherwise, if you trust Paxa like web-dev-hub and tens of thousands of
other developers do, then click the link that reads "More info" and the
"Run anyway" button.

![](https://cdn-images-1.medium.com/max/800/0*9pDpx8XsYt2KnMku.png) 

When it's done installing, it will launch itself. Test it out by typing
the "postgres" into the "Username" field and the password from your
installation in the "Password" field. Click the Connect button. It
should properly connect to the running

You can close it for now. It also installed an icon on your desktop. You
can launch it from there or your Start Menu at any time.

### Now.. if you still have some gas in the tank... let's put our new tools to work: {#6ca1 .graf .graf--h3 .graf-after--p name="6ca1"}

### The node-postgres {#9301 .graf .graf--h3 .graf-after--h3 name="9301"}

The node-postgres is a collection of Node.js modules for interfacing
with the PostgreSQL database. It has support for callbacks, promises,
async/await, connection pooling, prepared statements, cursors, and
streaming results.

In our examples we also use the Ramda library. See Ramda tutorial for 
more information.

### Setting up node-postgres {#5948 .graf .graf--h3 .graf-after--p name="5948"}

First, we install node-postgres.

\$ node -v\
v14.2

\$ npm init -y

We initiate a new Node application.

npm i pg

We install node-postgres with `nmp i pg`{.markup--code .markup--p-code}.

npm i ramda

In addition, we install Ramda for beautiful work with data.

cars.sql

DROP TABLE IF EXISTS cars;

CREATE TABLE cars(id SERIAL PRIMARY KEY, name VARCHAR(255), price INT);\
INSERT INTO cars(name, price) VALUES('Audi', 52642);\
INSERT INTO cars(name, price) VALUES('Mercedes', 57127);\
INSERT INTO cars(name, price) VALUES('Skoda', 9000);\
INSERT INTO cars(name, price) VALUES('Volvo', 29000);\
INSERT INTO cars(name, price) VALUES('Bentley', 350000);\
INSERT INTO cars(name, price) VALUES('Citroen', 21000);\
INSERT INTO cars(name, price) VALUES('Hummer', 41400);\
INSERT INTO cars(name, price) VALUES('Volkswagen', 21600);

In some of the examples, we use this `cars`  table.

### The node-postgres first example {#e064 .graf .graf--h3 .graf-after--p name="e064"}

In the first example, we connect to the PostgreSQL database and return a
simple SELECT query result.

first.js

```
 {#7928 .graf .graf--pre .graf-after--p name="7928"}
const pg = require('pg');
const R = require('ramda');
const cs = 'postgres://post res:s$cret@localhost:5432/ydb';
const client = new pg.Client(cs);
client.connect();
client.query('SELECT 1 + 4').then(res => {
```


```
 {#d808 .graf .graf--pre .graf-after--pre name="d808"}
const result = R.head(R.values(R.head(res.rows)))
```


```
 {#048d .graf .graf--pre .graf-after--pre name="048d"}
console.log(result)
}).finally(() => client.end());
```


The example connects to the database and issues a SELECT statement.

```
 {#4b98 .graf .graf--pre .graf-after--p name="4b98"}
const pg = require('pg');
const R = require('ramda');
```


We include the `pg`{.markup--code .markup--p-code} and
`ramda`{.markup--code .markup--p-code} modules.

```
 {#9141 .graf .graf--pre .graf-after--p name="9141"}
const cs = 'postgres://postgres:s$cret@localhost:5432/ydb';
```


This is the PostgreSQL connection string. It is used to build a
connection to the database.

```
 {#ed54 .graf .graf--pre .graf-after--p name="ed54"}
const client = new pg.Client(cs);
client.connect();
```


A client is created. We connect to the database with
`connect()`{.markup--code .markup--p-code}.

```
 {#852f .graf .graf--pre .graf-after--p name="852f"}
client.query('SELECT 1 + 4').then(res => {
```


```
 {#fe88 .graf .graf--pre .graf-after--pre name="fe88"}
const result = R.head(R.values(R.head(res.rows)));
```


```
 {#67d8 .graf .graf--pre .graf-after--pre name="67d8"}
console.log(result);
```


```
 {#8d6d .graf .graf--pre .graf-after--pre name="8d6d"}
}).finally(() => client.end());
```


We issue a simple SELECT query. We get the result and output it to the
console. The `res.rows`{.markup--code .markup--p-code} is an array of
objects; we use Ramda to get the returned scalar value. In the end, we
close the connection with `end()`{.markup--code .markup--p-code}.

```
 {#ddba .graf .graf--pre .graf-after--p name="ddba"}
node first.js
5
```


This is the output.

### The node-postgres column names {#831a .graf .graf--h3 .graf-after--p name="831a"}

In the following example, we get the columns names of a database.

> column\_names.js

```
 {#c321 .graf .graf--pre .graf-after--blockquote name="c321"}
const pg = require('pg');
```


```
 {#eef8 .graf .graf--pre  graf-after--pre name="eef8"}
const cs = 'postgres://postgres:s$cret@localhost:5432/ydb';
```


```
 {#6ba3 .graf .graf--pre .graf-after--pre name="6ba3"}
const client = new pg.Client(cs);
```


```
 {#aff5 .graf .graf--pre .graf-after--pre name="aff5"}
client.connect();
```


```
 {#e567 .graf .graf--pre .graf-after--pre name="e567"}
client.query('SELECT * FROM cars').then(res => {
```


```
 {#51b0 .graf .graf--pre .graf-after--pre name="51b0"}
const fields = res.fields.map(field => field.name);
```


```
 {#ce9a .graf .graf--pre .graf-after--pre name="ce9a"}
console.log(fields);
```


```
 {#258a .graf .graf--pre .graf-after--pre name="258a"}
}).catch(err => {
console.log(err.stack);
}).finally(() => {
client.end()
});
```


The column names are retrieved with `res.fields`  attribute. We also use the `catch`  clause to output potential errors.

```
 {#f16d .graf .graf--pre .graf-after--p name="f16d"}
node column_names.js
'id', 'name', 'price'???id???,???name???,???price???
```


The output shows three column names of the `cars`  table.

### Selecting all rows {#1234 .graf .graf--h3 .graf-after--p name="1234"}

In the next example, we select all rows from the database table.

> all\_rows.js

```
 {#218a .graf .graf--pre .graf-after--blockquote name="218a"}
const pg = require('pg');
const R = require('ramda');
```


```
 {#dc07 .graf .graf--pre .graf-after--pre name="dc07"}
const cs = 'postgres://postgres:s$cret@localhost:5432/ydb';
```
 

```
 {#ffc0 .graf .graf--pre .graf-after--pre name="ffc0"}
const client = new pg.Client(cs);
```


```
 {#44cd .graf .graf--pre .graf-after--pre name="44cd"}
client.connect();
```


```
 {#5bd0 .graf .graf--pre .graf-after--pre name="5bd0"}
client.query('SELECT * FROM cars').then(res => {
```


```
 {#a38c .graf .graf--pre .graf-after--pre name="a38c"}
const data = res.rows;
```


```
 {#c5ba .graf .graf--pre .graf-after--pre name="c5ba"}
console.log('all data');
data.forEach(row => {
    console.log(\`Id: ${row.id} Name: ${row.name} Price: ${row.price}\`);
})
```


```
 {#9378 .graf .graf--pre .graf-after--pre name="9378"}
console.log('Sorted prices:');
const prices = R.pluck('price', R.sortBy(R.prop('price'), data));
console.log(prices);
```


```
 {#0534 .graf .graf--pre .graf-after--pre name="0534"}
}).finally(() => {
client.end()
});
```


**TBC...**

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#f53f .graf .graf--h4 .graf-after--p name="f53f"}

[bgoonz's gists ??
GitHub](https://gist.github.com/bgoonz) 

[**bgoonz???---???Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 
 

Or Checkout my personal Resource Site:

 
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 






By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 6, 2021](https://medium.com/p/801672ab7089).

