var express = require('express');

var apiv1 = express.Router();

apiv1.get('/', function (req, res) {
	res.send('Hello from apiv1');
});

apiv1.get('/add', function (req, res) {
	res.send('add');
});

apiv1.get('/get', function (req, res) {
	res.send('get');
});



module.exports = apiv1;
