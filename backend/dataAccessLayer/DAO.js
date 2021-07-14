// ============= Data Access Layer ==============
const mysql = require("mysql")
// const mysqlx = require("@mysql/xdevapi")

function connectDB(callbackFunction){
    // let connectionString = ``;
    mysql.createConnection(/*connectionString,*/{
        host:"localhost",
        user:"root", // you can leave this or change it into any username taht you set up
        password:"password",// your database password
        database:"campus_eats_db"
    }).connect((err)=>{
        if(err){
            console.log(`-------------------- ERROR ---------------------`)
            console.log(`- ${Date.now()} - Cannot connect to the Database`)
            console.log(`--- Error: ${err}`)            
            console.log(`------------------------------------------------`)
        }},callbackFunction);
}

module.exports={connectDB,mysql};

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()