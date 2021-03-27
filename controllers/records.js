var express = require('express');

var apiv1 = express.Router();

apiv1.get('/', function (req, res) {
	res.send('Hello from apiv1');
});

module.exports = apiv1;
