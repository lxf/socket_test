//为新用户分配一个昵称
exports.assignGuestName=function (socket,userindex,nicknames,nameused) {
	var name='访客'+userindex;
	nicknames[socket.id]=name;
	socket.emit('f_assignGuest',{success:true,name:name});
	nameused.push(name);
	return userindex+1;
};