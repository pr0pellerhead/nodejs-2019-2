var data = require('../data/students');

var getAll = (req, res) => {
    res.send(data.students);
}

var getOne = (req, res) => {
    var id = req.params.id;
    if(data.students[id] != undefined){
        return res.send(data.students[id]);
    }
    return res.status(404).send('Not Found');
}

var add = (req, res) => {
    var valide = req.body.first_name != undefined
        && req.body.last_name != undefined
        && req.body.gpa != undefined;
    if(valide){
        data.students.push({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gpa: req.body.gpa
        });
        return res.status(201).send(req.body);
    }
    return res.status(400).send('Bad request');
}

var remove = (req, res) => {
    if(data.students[req.params.id] != undefined){
        data.students.splice(req.params.id, req.params.id + 1);
        return res.status('204').send('ok');
    }
    return res.status(400).send('Bad request');
}

var update = (req, res) => {
    var valide = req.body.first_name != undefined
        && req.body.last_name != undefined
        && req.body.gpa != undefined
        && data.students[req.params.id] != undefined;
    if(valide){
        data.students[req.params.id] = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gpa: req.body.gpa
        };
        return res.status('204').send('ok');
    }
    return res.status(400).send('Bad request');
}

var patch = (req, res) => {
    if(data.students[req.params.id] != undefined){
        if(req.body.first_name != undefined){
            data.students[req.params.id].first_name = req.body.first_name;
        }
        if(req.body.last_name != undefined){
            data.students[req.params.id].last_name = req.body.last_name;
        }
        if(req.body.gpa != undefined){
            data.students[req.params.id].gpa = req.body.gpa;
        }
        return res.status('204').send('ok');
    }
    return res.status(400).send('Bad request');
}

module.exports = {
    getAll,
    getOne,
    add,
    remove,
    update,
    patch
}