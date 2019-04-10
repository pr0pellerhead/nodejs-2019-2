var express = require('express');
var mongo = require('./db/mongo');
var students = require('./handlers/students');
var bodyParser = require('body-parser');

mongo.init();
var api = express();
api.use(bodyParser.json());

// routes
api.get('/students', students.getAll);
api.get('/students/:id', students.getOne);
api.post('/students', students.add);
api.delete('/students/:id', students.remove);
api.put('/students/:id', students.update);
api.patch('/students/:id', students.patch);

api.listen(8080, err => {
    if(err){
        return console.error(err);
    }
    console.log('Server started on port 8080');
});

