var express = require('express');
var db = require("../models");
var router = express.Router();

router.get('/', function(req,res){
    db.Burger.findAll({}).then(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    })
});

router.put('/burgers/update', function(req,res){
    var id = req.body.burger_id;
    console.log(req.body.burger_id);
    db.Burger.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }.then(function(dbBurger) {
        res.redirect('/')
    });
});

router.post("/burgers/create", function(req,res){
    db.Burger.create(req.body).then(function(dbBurger){
        res.json(dbBurger)
    });
});

module.exports = router; 