#### URL Shortener

A URL shortener provides short URLs that redirect to longer URLs, and keeps track of the number of clicks:

![Figure-1](https://www.katacoda.com/embed/orm-haki-benita/postgres-getting-started-tables/assets/url-shortener.png)

For example, a short URL like `https://sho.rt/jdj23d` can redirect to the longer URL `https://www.oreilly.com/attend/`.

Short URLs usually have a very short domain like `https://sho.rt`, and a short random part at the end we call a "key" (for example `jdj23d`). Using the short unique key, the application identifies the full URL and redirects to it.

URL shorteners are very common in text-constrained platforms such as SMS messages and tweets. URL shorteners are also very useful for keeping track of the numbers of clicks in digital campaigns and other types of promotions.

In the next step, you are going to create a table of short URLs.

---

#### Tables

# A Short URL Table

Data in relational databases is stored in tables. So, to store the data about short URLs in your system, you are going to create a `shorturl` table.

Create a table `shorturl` with the following fields:

- `id`: An auto-incrementing number
- `key`: Short string that uniquely identifies a URL
- `url`: URL to redirect to
- `hits`: Counter of the number of times the URL was redirected to
- `created_at`: When the short URL was created

To create the table, execute the following command in the terminal:

```sql
DROP TABLE IF EXISTS shorturl;

CREATE TABLE shorturl (
    id int generated by default as identity primary key,
    key varchar(6),
    url text,
    hits int,
    created_at timestamptz
);
```

📚 For reference, you can find the relevant documentation on CREATE TABLE [here](https://www.postgresql.org/docs/13/sql-createtable.html).

To inspect the table you just created, execute the following command in terminal:

```psql
\d shorturl
```

The output provides useful information about the table such as column names, types, indexes, and constraints. In the next step, you are going to explore some of these options and make some adjustments to the table.
