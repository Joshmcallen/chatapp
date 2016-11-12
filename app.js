var express = require('express');  //express function
var app = express();               //express application

var rooms = require('./data/rooms.json');

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

app.get('/', function(req, res){
  res.render("index.jade", {title: "Home"});
});

app.get('/admin/rooms', function(req, res){


  res.render("rooms.jade", {
      title: "Admin Rooms",
      rooms: rooms
    });
});

app.get('/hello', function(req, res){
  res.render("rooms.jade");
});

app.listen(3000, function(){
  console.log('listening on port 3000!');
});
