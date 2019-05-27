let express = require('express');
let app = express();
let mysql = require('./mySqlCalls.js');
let qs = require('querystring');
let path = require('path');

app.post('/', function(req, res, next) {
  console.log(req.body.roleBody);
  var role = req.body.role;
  var permissions = req.body.permissions;
  var list = [];
  console.log(permissions);
  permissions.forEach(function(permission) {
    list.push([role, permission]);
  });
  var callback = function(err, result) {
    // if (err) {
    //   console.log(err.message);
    //   res.redirect('/login?error=' + qs.escape(err.message));
    // }
    // if (result === undefined) {
    //   res.redirect('/login?error=' + qs.escape('employee not found'));
    // } else {
      // res.end(JSON.stringify(result));
      res.send(result);
  }

  mysql.createRole(list, callback);
});

module.exports = app;
