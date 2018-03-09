var express = require('express')
  , app = express()
  , request = require('request')
  , http = require('http')
  , server = http.createServer(app)         //Server and createServer dos the Same Task
  , io = require('socket.io').listen(server);

server.listen(4000, function() {
    console.log('NodeJS Server Is Running On 4000');
});



var userArray = [];
var editArray =[];
var editModeArray = {};
var url = 'http://192.168.1.107';
io.sockets.on('connection', function (socket) {

   
    socket.on('newUser',function(data){
        socket['user_id'] = data['user_id'];
        socket['user_token'] = data['token'];
        //console.log(users);
    });
    
    socket.on('testnode',function(data){
        console.log(data);
    });
    
    socket.on('login-request',function (data) {
        console.log(data);
                var post_data ={contactemail:data.data.contactemail,contactPassword:data.data.contactPassword};
                request.post(
                  url+'/tSoft/get-user-login',
                  { json: post_data},
                  function (error, response, body) {
                    if (response.statusCode == 201) {
                        var userid =body.data[0]['id'];
                        var bodyData =body.data[0];
                        userArray.indexOf(userid) === -1 ? pushUser(bodyData,socket) : existUser(bodyData);
                    }else{
                        socket.emit('stop-login',{data:'incorrectCredential'});
                    }
                  }
              );
    });
    
    socket.on('addRemovedUser',function (data) {
        if(data.data.length != 0){
            if(userArray.indexOf(data.data) == -1){
                 userArray.push(data.data);
            }
        }
    })
    
    socket.on('logoutRequest',function (data) {
        var index = userArray.indexOf(data);
        if (index > -1) {
            userArray.splice(index, 1);
        }else{
            console.log('nothing to splice');
        }
        
    });
    
    socket.on('disconnect',function(){
        console.log('disconect event found');
        if(socket.userCredential){
            data = socket.userCredential;
            var index = userArray.indexOf(data);
            if (index > -1) {
                userArray.splice(index, 1);
                console.log(editModeArray[data]);
                delete editModeArray[socket.userCredential];
               
            }
        }
         console.log('disconect event a');
        console.log(editModeArray);
         console.log('disconect event b');
        
    });
    
    
    //this event is received when someone request for editing data
    socket.on('checking-editmode',function (data) {
        var editmod_id = data.data;
        editArray.indexOf(editmod_id) === -1 ? pushEdit(editmod_id,socket) : existEdit(editmod_id);
    });
    
    socket.on('end-editmode',function(data){
            var index = editArray.indexOf(data);
            if (index > -1) {
                editArray.splice(index, 1);
            }
            console.log('ender edit mode');
            console.log(editArray);
    });
    
    socket.on('editmode',function(data){
        //if the page is simply refreshed then we wont receive the editid
        if(data.editid){
            addEditForUser(data.userid,data.editid,data.type);
        }else{
            removeAllEditUser(data.userid);
        }
    });
    
    function addEditForUser(userid,editid,type){
        var alreadyedit=false;
        userArray.forEach(function(item){
            editModeArray[item] = editModeArray[item]||[];
            if(editModeArray[item].indexOf(editid) > -1){
                alreadyedit =true;
            }
        });
        console.log('alreadyedit--'+alreadyedit);
        console.log('index--'+editModeArray[userid].indexOf(editid));
        if(alreadyedit != true || editModeArray[userid].indexOf(editid) >-1){
            
             if(type == 'formRequest'){
                editModeArray[userid].push(editid);
                socket.emit('success-editmode',{userid:userid,editid:editid,type:type});
            }else if(type=='statusRequest'){
                 socket.emit('success-editmode',{userid:userid,editid:editid,type:type});
            }
            
           
        }
        else{
            socket.emit('fail-editmode');
        }
        console.log(editModeArray);
    }
    
    function removeAllEditUser(userid){
        delete editModeArray[userid];
        
        //make the user to clear the localstorage
        socket.emit('endEditMode')
        console.log('ended edit mode');
        console.log(editModeArray);
    }
    
    
    
    function pushEdit(data,socket) {
        socket.editCredential = data['id'];
        var index = editArray.indexOf(data);
        if (index > -1) {
            
        }else{
            editArray.push(data);
        }
        socket.emit('success-editmode',data);
    }
    
    function existEdit(data) {
        socket.emit('fail-editmode');
    }
    
   function pushUser(data,socket){
        socket.userCredential = data['id'];
        var userid =data['id'];
        var index = userArray.indexOf(userid);
        if (index > -1) {
        }else{
            userArray.push(userid);
        }
        socket.emit('success-login',data);
    }

    function existUser(data){
        console.log('you are already logged');
        socket.emit('stop-login',{data:'alreadylogged'});
    }


});



