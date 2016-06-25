var data = require('./../../DataBase/Data');

var getStudents = function (req, res) {
    res.send(data.Students)
}

module.exports = function (app) {
    app.get('/api/getStudents', getStudents);
}