var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(res) {
            cb(res);
        })
    },
    updateOne: function(isDevoured, idValue, cb) {
        orm.updateOne("burgers", "devoured", isDevoured, "id", idValue, function(res) {
            cb(res);
        })
    },
    deleteAll: function(cb) {
        orm.deleteAll("burgers", function(res) {
            cb(res);
        })
    },
}


// burger.selectAll((data) => console.log(data))
// burger.insertOne("big n tasty 2", (data) => console.log(data))
// burger.updateOne(1, 1, (data) => console.log(data));

module.exports = burger;