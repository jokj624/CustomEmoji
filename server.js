var express = require('express');
var app = express(); 

var http = require('http');
var server = http.Server(app);

var socket = require('socket.io');
var io = socket(server); 

var port = 3000;
var socketList = [];
app.use(express.static(__dirname + '/public'));
io.on('connection', function(socket) {
    socketList.push(socket);
    console.log('User Join');
 
    socket.on('SEND', function(msg) {
        console.log(msg);
        socketList.forEach(function(item, i) {
            console.log(item.id);
            if (item != socket) {
                item.emit('SEND', msg);
            }
        }); 
    });

    socket.on('Image', function(msg){
        console.log(msg);
        socket.emit(msg);
    });
 
    socket.on('disconnect', function() {
        socketList.splice(socketList.indexOf(socket), 1);
    });
});
 
server.listen(port, function() {
    console.log('Server On !');
});
