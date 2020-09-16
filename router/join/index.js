var express = require('express')
var app = express()
var router = express.Router();
var path = require('path');
var mysql = require('mysql')

//DATABASE SETTING
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'appg',
    password: 'appg',
    database: 'jsnode'
})

connection.connect();


//ROUTER
router.get('/', function (req, res) {
    console.log('get join url');
    res.sendFile(path.join(__dirname, '../../public/join.html'))
})

router.post('/', function (req, res) {
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var password = body.password;

    var sql = {email: email, name: name, pw: password}
    var query = connection.query('insert into user set ?', sql, function (err, rows) {
        if (err) throw err
            res.render('welcome.ejs', {'name': name, 'id': rows.insertId});
        })
});

module.exports = router;