var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(colName, colVal, cb) {
        orm.insertOne("burgers", colName, colVal, function(res) {
            cb(res);
        })
    },
    updateOne: function() {
        orm.updateOne("burgers", tableInput, colName, value, colMatch, colMatchValue, function(res) {
            cb(res);
        })
    }
}


burger.selectAll((data) => console.log(data))
// burger.insertOne("burgers", "burger_name", "big n tasty", (data) => console.log(data))

// burger.updateOne("burgers", "devoured", "1", "id", "4", (data) => console.log(data));