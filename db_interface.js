var TAFFY = require('node-taffydb').TAFFY;

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

//localStorage = new LocalStorage('./scratch');
function makedb(name, data){
    var db = TAFFY(data);
    db.store(name);
    //console.log(db().get());
}

function insert(dbname, item){
    db = TAFFY(localStorage.getItem("taffy_"+dbname));
    db.insert(item, false);
    db.store("p");
}

function get_items(dbname){
    db = TAFFY(localStorage.getItem("taffy_"+dbname));
    return db().get();
}

function get(dbname, param){
    db = TAFFY(localStorage.getItem("taffy_"+dbname));
    return db().filter(param).get();
}

//makedb("ninthdb", {record:1,text:"example"});
//insert('p', {record:2,text:"example2"});
//console.log(get_items('p'));
//console.log(get('p', {'record': 1}));
//makedb('ninthlogin', {uname: "hacker", "pw": "hacker123"});
//console.log(get_items('ninthlogin'));