const express = require('express');
const app = express();
const port = 8000;

// set up server with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('Chat server is listening on port 5000');


app.use(express.static('./assets'));

//use ejs & set up view engine
app.set('view engine','ejs');
app.set('views','./views');


// use express router
app.use('/', require('./routes'));

//set express 
app.listen(port,function(err){
    if(err){
        console.log('Error in starting Server :',err);
    }
    console.log(`Server is Running on port : ${port}`);
});