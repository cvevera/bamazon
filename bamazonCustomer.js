var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  password: "Turkey12!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
 
  start();
});

// inquire function ID question then units question which triggers two functions

