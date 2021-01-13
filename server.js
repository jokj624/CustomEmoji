/*
var express = require('express');
var app = express();

app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
})
    
app.get('/',(req,res)=>{
   res.send('Hello World!');
})
        
app.locals.jdata = require('./campuslife.json'); */
/*
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url === '/favicon.ico') {
      console.log('ignore');

    } else {
     // console.log(request.url);
     // response.end();
      if(url == '/'){
        url = '/customEmoji.html';
      }
  
      response.writeHead(200);
      response.end(fs.readFileSync(__dirname + url));
    }
   

});

app.listen(3000);

*/
var express = require('express');
var app = express(); 

var http = require('http');
var server = http.Server(app);

var socket = require('socket.io');
var io = socket(server); 

var port = 3000;

app.use(express.static(__dirname + '/public'));
/*app.use('/', function(req, resp) {
    resp.sendFile(__dirname + '/customEmoji.html');
});*/

io.on('connection', function(socket) {
    console.log('User Join');
});

server.listen(port, function() {
    console.log('Server On !');
});


