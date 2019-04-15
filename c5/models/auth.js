var mongoose = require('mongoose');

var user = mongoose.model(
    'users',
    new mongoose.Schema({
        full_name: String,
        email: String,
        password: String
    })
);

var addUser = (data) => {
    return new Promise((success, fail) => {
        var u = new user(data);
        u.save(err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
}

var getUserByEmail = (email) => {
    return new Promise((success, fail) => {
        user.findOne({email: email}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        })
    });
}

module.exports = {
    addUser,
    getUserByEmail
}