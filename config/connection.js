var mysql = require("mysql");
var MySQLPassword;
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    MySQLPassword = require("../keys.js");
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: MySQLPassword,
    database: "burgers_db"
    });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
