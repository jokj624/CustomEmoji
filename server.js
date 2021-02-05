var express = require('express');
var app = express(); 

var http = require('http');
var server = http.createServer(app);

var socket = require('socket.io');

const upload = require('./multer');
var port = 4000;
var socketList = [];
app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
    fs.readFile('./public/index.html', (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
  })
server.listen(port, function() {
    console.log('Server On !');
});
var io = socket(server); 
io.on('connection', function(socket) {
    socketList.push(socket);
    console.log('User Join');
 
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
      // var file = './uploads' + req.file.filename;
      console.log(req.file)
      var data = req.file;
      res.send(data.location);
    } catch (error) {
      console.error(error);
      next(error);
    }
}); 

