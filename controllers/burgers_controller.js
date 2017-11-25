var express = require('express');
var db = require("../models");
var router = express.Router();

router.get('/', function(req,res){
    db.Burger.findAll({}).then(function(burger_data){
        res.render('index',{burger_data});
    })
});

router.put('/burgers/update', function(req,res){
    var id = req.body.burger_id;
    console.log("ID:");
    console.log(req.body.burger_id);
    console.log("Body:");
    console.log(req.body);
    db.Burger.update(
        {
            devoured: true
        },
        {
            where: {
                id: req.body.burger_id
        }
        }).then(function(dbBurger) {
        res.redirect('/')
    });
});

router.post("/burgers/create", function(req,res){
    db.Burger.create(req.body).then(function(dbBurger){
        res.redirect('/')
    });
});

module.exports = router; 