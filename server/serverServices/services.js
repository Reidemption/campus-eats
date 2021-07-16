const express = require("express")
const {connectDB,database} = require("../dataAccessLayer/DAO");
const cors = require("cors")
const services = express();
// ========== Middlewares ===========
services.use(cors())
services.use(express.json({}))

// ======== Request handlers =========
// --- LOG ---
services.use((req,res,next)=>{
    res.setHeader("Content-Type","application/json");
    console.log("======================== REQUEST ==========================")
    console.log(
        "- Time:",Date.now(),
        "- Method:", req.method,
        "- Url:", req.url,
        "- Path:",path(req.url.toLowerCase),
        "- Body:", req.body
    ),
    next()
})
// ========= EXPORT MODULE ==========
module.exports=services