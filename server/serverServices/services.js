const express = require("express");
const cors = require("cors");
const services = express();
const dataAccess = require("../dataAccessLayer/DAO");

// ========== Middlewares ===========
services.use(cors());
services.use(express.json({}));

// ======== Request handlers =========
// --- LOG ---
services.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  console.log("======================== REQUEST ==========================");
  console.log(
    "- Time:",
    Date.now(),
    "- Method:",
    req.method,
    "- Url:",
    req.url,
    "- Body:",
    req.body
  ),
    next();
});

services.get("/hello", (req, res) => {
  res.status(200).json({});
});

//  Get all Restaurant
services.get("/restaurant/", (req, res) => {
  let sql = `SELECT * FROM restaurants`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});
//  Get all meals
services.get("/meal/", (req, res) => {
  let sql = `SELECT * FROM meals`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});
//  Get all menus categories
services.get("/menu/", (req, res) => {
  let sql = `SELECT * FROM menus`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

//  Get specific Restaurant
services.get("/restaurant/:id", (req, res) => {
  let sql = `SELECT * FROM restaurants WHERE id=${req.params.id}`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});
//  Get specific meals
services.get("/meal/:id", (req, res) => {
  let sql = `SELECT * FROM meals WHERE id=${req.params.id}`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});
//  Get specific menus categories
services.get("/menu/:id", (req, res) => {
  let sql = `SELECT * FROM menus WHERE id=${req.params.id}`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

// UPDATE NEEDS TO BE FINISHED
//  Update specific Restaurant
services.get("/up/restaurant/:id", (req, res) => {
  let sql = `UPDATE restaurants SET  WHERE id=${req.params.id}`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});
//  Update specific meals
services.get("/up/meal/:id", (req, res) => {
  let sql = `UPDATE meals SET  WHERE id=${req.params.id}`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});
//  Update specific menus categories
services.get("/up/menu/:id", (req, res) => {
  let sql = `UPDATE menus SET  WHERE id=${req.params.id}`;
  let data = dataAccess.connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(result);
    res.status(200).send(result);
  });
});

// ========= EXPORT MODULE ==========
module.exports = services;
