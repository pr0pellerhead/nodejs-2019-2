var studentsModel = require('../models/students');

var SearchStudents = (req, res) => {
    generateQuery(req.query)
    .then(q => {
        console.log("generateQuery");
        return studentsModel.Search(q);
    })
    .then(data => {
        console.log("search");
        res.status(200).send(data);
    })
    .catch(err => {
        console.log("catch");
        res.status(500).send('ISE');
    });
}

var generateQuery = (qp) => {
    return new Promise((success, fail) => {
        q = {};
        for (let i in qp) {
            switch(i){
                case 'id': 
                    q._id = qp[i];
                break;
                case 'first_name': 
                    q.first_name = qp[i];
                break;
                case 'last_name': 
                    q.last_name = qp[i];
                break;
                case 'gpa': 
                    q.gpa = qp[i];
                break;
                case 'gpa_lt': 
                    q.gpa = {$lt: qp[i]};
                break;
                case 'gpa_gt': 
                    q.gpa = {$gt: qp[i]};
                break;
            }
        }
        return success(q);
    });
}

module.exports = {
    SearchStudents
}

// ?gpa=lt:10|gt:5&first_name=starts_with:A|end_with:b&order_by=first_name|desc