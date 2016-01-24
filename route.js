//ExpressJS Init
var express = require('express');
var app = express();

//DB Init
var db = require("./db_interface.js");


//Routes
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/helloworld', function (req, res) {
	res.send('SURPRISE MOTHERTFUCKER');
});

app.post('/login', function(req, res) {
	res.redirect("/helloworld");
})

app.use(express.static('public'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
