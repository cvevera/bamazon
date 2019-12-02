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

connection.connect(function (err) {
    if (err) throw err;

    start();
});

// inquire function ID question then units question which triggers two functions

function start() {
    connection.query("SELECT * FROM product", function (err, results) {
        if (err) throw err;
        console.log("Product Inventory")
        console.log("-----------------------------")
        for (var i = 0; i < results.length; i++) {
            console.log(
                "Id: " + results[i].item_id + " |",
                "Product: " + results[i].product_name + " |",
                "Department: " + results[i].department_name + " |",
                "Price: " + results[i].price + " |",
                "Quantity: " + results[i].stock_quanity);
        };
        inquirer
            .prompt([
                {
                    name: "idprompt",
                    type: "input",
                    message: "Please type the id number of the product you would like to purchase.",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    name: "quanityprompt",
                    type: "input",
                    message: "How many units would you like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
        // .then(function (answer) {

        // });
    })
};
