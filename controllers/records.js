var express = require('express');

var apiv1 = express.Router();

apiv1.get('/', function (req, res) {
	res.send('Hello from apiv1');
});

//app.use('/api/v1', require('./controllers/records.js'));

module.exports = apiv1;
