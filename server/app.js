const express = require(`express`);
const mysql = require(`mysql`);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql connected..");
});

const app = express();

// Create db
app.get("/createdb", (req, res) => {
  let sql = `CREATE DATABASE campus_eats_db`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created..");
  });
});

// Create table
app.get("/createtable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("posts table created..");
  });
});

// Insert post 1
app.get("/addpost1", (req, res) => {
  let post = { title: "Post One", body: "This is post number one" };
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 1 added..");
  });
});

// Insert post 1
app.get("/addpost2", (req, res) => {
  let post = { title: "Post Two", body: "This is post number one" };
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 2 added..");
  });
});

app.get("/getposts", (req, res) => {
  let sql = "SELECT * FROM posts";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(`3000`, () => {
  console.log(`Server started on port 3000.`);
});
