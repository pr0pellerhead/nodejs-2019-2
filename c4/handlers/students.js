var studentModel = require('../models/students');
var validationSchema = require('../validators/student');
var validator = require('node-input-validator');

var getAll = (req, res) => {
    studentModel.getAllStudents()
        .then(data => {
            return res.status(200).send(data);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send('internal server error');
        });
}

var getOne = (req, res) => {
    if(req.params.id != undefined && req.params.id != ''){
        studentModel.getSingleStudent(req.params.id)
            .then(data => {
                return res.status(200).send(data);
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send('internal server error');
            });
    } else {
        return res.status(400).send('bad request');
    }
}

var add = (req, res) => {
    var v = new validator(req.body, validationSchema.addStudent);
    v.check()
    .then(matched => {
        if(matched) {
            return studentModel.addStudent(req.body)
        } else {
            throw new Error('Validation failed');
        }
    })
    .then(() => {
        return res.status(201).send('ok');
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send(v.errors);
    });
}

var remove = (req, res) => {
    if(req.params.id != undefined && req.params.id != ''){
        studentModel.deleteStudent(req.params.id)
            .then(() => {
                return res.status(204).send('ok');
            })
            .catch(err => {
                return res.status(500).send('internal server error');
            });
    } else {
        return res.status(400).send('bad request');
    }
}

var update = (req, res) => {
    if(req.params.id != undefined && req.params.id != ''){
        var valid = req.body.first_name != undefined
            && req.body.last_name != undefined
            && req.body.gpa != undefined;
        if(valid){
            studentModel.updateStudent(req.params.id, req.body)
                .then(() => {
                    return res.status(204).send('ok');
                })
                .catch(err => {
                    return res.status(500).send('internal server error');
                });
        } else {
            return res.status(400).send('bad request');
        }
    } else {
        return res.status(400).send('bad request');
    }
}

var patch = (req, res) => {
    if(req.params.id != undefined && req.params.id != ''){
        var valid = req.body.first_name != undefined
            || req.body.last_name != undefined
            || req.body.gpa != undefined;
        if(valid){
            studentModel.updateStudent(req.params.id, req.body)
                .then(() => {
                    return res.status(204).send('ok');
                })
                .catch(err => {
                    return res.status(500).send('internal server error');
                });
        } else {
            return res.status(400).send('bad request');
        }
    } else {
        return res.status(400).send('bad request');
    }
}

module.exports = {
    getAll,
    getOne,
    add,
    remove,
    update,
    patch
};