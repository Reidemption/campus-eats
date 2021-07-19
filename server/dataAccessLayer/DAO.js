// ============= Data Access Object ==============
const mysql = require("mysql2");
const path = require("path");
const fs = require("fs");
const databaseName = "campus_eats_db";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // your root's password
  database: "campus_eats_db",
});

function connectDB(callbackFunction) {
  console.log(`-> Trying to connect to Mysql server.`);
  connection.connect((err) => {
    if (err) {
      console.log(`-------------------- ERROR ---------------------`);
      console.log(`- ${Date.now()} - Cannot connect to Mysql`);
      console.log(`--- Error: ${err}`);
      console.log(`------------------------------------------------`);
    } else {
      console.log(`-> Successfully connect to Mysql`);
      console.log(`-> Trying to connect to database.`);
      //TODO: check if database have been created or not
      //if database havent been created
      let databaseExist = isExistDB(databaseName, connection);
      if (!databaseExist) {
        let directory = path.join(
          __dirname,
          "mySqlQueries/initcampuseatsdb.sql"
        );
        //create database
        let successfulCreatedDB = false;
        while (successfulCreatedDB === false) {
          successfulCreatedDB = createDBfromFile(directory, connection);
        }
        console.log(`-> Done creating database.`);
        
        let dummyDataDir = path.join(
          __dirname,
          "mySqlQueries/initCampusEatsData.sql"
        );
        let successfulInsertDummyData = false;
        while (successfulInsertDummyData === false) {
          successfulInsertDummyData = insertDummyData(dummyDataDir, connection);
        }
        console.log(`-> Done Inserting DummyData.`);
      } else {
        console.log(`-> Successfully connect to database`);
      }
      callbackFunction();
    }
  });
}


// ================== HELPERS =====================

//=Duy
function insertDummyData(fileDirectory, conn) {
  console.log(`-> Trying to insert DummyData.`);
  let queries = readAndSpiltQueries(fileDirectory);
  queries.forEach((queryString) => {
    if(executeQuery(queryString, conn)===undefined){
      console.log("-> FAILED to insertDummyData")
      return false;
    }
  });
  return true;
}

// =Duy
//TODO:  do this inside a transaction
function createDBfromFile(fileDirectory, conn) {
  console.log(`-> Creating database.`);
  let queries = readAndSpiltQueries(fileDirectory);
  queries.forEach((queryString) => {
    if(executeQuery(queryString, conn)===undefined){
      console.log("-> FAILED to createDBfromFile")
      return false;
    }
  });
  return true;
}

// =Duy
//credit :https://www.thiscodeworks.com/javascript-import-sql-file-in-node-js-and-execute-against-postgresql-stack-overflow-sql-nodejs/5fc1488a5fb6ba00144ecb60
function readAndSpiltQueries(fileDirectory) {
  // Extract SQL queries from files. Assumes no ';' in the fileNames
  let queries = fs
    .readFileSync(fileDirectory)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, " ") // remove newlines
    .replace(/\s+/g, " ") // excess white space
    .split(";") // split into all statements
    .map(Function.prototype.call, String.prototype.trim)
    .filter(function (el) {
      return el.length != 0;
    }); // remove any empty ones
  return queries;
}

// =Duy
function executeQuery(queryString, conn) {
  conn.query(queryString, (err, results) => {
    if (
      err &&
      err.code != "ER_TABLE_EXISTS_ERROR" &&
      err.code != "ER_DB_CREATE_EXISTS"
    ) {
      console.log(`-------------------- ERROR ---------------------`);
      console.log(`- ${Date.now()} - Cannot execute: ${queryString}`);
      console.log(`--- ${err.code}`);
      console.log(`------------------------------------------------`);
      return undefined;
    }
    return results;
  });
}

module.exports = { connectDB, connection, executeQuery, readAndSpiltQueries };
