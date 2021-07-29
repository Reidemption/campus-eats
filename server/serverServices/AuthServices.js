// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const webtoken = require("jsonwebtoken");
const authentication = require("./authLogic/authentication");
const BLOModules = require("./businessLogic/BLL/bllModules");
const services = express();
const refreshTokens =[];

// ========== Middlewares ===========
services.use(cors());
services.use(express.json({}));
services.use(express.static("~/admin_test_pages"));

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
    req.originalUrl,
    "- Headers:",
    req.headers,
    "- Body:",
    req.body
  ),
    next();
});


// -------------- LOGIN ----------------------
services.post("/login",(req,res)=>{
  BLOModules.UserBLO.findUserByEmail(req.body.email,async (err,user)=>{
    if(err){
      res.status(500).send("Please try login later.");
      return;
    }
    if(user == null){
      res.status(400).send("Wrong Username or Password");
      return;
    }else {
      try {
        let currentUser = {
          id :user[0]._id,
          username :user[0].username,
          password: user[0].hashed_password
        }
        if(await bcrypt.compare(req.body.password,currentUser.password)){
          
          let accessToken = authentication.generateAccessToken(currentUser)
          let refreshToken = authentication.generateRefreshToken(currentUser)
          //TODO:later move this refresh token list to database
          refreshTokens.push(refreshToken)

          res.status(200).json({at :accessToken, rt:refreshToken})
        }else{
          res.status(400).send("Wrong Username or Password")
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Please try login later.");
      }
    }
  })
})
// -------------- LOGOUT ---------------------
services.delete("/logout",(req,res)=>{
  //in the logout button, set the body with prop call "token" saving refreshtoken
  refreshTokens = refreshTokens.filter((token)=>token!==req.body.token)
  res.sendStatus(204)
})

services.post("/token",(req,res)=>{
  const refreshToken = req.body.rt
  if(refreshToken ==null){
    return res.status(401).send({ message: "Unauthorized!" });
  }
  if(!authentication.refreshTokens.includes(refreshToken)){
    return res.status(403).send({ message: "Please log in again" });
  }
  webtoken.verify(refreshToken, `${process.env.SERVER_ACCESS_TOKEN}`, (err, user) => {
    if (err) {
      return res.status(403).send({ message: "Please log in again!" });
    }
    let accessToken = authentication.generateAccessToken(user)
    // let refreshToken = authentication.generateRefreshToken(user)
    res.status(200).json({
      at:accessToken
    })
  });
})
// ========= ERROR HANDLER ==========
services.use((req, res, next) => {
  if (req.headers.error != undefined) {
    console.log(`-------------------- ERROR ---------------------`);
    console.log(`- ${Date.now()}`);
    console.log(`--- Error: ${err}`);
    console.log(`------------------------------------------------`);
  }
  // res.status(req.headers.status).json(req.headers.message);
});
// ========= EXPORT MODULE ==========
module.exports = services;
