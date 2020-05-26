var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xvyk8y98dqaf99ux",
  password: "xdfu1zy88p35isbh",
  database: "mlakcx3pj067ut66"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;

