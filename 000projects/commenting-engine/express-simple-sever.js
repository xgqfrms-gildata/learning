/*

https://github.com/xgqfrms-GitHub/webgeeker 

dist 

simple-static-web-server


G:\wwwRoot\learning\000projects\Express-Restful-API\app


$ node express-simple-sever.js

*/


const express = require('express');
const app = express();


let port = 3000;

/*
app.get('/', function(req, res){
    res.send('<h1><mark>hello world</mark></h1>');
});

app.get('/', function(req, res){
    res.sendFile('./index.html');
});

*/

// TypeError: path must be absolute or specify root to res.sendFile

app.get('/', function(req, res){
    res.sendFile('http://localhost:3000/dist/index.html');
});

// bugs ???


app.listen(port, function(){
    console.log(`app listening on ${port} !`);
});






