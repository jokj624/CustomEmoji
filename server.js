const express = require('express');
const socket = require('socket.io');
const upload = require('./multer');

const app = express(); 
app.set('port', process.env.PORT || 4000);

const http = require('http');
const server = http.createServer(app);
const io = socket(server); 

let socketList = [];

app.use(express.static(__dirname + '/public'));

server.listen(4000, function() {
    console.log('Server On !');
});
 
const names = ['정아', '시원'];
let user = 0;
io.on('connection', function(socket) {
    socketList.push(socket);
    console.log('User Join');
    socket.emit('first', names[user]);
    user++;
    if(user==2) user=0;

    socket.on('SEND', function(msg) {
        socketList.forEach(function(item, i) {
            console.log(item.id);
            if (item != socket) {
                item.emit('SEND', msg);
            }
        }); 
    });
    socket.on('image', (data)=>{
        socketList.forEach(function(item, i) {
            console.log(item.id);
            if (item != socket) {
                item.emit('image', data);
            }
        }); 
    })
    socket.on('disconnect', function() {
        socketList.splice(socketList.indexOf(socket), 1);
    });
});
app.post( '/image', upload.single("image"), function(req, res, next) {
    try {
      console.log(req.file)
      var data = req.file;
      res.send(data.location);
    } catch (error) {
      console.error(error);
      next(error);
    }
}); 

