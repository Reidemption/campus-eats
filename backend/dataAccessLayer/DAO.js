// ============= Data Access Object ==============
const mysql = require("mysql")
const mysqlx = require("@mysql/xdevapi")

function connectDB(callbackFunction){
    console.log(`-> Trying to connect to Mysql server.`)
    // let connectionString = ``;
    mysql.createConnection(/*connectionString,*/{
        host:"localhost",
        user:"root", // you can leave this or change it into any username that you set up
        password:"password",// your database password
        database:"campus_eats_db"
    }).connect((err)=>{
        if(err){
            console.log(`-------------------- ERROR ---------------------`)
            console.log(`- ${Date.now()} - Cannot connect to the Database`)
            console.log(`--- Error: ${err}`)            
            console.log(`------------------------------------------------`)
        }else{

            callbackFunction();
        }});
}
// module.exports=connectDB;

// --- other ways to connect to database using xdevapi
// using a configuration object

const config ={ 
    host: 'localhost',
    user:"root", // you can leave this or change it into any username taht you set up
    password:"password",// your database password
    database:"campus_eats_db",
    port: 33060
}
function connectDBX(callbackFunction){
    mysqlx.getSession(
        config
    ).catch(err => {
        console.log(`-------------------- ERROR ---------------------`)
        console.log(`- ${Date.now()} - Cannot connect to the Database`)
        console.log(`--- Error: ${err}`)            
        console.log(`------------------------------------------------`)
    }).then(session => { //By default, the connector creates a new session using SSL/TLS for TCP connections.
        console.log(`-> ${session.inspect().host}`); // { host: 'localhost', ssl: true }    
        if(session){
            console.log(session.port);
            callbackFunction();
        }else{                
            console.log(`-------------------- ERROR ---------------------`)
            console.log(`- ${Date.now()} - Cannot connect to the Database`)
            console.log(`--- Error: ${session.path}`)            
            console.log(`------------------------------------------------`)
        }
    });
        
    // mysqlx.getSession('mysqlx://localhost?tls-versions=[TLSv1,TLSv1.1]')
    // .catch(err => {
    //     console.log(err); // TCP socket hang
    // });
}
module.exports=connectDBX;

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()