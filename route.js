//ExpressJS Init
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

//DB Init
var db = require("./db_interface.js");

//Deps
var wol = require('wake_on_lan');

//Routes
app.post('/login', function(req, res) {
	res.redirect("/helloworld");
})

//Devices
app.post('/addDevice', function(req, res) {
	var m = req.param('mac');
	var i = req.param('ip');
	var n = req.param('name');

	db.insert('devices', {mac: m, ip: i, name: n});
})

app.post('/sendWOL', function(req, res) {
	var mac = req.param('mac');
	wol.wake(mac);
})

app.get('/showDevices', function(req, res) {
	res.send(db.get_items("devices"));
})

app.get('/test', function(req, res) {
	res.render('test', {test: "tedsghk75647trfdghrtyuyfgnvgcbjnm hj jgh lfdhgkjfd"});
})

app.use(express.static('public'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
