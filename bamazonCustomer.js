var mysql = require('mysql');
var inquirer = require('inquirer');
var cli_table = require('cli-table');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jddonuts',
    database: 'bamazonDB'
});


connection.connect(function() {


    connection.query("SELECT * FROM bamazon_table", function(err, res) {
        console.log(res)
    });

    inquirer.prompt([{
            type: "input",
            message: "What is the BSIN of the product you would like to buy?",
            name: "prompt1"
        }])
        .then(function(answers) {
            var BSIN = answers.prompt1
            inquirer.prompt([{
                    type: "input",
                    message: "How many units would you like to buy?",
                    name: "prompt2"
                }])
                .then(function(answers) {
                    var stock = answers.prompt2
                    connection.query("SELECT stock_quantity FROM bamazon_table WHERE item_id='" + BSIN + "'", function(err, res) {
                        console.log(res)
                            .then(function(answers) {
                              // check stock_quantity (SELECT/WHERE)
                            });
                        if (function(res) {
                             // if statement (if stock is > user input, process order)
                            });
                        else(function(res) {
                            // else statement (if stock is < user input, console log "Insufficent Quantity", stop order)
                       	    });
                        	// updated mySQL datatbase to reflect new quantity
                        	// display total for customer
                    });
                });
        });
});				

// insert CLI table