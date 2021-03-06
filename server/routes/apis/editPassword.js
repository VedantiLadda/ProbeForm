var express = require('express');
var app = express();
var mysql = require("./mySqlCalls.js");
var qs=require("querystring");
var path = require('path')

app.post('/', function(req, res, next) {
    // console.log(req.body);
    var sapientId = req.session.sapientId;
    var callback = function(err, result){
        if(err){
            console.log(err.message);
            res.redirect("/login?error="+qs.escape(err.message));
        }
        if(result.length==0){
            res.redirect("/login?error="+qs.escape("employee not found"));
        }else{
            res.end(JSON.stringify(result));
        }
    }
    var password="123456";
    mysql.editPassword(password,sapientId, callback);
});

module.exports = app;