var express = require('express');
var app = express();
var mysql = require("./mySqlCalls.js");
var qs=require("querystring");
var path = require('path')

app.get('/', function(req, res, next) {
    // console.log(req.body);
    var sapientId = req.session.sapientId;
    // var email = req.body.email;
    // var pass = req.body.pass;
    // console.log("this"+sapientId)
    var callback = function(err, result){
        if(err){
            console.log(err.message);
            res.redirect("/login?error="+qs.escape(err.message));
        }
        if(result.length==0){
            res.redirect("/login?error="+qs.escape("employee not found"));
        }else{
            var employee=result[0];
            res.send(employee);
        }
    }
    mysql.getEmployeeDetails(sapientId, callback);
});

module.exports = app;