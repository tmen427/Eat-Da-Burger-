var express = require("express");

var router = express.Router();

var burger = require('../models/burger.js')


router.get("/", function(req,res) {
    burger.displayAll(function(data) {
       var sup = {
           burgers:data
       }
       console.log('hello');
        res.render("index", sup);
    })

});


router.post("/add", function(req,res) {
    burger.insertion([req.body.burger_name], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
})
});

router.put("/eat", function(req, res) {
    burger.devour([req.body.id], function(result) {
        res.json({id:result.insertId});
    })
});


module.exports = router; 

//make the routes here!!!