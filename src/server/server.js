var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '../client')));
app.use('/vendor', express.static(__dirname + '/../../vendor'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require('./Contacts/contacts')(app);

app.get('/', function (req, res) {
    res.render('index.html');
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('My Application running at http://%s:%s', host, port)
})
