var express = require('express');  //express function
var app = express();               //express application
var bodyParser = require('body-parser');


app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(bodyParser.urlencoded({ extended: true}));

//VIEW INDEX PAGE
app.get('/', function(req, res){
  res.render("index.jade", {title: "Home"});
});


var admin = require('./admin');
admin(app);

app.listen(3000, function(){
  console.log('Chat app listening on port 3000!');
});
