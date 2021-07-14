var mysql = require("mysql")
let connectionString = ""

function connectDB(callback){
    mysql.createConnection({
        host:"localhost",
        user:"root", // you can leave this or change it into any username taht you set up
        password:"password",// your database password
        database:"campus_eats_db"
    }).connect();
}

module.exports=connectDB;
// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()