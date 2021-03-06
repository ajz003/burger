var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    let burgerName = req.body.burger_name;

    if (burgerName === "") {

        return res.json(false);
    }
    console.log("burgername: " + burgerName)
    burger.insertOne(burgerName, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var idValue = req.params.id;

    burger.updateOne(1, idValue, function (result) {

        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    });
})

router.delete("/api/burgers/delete", function(req, res) {

    burger.deleteAll(function (result) {

        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

    });
});



module.exports = router;

