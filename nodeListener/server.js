var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)         //Server and createServer dos the Same Task
  , io = require('socket.io').listen(server);
  
server.listen(4000, function() {
    console.log('NodeJS Server Is Running On 4000');
});



// usernames which are currently connected to the chat
var usernames = {};

var usersid = {}; //we need this for storing user ID   --new
var allUser=[];

var users = [];
var usersActivity = [];
var onlineClient = {};

//current date and time of any country!
function currentDateTime(city, offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    currentdate = new Date(utc + (3600000*offset));
    var datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds(); 
                    return datetime;        
}

io.sockets.on('connection', function (socket) {
    
    
     socket.on('chkUser',function(data) { 
         var chk = users.indexOf(data.name);
          if(chk==(-1)) {
          var curdatetime = currentDateTime('India','5.5');
          users.push(data.name); 
          var data = {
              name:data.name, 
              msg:' joined chat on '+curdatetime+' !', 
              color:'text-success'
          };
          usersActivity.push(data);
          onlineClient[data.name] = socket; 
          }
		 
         socket.emit("chkUser", chk);   
     }); 
     
   socket.on('joined',function(data) { 
     var curdatetime = currentDateTime('India','5.5');
     socket.username = data.name;
     io.sockets.emit('totalOnlineUser',users, socket.username);
   });
    
    socket.on('sendprivatechat', function(sendername,key, msg, created_at){
                            var clientSocket = onlineClient[key];
                            if(clientSocket == null){
                            }else{
                                    clientSocket.emit('getprivatemsg', sendername, key, msg ,created_at);
                            }
    });
    

   socket.on('save-message', function (data) {
      key= data.data.to;
      console.log('Display ClientSocket');
      console.log(clientSocket);
      var clientSocket = onlineClient[key];
      if(clientSocket == null){
      }else{
        console.log('new msg sent from server');
      //  io.sockets.emit('new-message', { message: data });
        clientSocket.emit('new-message', { message: data });
      }
    });  

   socket.on('typing-event', function (data) {
      var key= data.data.to;
      var clientSocket = onlineClient[key];
      //console.log(clientSocket);
      if(clientSocket == null){
      }else{
      //  io.sockets.emit('new-message', { message: data });
        clientSocket.emit('user-typing', { message: data });
      }
    });  

   
    
        // when the client emits 'newuser', this listens and executes

    socket.on('newuser', function(data){

         // store the username in the socket session for this client
         socket.userinfo = data.userid;

         console.log('newuser function called');
            console.log(socket.userinfo);
            console.log('ecodcalled');
            // add the client's username to the global list
          //  usernames[usersid] = data.userid;
           // console.log('server'+usernames);
             allUser.push(data.userid);
             onlineClient[data.name] = socket; 
            //socket.broadcast.emit('updateuserlist', username);
            io.sockets.emit('updateuserlist', allUser);
            
            // echo to room 1 that a person has connected to their room
            //socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected to this room');
	});

    //get count of all users with their ids
    socket.on('totalOnlineUserCount', function(data){
      console.log('---------------u-------'+allUser);
        //console.log(data.updated_at);
        socket.userinfo = data.userid;
        io.sockets.emit('totalOnlineUserCount', allUser,socket.userinfo);
    });
    
 

        
        socket.on('userimage', function (sendername,key, filepath, file_name, created_at) {
			var clientSocket = onlineClient[key];
			if(clientSocket == null){
			}else{
			    clientSocket.emit('userimage', sendername, key, filepath, file_name, created_at);
		    }
          });
	

	
	socket.on('user image', function (msg) {
      console.log(msg);
		clientSocket.emit('getprivatemsg', sendername, key, msg);
      	socket.broadcast.emit('user image', socket.nickname, msg);
    });
	
	//check is the connection is still ok
	socket.on('set', function (status, callback) {
        console.log(status);
        callback('ok');
    });
	

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){

		// remove the username from global usernames list
		delete usernames[socket.username];
		io.sockets.emit('offileuser',socket.username);
        
		// update list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		// echo globally that this client has left
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
		//socket.leave(socket.room);
               // console.log(socket.username);
	});
    
});