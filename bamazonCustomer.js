var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('easy-table');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jddonuts',
    database: 'bamazonDB'
});


connection.connect(function() {


    connection.query("SELECT * FROM bamazon_table", function(err, res) {
        // console.log(res)
    // TABLE BELOW
        var t = new table //

        res.forEach(function(product) { //
            t.cell('BSIN (Item #)', product.item_id) //
            t.cell('Description', product.product_name) //
            t.cell('Price, USD', product.price, table.number(2)) //
            t.newRow() //
        }) //

        console.log(t.toString()) //
         //
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
                            
                           
                            // if statement (if stock_quantity is > user input, fulfill order)
                          
                            // else statement (if stock is < user input, console log "Insufficent Quantity", stop order)
                       	    
                        	// update mySQL datatbase to reflect new quantity (see Great Bay)

                        	// display total for customer (see Great Bay) -- USE RECURSION 
                    });
                });
        });

    });

});	