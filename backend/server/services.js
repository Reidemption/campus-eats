const express = require("express")
const cors = require("cors")
// const url = require("url")

const services = express();
// ========== Middlewares ===========
services.use(cors())
services.use(express)
services.use(express.json({}))
// services.use(express.static("../../frontend/"))

// ======== Request handlers =========
// --- LOG ---
services.use((req,res,next)=>{
    res.setHeader("Content-Type","application/json");
    console.log("======================== REQUEST ==========================")
    console.log(
        "- Time:",Date.now(),
        "- Method:", req.method,
        "- Url:", req.url,
        "- Body:", req.body
    ),
    next()
})

// --- PATH DIRECTORIES ---
// services.use((req,res,next)=>{
//     console.log(
//         "- Path:", url(req.url).pathname
//     ),
//     next()
// })

services.get("/hello",(req,res)=>{
    console.log(`${req.headers}`)
    console.log(`hi!`)
    res.status(200).json({message:`hi!`})
    return;
})


// ========= EXPORT MODULE ==========
module.exports=services