//ExpressJS Init
var express = require('express');
var app = express();

//for circular form fix
const util = require('util');

//DB Init
var db = require("./db_interface.js");


//Routes"
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/helloworld', function (req, res) {
	res.send("handled login proper");
});

app.get('/login', function(req, res) {
	if(db.get('login', {"user":req.param('uname')}).length > 0 &&
		db.get('login', {"pass":req.param("pass")}).length > 0){
		res.send(db.get('login', {"user": req.param('uname')}).length > 0);
	}else{
		res.redirect('/login.html');
	}
})

app.use(express.static('public'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
