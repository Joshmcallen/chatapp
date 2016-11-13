var uuid = require("node-uuid");
var _ = require('lodash');
var rooms = require('./data/rooms.json');


module.exports = function(app) {
//VIEW CHATROOMS PAGE
app.get('/admin/rooms', function(req, res){
  res.render("rooms.jade", {
      title: "Admin Rooms",
      rooms: rooms
    });
});

//VIEW ADDROOMS PAGE
app.get('/admin/rooms/add', function(req, res){
  res.render("add");
});

//POST TO ADDROOMS PAGE
app.post('/admin/rooms/add', function(req, res){
  var room = {
    name: req.body.name,
    id: uuid.v4()
  };
  rooms.push(room);

  res.redirect("/admin/rooms");
});

//DELETE ROOMS
app.get('/admin/rooms/delete/:id', function(req, res){
    var roomId = req.params.id;

    rooms = rooms.filter(r => r.id !== roomId);

    res.redirect("/admin/rooms");
});

//VIEW EDIT ROOMS, prepopulate form with room name to edit
app.get('/admin/rooms/edit/:id', function(req, res){
  var roomId = req.params.id;

  var room = _.find(rooms, r=> r.id === roomId);
  if (!room){
    res.sendStatus(404);
    return;
  }

  res.render("edit", {room});
});

//POST TO EDIT ROOMS PAGE
app.post('/admin/rooms/edit/:id', function(req, res){
  var roomId = req.params.id;

  var room = _.find(rooms, r => r.id === roomId);
  if (!room){
    res.sendStatus(404);
    return;
  }

  room.name = req.body.name;

  res.redirect("/admin/rooms");
});

}
