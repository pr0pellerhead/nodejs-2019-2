var userModel = require('../models/auth');
var userValidator = require('../validators/auth');
var validator = require('node-input-validator');
var bcrypt = require('bcrypt-nodejs');

var register = (req, res) => {
    var v = new validator(req.body, userValidator.addUser);
    v.check()
    .then(matched => {
        if(matched && req.body.password == req.body.password1){
            return userModel.getUserByEmail(req.body.email);
        }
        throw new Error('Bad data');
    })
    .then(data => {
        if(data){
            throw new Error('User already exists');
        }
        // return userModel.addUser(req.body);
        return userModel.addUser({
            full_name: req.body.full_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });
    })
    .then(() => {
        res.status(200).send('ok');
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Internal Server Error');
    });  
}

var login = (req, res) => {
    var v = new validator(req.body, userValidator.loginUser);
    v.check()
    .then(matched => {
        if(matched){
            return userModel.getUserByEmail(req.body.email);
        }
        throw new Error('Validation failed');
    })
    .then(data => {
        if(data){
            bcrypt.compare(req.body.password, data.password, function(err, r) {
                if(r){
                    res.status(200).send('ok');
                } else {
                    res.status(400).send('Bad Request');
                }
            });
            return;
        }
        throw new Error('User does not exist');
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Internal Server Error');
    });
}

module.exports = {
    register,
    login
};