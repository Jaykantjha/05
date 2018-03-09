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
var visitor={};

var usersid = {}; //we need this for storing user ID   --new
var allUser=[];
var allVisitor=[];

var users = [];
var usersActivity = [];
var onlineClient = {};
var onlineVisitor = {};

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
    
    //called first time 
   
    socket.on('newuser', function(data){    console.log('Agent Connected');
       console.log(data);
        usersActivity.push(data);
        onlineClient[data.userid] = socket; 
        socket.username = data.userid;
        allUser.push(data.userid);
        io.sockets.emit('totalOnlineVisitor', allVisitor);  //emit visitor list
        io.sockets.emit('totalOnlineUserCount', allUser);   //emit agent list
    });
    
    //function is call when send message request come
     socket.on('save-message', function (data) {    
      console.log('save-message request came for'+data.data.receiver_id);
      key= data.data.receiver_id;
      var clientSocket = onlineClient[key];
      if(clientSocket == null){
      }else{
        console.log('new msg sent from server to '+key);
        clientSocket.emit('new-message', { message: data });
      }
    });
    
    //function is call when it reaceive typing event
    socket.on('typing-event', function (data) {
      var key= data.data.to;
      var clientSocket = onlineClient[key];
      if(clientSocket == null){
      }else{
        clientSocket.emit('user-typing', { message: data });
      }
    }); 
    
     //get count of all users with their ids
    socket.on('totalOnlineUserCount', function(data){
      console.log('---------------u-------'+allUser);
        //console.log(data.updated_at);
        socket.userinfo = data.userid;
        io.sockets.emit('totalOnlineUserCount', allUser,socket.userinfo);
    });
    
    
    // when the user disconnects.. perform this
	socket.on('disconnect', function(){
            console.log('disconnect event found');
            //when agent disconnect
            var array = allUser;
//            console.log(allUser);
            var index = array.indexOf(socket.username);
            if (index > -1) {
                array.splice(index, 1);
            }
            //console.log(allUser);
            
            
            //when visitor disconnect
//            console.log('====Visitor Offline======');
//            console.log(socket.visitor);
            console.log('====Visitor Offline======');
            var arrayVis = allVisitor;
            var indexVis = arrayVis.indexOf(socket.visitor);
            if (indexVis > -1) {
                arrayVis.splice(indexVis, 1);
            }
//            console.log('====Visitor Offline======');
            console.log(socket.visitor);
//            
            io.sockets.emit('disconectedUser',socket.visitor);
            io.sockets.emit('totalOnlineVisitor', allVisitor);  //for visitor
            
            io.sockets.emit('totalOnlineUserCount', allUser);   //for agent
	});
        
        
    //for Visitor
        socket.on('new_visitor',function(data){   
        console.log('+++++++++NEW VISITOR++++++++++++++++');
        onlineVisitor[data.websiteData] = socket; 
        socket.visitor = data.websiteData;
        
        var arrayVis = allVisitor;
        var indexVis = arrayVis.indexOf(socket.visitor);
            if (indexVis > -1) {
            }else{
                allVisitor.push(data.websiteData);
            }
        
        
        
       
       io.sockets.emit('thisVisitor', data.websiteData);
       io.sockets.emit('appVisitor', data.websiteData);
       console.log('new list of visitor emitted to chat component by ----visitorNewList');
        io.sockets.emit('visitorNewList', allVisitor);  //for visitor
       
       console.log(allVisitor);
        //console.log(allVisitor);
        //io.sockets.emit('totalOnlineVisitor', {'allVisitor':allVisitor});
//        io.sockets.emit('totalOnlineVisitor', allVisitor);
       // io.sockets.emit('totalVisitor', allVisitor);
        });
        
        socket.on('visitorList',function(){
            io.sockets.emit('totalVisitor', allVisitor);
        });
        
         //send first message to visitor
        socket.on('send-message',function(data){
            
                console.log(data);
              //   console.log(onlineVisitor);
                key= data.data.receiverid;
                var clientSocket = onlineVisitor[key];
                console.log('get client socket');
               
                if(clientSocket == null){
                }else{
                  console.log('new msg sent from server to '+key);
                  clientSocket.emit('new-message', { message: data });
                }
        });
        
        
        socket.on('vivitorsList',function(){
           // console.log('----------------------------------------------------');
            io.sockets.emit('totalOnlineVisitor', allVisitor);
        });
        
        //used at visitor component to be called one time from there when page reload
         socket.on('totalVisitor',function(){
            console.log(allVisitor);
            io.sockets.emit('totalVisitor', allVisitor);
        });
        
        
        //to get visitor page credential
        socket.on('visitor_visit',function(data){
            console.log('visitor_visit');
            console.log(data);
            console.log('visitor_visit');
            //  commented as we dont have website url with pages structur where widget can stand in corner
             io.sockets.emit('updatePageViewing', data);   
           //  io.sockets.emit('totalOnlineVisitor', allVisitor);
        });
        
        socket.on('visitorDepartment',function(data){
            io.sockets.emit('visitorDepartment', data);   
        });
        
          //function is call when visitor send message request to agent
     socket.on('send-msgtoagent', function (data) {    
      console.log('send-msgtoagent request came for'+data.data.receiver_id);
      key= data.data.receiver_id;
      var clientSocket = onlineClient[key];
      //console.log(clientSocket);
      if(clientSocket == null){
      }else{
        console.log('new msg sent send-msgtoagent to '+key);
        clientSocket.emit('agentVisitormessage', { message: data });
      }
    });
    
    //when the agent want to end chat with the visitor
    socket.on('end-widget',function(data){
                console.log('end-widget request found');
                key = data.data;
                var clientSocket = onlineVisitor[key];
                console.log(clientSocket);
                if(clientSocket == null){
                }else{
                  console.log('thanks');  
                  clientSocket.emit('end-widget');
                }
                
                var arrayVis = allVisitor;
                var indexVis = arrayVis.indexOf(key);
                if (indexVis > -1) {
                    arrayVis.splice(indexVis, 1);
                }
                //io.sockets.emit('disconectedUser',key);
                io.sockets.emit('totalOnlineVisitor', allVisitor);  //for visitor
    });
    
    //when visitor closes the chat
    socket.on('visitor-left',function(data){
        
            key = data.websiteData;
            var arrayVis = allVisitor;
            var indexVis = arrayVis.indexOf(key);
            if (indexVis > -1) {
                arrayVis.splice(indexVis, 1);
            }
            io.sockets.emit('disconectedUser',socket.visitor);
            io.sockets.emit('totalOnlineVisitor', allVisitor);  //for visitor
    });
        
       
        
        

        
        
        

   
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
        // when the client emits 'newuser', this listens and executes



	

	
    
});