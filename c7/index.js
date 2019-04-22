var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./handlers/students');
var db = require('./db/mongo');

db.init();

var api = express();
api.use(bodyParser.json());

api.get('/students/search', handlers.SearchStudents)

api.listen(8080, err => {
    if(err){
        throw new Error("Could not start server");
    } else {
        console.log('Server started on port 8080');
    }
});