var mysql = require("mysql")
let connectionString = ""

function connectDB(callback){
    mysql.createConnection({
        host:"localhost",
        user:"dbuser",
        password:"password",
        database:"campus_eats_db"
    })
}