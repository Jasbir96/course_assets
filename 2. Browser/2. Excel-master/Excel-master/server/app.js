const express = require("express");
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const users = [];

app.use(express.static("public"));


io.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);

    socket.on("name" , (username)=>{
    let userObj = {
        id : socket.id ,
        username:username
    }
    users.push(userObj);
    console.log(users);
    })

    socket.on("cellClick"  , (e)=>{
        console.log(e);
        let userArray = users.filter(user => {
            return user.id == socket.id;
        })
        console.log(userArray);
        if(userArray.length){
            socket.broadcast.emit("cellClickEvent" , {username : userArray[0].username , ...e});
        }
    })

    socket.on("keypress" , (key) =>{
        let userArray = users.filter(user => {
            return user.id == socket.id;
        })
        console.log(userArray);
        if(userArray.length){
            socket.broadcast.emit("keypressEvent" , {username : userArray[0].username , key});
        }
    })
});
  

server.listen(4000 , ()=>{
    console.log("Server started at port 4000 !!!");
})
