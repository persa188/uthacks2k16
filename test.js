var db = require("./db_interface.js");

console.log(db.get("login",{"user": req.param('uname')}));
// console.log(db.get_items('login'));
// db.makedb("login", {"user": "test", "pass": "test"});