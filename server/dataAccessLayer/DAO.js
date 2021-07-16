// ============= Data Access Object ==============
const mysql = require("mysql2")
const path = require('path');
const fs = require('fs');
const databaseName = "campus_eats_db"
const connection = mysql.createConnection({
                        host:"localhost",
                        user:"root", 
                        password:"password",// your root's password
                        database:"campus_eats_db"
                    });

function connectDB(callbackFunction){
    console.log(`-> Trying to connect to Mysql server.`)
    connection.connect((err)=>{
        if(err){
            console.log(`-------------------- ERROR ---------------------`)
            console.log(`- ${Date.now()} - Cannot connect to Mysql`)
            console.log(`--- Error: ${err}`)            
            console.log(`------------------------------------------------`)
        }else{
            console.log(`-> Successfully connect to Mysql`)  
            console.log(`-> Trying to connect to database.`)
            //TODO: check if database have been created or not
            //if database havent been created
            let databaseExist=isExistDB(databaseName,connection)
            if(!databaseExist){
                let directory = path.join(__dirname, 'mySqlQueries/initcampuseatsdb.sql')
                //create database
                let successfulCreatedDB= false
                while (successfulCreatedDB===false){
                    successfulCreatedDB = createDBfromFile(directory,connection)
                }                
                console.log(`-> Done creating database.`)
            }else{
                console.log(`-> Successfully connect to database`)  
            }
            callbackFunction();
        }
    });
}
// ================== HELPERS =====================
function isExistDB(databaseName,conn){
    console.log(`-> Checking if database exists.`)
    let databaseCheckQuery = `SELECT SCHEMA_NAME
    FROM INFORMATION_SCHEMA.SCHEMATA    
    WHERE SCHEMA_NAME = '${databaseName}'
    `
    conn.query(databaseCheckQuery,(err,results)=>{
        if(err){
            console.log(`-------------------- ERROR ---------------------`)
            console.log(`- ${Date.now()} - Cannot look up database name ${databaseName}`)
            console.log(`--- Error: ${err}`)            
            console.log(`------------------------------------------------`)
        }
        if(results.length!=0){
            console.log(`-> Database exists.`)
            return true
        }
        console.log(`-> Database does not exist.`)
        return false
    })
}

//TODO:  do this inside a transaction
function createDBfromFile(fileDirectory, conn){
    console.log(`-> Creating database.`)

    let queries = readAndSpiltQueries(fileDirectory)
    queries.forEach(queryString=>{
        conn.query(queryString, (err) => {
            if (err){
                console.log(`-------------------- ERROR ---------------------`)
                console.log(`- ${Date.now()} - Cannot execute ${queryString}`)
                console.log(`--- Error: ${err}`)            
                console.log(`------------------------------------------------`)
                return false
            }
        });
    })
    return true
}

//credit :https://www.thiscodeworks.com/javascript-import-sql-file-in-node-js-and-execute-against-postgresql-stack-overflow-sql-nodejs/5fc1488a5fb6ba00144ecb60
function readAndSpiltQueries(fileDirectory){    
    // Extract SQL queries from files. Assumes no ';' in the fileNames
    let queries=fs.readFileSync(fileDirectory).toString()
                                                    .replace(/(\r\n|\n|\r)/gm," ") // remove newlines
                                                    .replace(/\s+/g, ' ') // excess white space
                                                    .split(";") // split into all statements
                                                    .map(Function.prototype.call, String.prototype.trim)
                                                    .filter(function(el) {return el.length != 0}); // remove any empty ones
    return queries;
}

module.exports={connectDB,connection};
