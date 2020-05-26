var orm = require ('../config/orm')


var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(result) {

            callback(result);
        });
    },
    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(result) {
            callback(result);
        })
    },
    updateOne: function(burger_id, callback) {
        orm.updateOne(burger_id, function(result) {
            callback(result);
        })
    }
}


module.exports = burger; 