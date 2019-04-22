var mongoose = require('mongoose');

var student = mongoose.model(
    'students',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        gpa: Number
    })
);

var Search = (s) => {
    return new Promise((success, fail) => {
        student.find(s, (err, data) => {
            if(err){
                console.log(err);
                return fail(err);
            }
            console.log(data);
            return success(data);
        });
    });
}

module.exports = {
    Search
};
