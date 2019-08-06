const express = require('express');

const app = express();
const qs = require('querystring');
const mysql = require('./mySqlCalls.js');

app.get('/', function(req, res) {
  // console.log(req.body);
  // var type = req.session.type;
  const callback = function(err, result) {
    if (err) {
      console.log(err.message);
      res.redirect(`/login?error=${qs.escape(err.message)}`);
    }
    if (result.length == 0) {
      res.redirect(`/login?error=${qs.escape('employee not found')}`);
    } else {
      res.send(result);
      //    res.end(result);
    }
  };
  mysql.getAllPermissions(callback);
  // res.send({'permissions':['add_users','review_users','add_questions','review_questions','create_role','skill_matrix']})
});

module.exports = app;
