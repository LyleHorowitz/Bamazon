var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jddonuts',
    database: 'bamazonDB'
});

connection.connect(function(){


connection.query("SELECT * FROM bamazon_table", function(err, res)
{
console.log(res)
});
});

