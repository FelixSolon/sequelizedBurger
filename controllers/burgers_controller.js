var express = require('express');
var burger = require("../models/burger.js");
var router = express.Router();

router.get('/', function(req,res){
    burger.select(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    })
});

router.put('/bugs/update', function(req,res){
    var id = req.body.bugId;
    console.log(req.body.bugId);
    burger.update(id, function(result){
        console.log(result);
        res.redirect('/')
    });
})

router.post("/bug/<creat></creat>e", function(req,res){
    burger.create(req.body.bugName, function(result){
        console.log(result);
        res.redirect("/")
    });
});

module.exports = router; 