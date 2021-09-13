var express = require('express');

var apiv1 = express.Router();
var authService = require('../services/auth.js')

apiv1.get('/login/browser', async function (req, res) {
	let v = req.query.id;

});

apiv1.post('/', async function(req, res) {
	try {


	} catch (e) {
		console.log(e)

	}
});
