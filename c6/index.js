var ws = require("nodejs-websocket");
var express = require("express");

// kreiranje na websocket server
var server = ws.createServer(function (conn) { // "conn" e konekcijata na korisnikot koj se zakachuva na serverot
    conn.on("text", function (str) {
        var msg = JSON.parse(str); // msg: {type: "register|text", text: "..."}
        switch(msg.type){
            case 'register':
                conn.screenname = msg.message;
                server.connections.forEach(function (c) {
                    c.sendText(msg.message + ' has entered the chat');
                });         
            break;
            case 'text':
                server.connections.forEach(function (c) {
                    c.sendText(conn.screenname + ': ' + msg.message);
                });
            break;
        }
    });

    conn.on("close", function (code, reason) {
        console.log("Connection closed");
    });

    conn.on("error", function(err){
        console.log(err);
    });
}).listen(8081);

app = express();
app.use(express.static('public'))
app.listen(8080, (err) => {
    if(err){
        return console.error(err);
    }
    return console.log('Web Server started on port 8080');
});