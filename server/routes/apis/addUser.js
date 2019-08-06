let express = require('express');
let app = express();
let mysql = require('./mySqlCalls.js');
let qs = require('querystring');
let path = require('path');

app.post('/', function(req, res, next) {
  // console.log(req.body);
  let callback = function(err, result) {
    if (err) {
      console.log(err.message);
      res.sendFile('error.html', {
        root: path.join(__dirname, '../../views')
      });
    }
    if (result === undefined) {
      res.sendFile('error.html', {
        root: path.join(__dirname, '../../views')
      });
    } else {
      res.send(result);
      // res.sendFile('index.html',{
      //     root:path.join(__dirname,'../../views/super_admin')
      // });
    }
  };

  let sapientId = req.body.sapientId;
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let type = req.body.type;
  let designation = req.body.designation;
  console.log(name + email + designation);
  if (type === 'super_admin')
    mysql.addUser([sapientId, name, email, password, type, designation, 'approved'], callback);
  else mysql.addUser([sapientId, name, email, password, type, designation, 'pending'], callback);
  // mysql.addUser(["145004","sammed","samravan@publicissapient.com","123456","super_admin","sss","approved"], callback);
});

module.exports = app;
