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
        if(createDatabase(directory,connection)){
          //insert dummy data
          let dummyFile = path.join(
            __dirname,
            "mySqlQueries/initCampusEatsData.sql"
          );
          insertDummyData(dummyFile,connection)
        }
      } else {
        console.log(`-> Successfully connect to database`);
      }
      callbackFunction();
    }
  });
}


// ================== HELPERS =====================

//=Duy
function isExistDB(databaseName, conn) {
  console.log(`-> Checking if database exists.`);
  let queryString = `SELECT SCHEMA_NAME
    FROM INFORMATION_SCHEMA.SCHEMATA    
    WHERE SCHEMA_NAME = '${databaseName}'
    `;
  if (executeQuery(queryString, conn) != null) {
    return true;
  }
  return false;
}

//=Duy
function createDatabase(fileDirectory, connection){
  let successfulCreatedDB = false;
  while (successfulCreatedDB === false) {
    successfulCreatedDB = executeQueriesFromFile(fileDirectory, connection);
  }
  if(successfulCreatedDB==true){
    console.log(`-> Done Creating Database.`);
  }else{
    console.log(`-> FAILED Creating Database.`);
  }
  return successfulCreatedDB
}

//=Duy
function insertDummyData(fileDirectory, connection){
  let successInsert = false;
  while (successInsert === false) {
    successInsert = executeQueriesFromFile(fileDirectory, connection);
  }
  if(successInsert==true){
    console.log(`-> Done Inserting Dummy Data.`);
  }else{
    console.log(`-> FAILED Inserting Dummy Data.`);
  }
  return successInsert
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

// =Duy
function executeQueries(queries, conn) {
  queries.forEach((query) => {
    if(executeQuery(query, conn)===undefined){
      return false
    }
  });
  return true;
}

function executeQueriesFromFile(filePath,conn){
  let queries = readAndSpiltQueries(filePath);
  return executeQueries(queries,conn);
}

module.exports = { connectDB, connection, executeQuery, readAndSpiltQueries };
