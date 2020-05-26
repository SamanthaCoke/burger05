var connection = require("./connection");

var orm = {
  selectAll: function (callback) {
    connection.query("select * from burgers", function (err, result) {
      callback(result);
    });
  },

  insertOne: function (burger_n, callback) {
    connection.query(
      `INSERT INTO burgers (burger_name) VALUES ("${burger_n}")`,
      function (err, result) {
        if(err) {
            console.log("in orm", err)
        }
            
        callback(result);
      }
    );
  },

  updateOne: function (burger_id, callback) {
    connection.query(
      `UPDATE burgers SET devoured = true where id = ${burger_id}`,
      function (err, result) {
        if(err) {
            console.log("in orm", err)
        }
            
        callback(result);
      }
    );
  },
};

module.exports = orm;
