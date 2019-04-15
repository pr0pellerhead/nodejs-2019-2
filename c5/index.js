var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('./db/mongo');
var handlers = require('./handlers/auth');

mongo.init();

var api = express();
api.use(bodyParser.json());

api.post('/auth/register', handlers.register);
api.post('/auth/login', handlers.login);

api.listen(8080, err => {
    if(err){
        console.log('Cannot start start service', err);
    }
    console.log('Service successfully started on port 8080');
});