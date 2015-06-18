var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

var userindex=1,
	nameused=[],
	nicknames={};
	
var server=require('./server');
app.get('/',function (req,res) {
	res.sendFile(__dirname+'/index.html');
});


io.on('connection',function(socket){
	
	server.assignGuestName(socket,userindex,nicknames,nameused);
	
	socket.on('chat',function (msg) {
		io.emit('chat',msg);
	});
	
	socket.on('disconnect',function () {
		console.log('user disconnect');
	});
});

http.listen(3000,function () {
	console.log('listening on 3000');
});