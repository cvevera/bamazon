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
    displayProducts();
});


// inquire function ID question then units question which triggers two functions

function displayProducts() {
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
        }
        productPurchase();
    })
    
};
function productPurchase() {
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
        .then(function (answer) {
            var query = "SELECT * FROM product WHERE ?";
            connection.query(query, { item_id: answer.idprompt }, function (err, results) {
                // console.log(results[0].stock_quanity)
                if (err) throw err;
                if (results[0].stock_quanity < answer.quanityprompt){
                console.log("We don't have that many units available! Please select another quanity or product.")
                productPurchase();
                }
                else {
                var queryUpdate = 'UPDATE product SET stock_quanity = ' + (results[0].stock_quanity - answer.quanityprompt) + ' WHERE item_id = ' + answer.idprompt;
                connection.query(queryUpdate, function (err, res) {
                    if (err) throw err;

                })
                console.log("Thank you for your purchase! Your total is $" + (results[0].price * answer.quanityprompt))
                buyAgain();
            }
                }
            
                    )
            })}
            
function buyAgain() {
    inquirer
    .prompt({
        name: "confirm",
        type: "list",
        message: "Would you like to purchase another product?",
        choices: ["Yes please!", "No thank you!"]
    }
    )
    .then(function (answer){
    if (answer.confirm === "Yes please!") {
        displayProducts();
    } else {connection.end();}
})};
