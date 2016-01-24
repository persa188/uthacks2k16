var db = require("./db_interface.js");

/*
 *Devices db:
 *
 * mac address
 * ip address
 * name
 */
db.insert('devices', {mac:"80:19:34:31:b3:57", ip:"192.168.0.102", name:"SELF"});
console.log(db.get_items("devices"));

//db.makedb("devices", "{}");

console.log(db.get("login", {"name":"test"}));

// console.log(db.get_items('login'));
// db.makedb("login", {"user": "test", "pass": "test"});