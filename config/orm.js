var connection = require("./connection.js");



var orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableInput, colName, colVal, cb) {

        connection.query("INSERT INTO ?? (??) VALUES (?)", [tableInput, colName, colVal], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(tableInput, colName, value, colMatch, colMatchValue, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colName, value, colMatch, colMatchValue], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
    
}

module.exports = orm;


// orm.selectAll("burgers", (data) => console.log(data))
// orm.insertOne("burgers", "burger_name", "big n tasty", (data) => console.log(data))

// orm.updateOne("burgers", "devoured", "1", "id", "4", (data) => console.log(data));