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

                            var user_qty = res[0].stock_quantity
                            if(res[0].stock_quantity - [user_qty] > -1) {
                                var dept = res[0].department_name;
                                var qty = res[0].stock_quantity - answers.stock_quantity;
                                var price = (answers.stock_quantity * res[0].price).toFixed(2);


                            };


                        });
                        connection.query("UPDATE bamazon_table SET ? WHERE ?", {
                            stock_quantity: answers.stock_quantity
                        },
                        function(err, res) {
                            if (res[0].stock_quantity - [user_qty] > -1) {



                            };
                        });


                        });

                        // else if statement (if stock is < user input, console log "Insufficent Quantity", stop order)

                        // update mySQL datatbase to reflect new quantity (see Great Bay)

                        // display total for customer (see Great Bay) -- USE RECURSION 

                        });

                        });

                        });