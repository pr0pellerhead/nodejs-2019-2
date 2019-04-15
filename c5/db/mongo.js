var mongoose = require('mongoose');

const dbParams = {
    host: '127.0.0.1',
    port: '27017',
    username: '',
    password: '',
    dbname: 'school'
};

var init = () => {
    mongoose.connect(
        `mongodb://${dbParams.host}:${dbParams.port}/${dbParams.dbname}`, {useNewUrlParser: true}
    )
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error(err);
    });
}

module.exports = {
    init
}