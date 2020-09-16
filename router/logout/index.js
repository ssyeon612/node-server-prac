var express = require('express')
var app = express()
var router = express.Router();

app.get('/', function(req, res){
    console.log('logout router')
    req.logout();
    res.redirect('/');
})

module.exports = router;