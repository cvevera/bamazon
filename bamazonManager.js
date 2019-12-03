var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password: "Turkey12!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    managerMenu();
});

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
        managerMenu ();
    })};

    function managerMenu () {
        inquirer
        .prompt ({
            name: "managerOptions",
            type: "list",
            message: "Hello manager! What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]

        })
        .then(function (answer){
            switch (answer.managerOptions) {
                case "View Products for Sale":
                    displayProducts();
                    break;
                case "View Low Inventory":
                    lowInventory();
                    break;
                case "Add to Inventory":
                    addInventory();
                    break;
                case "Add New Product":
                    addProduct();
                    break;
        }
    })};

    function lowInventory(){
        connection.query("SELECT * FROM product WHERE stock_quanity < 5", function (err, results) {
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
            managerMenu ();
        })};

    function addInventory(){
        inquirer
        .prompt([{
            name: "idprompt",
            message: "What is the id of the product you would like to add?",
            type: "input",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;}
          },
         {
             name: "quanityprompt",
             message: "How many units would you like to add?",
             type: "input",
             validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
         }},
        ])
        .then(function (answer){
            var query = "SELECT * FROM product WHERE ?";
            connection.query(query, { item_id: answer.idprompt }, function (err, results) {
                if (err) throw err;
                var queryUpdate = 'UPDATE product SET stock_quanity = ' + (parseInt(results[0].stock_quanity) + parseInt(answer.quanityprompt)) + ' WHERE item_id = ' + answer.idprompt;
                connection.query(queryUpdate, function (err, res) {
                    if (err) throw err;
                    console.log("Product added!")
                    managerMenu();
                }
                
            )})

    }
    )
};

    function addProduct () {};