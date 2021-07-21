const express = require("express");
const cors = require("cors");

const app = express();
const dataAccess = require("../dataAccess/DAO");
const model = require("./FrontEnd_Object_Models/frontendModel");

// ========== Middlewares ===========
app.use(cors());
app.use(express.json({}));

// ======== Request handlers =========
// --- LOG ---
app.use((req, res, next) => {
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
// ========== MIDDLEWARES ===========

//----------------- RESTAURANT --------------------
// Get - one
app.get('/restaurants/:name',(req,res)=>{
  res.setHeader("Content-Type","application/json");
  console.log(`Server receive item to get item with id: ${req.params.id}`);

  Todo.findById(req.params.id,(err,todo)=>{
      //check if there was an error
      if(err){
          console.log(`There was an error finding a todo with id ${res.params.id}`,err);
          res.status(500).json({
              message:`unable to find todo with id ${req.params.id}`,
              error:err
          });
      }
      if(todo===null){
          res.status(404).json({
              message:`unable to find todo with id ${req.params.id}`,
          });
      }
      //success return todo:
      res.status(200).json(todo);
  });
});

// ========= ERROR HANDLER ==========
app.use((req, res, next) => {
  if(req.headers.error !=undefined){
    console.log(`-------------------- ERROR ---------------------`);
    console.log(`- ${Date.now()} - Cannot connect to Mysql`);
    console.log(`--- Error: ${err}`);
    console.log(`------------------------------------------------`);
  }
  next();
});
// ========= EXPORT MODULE ==========
module.exports = services;
