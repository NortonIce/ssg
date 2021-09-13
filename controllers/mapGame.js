var express = require('express');

var apiv1 = express.Router();
var storage = require('../storage/db.js');

apiv1.get('/', function (req, res) {
	res.send('Hello from mini game api');
});

apiv1.get('/add', function (req, res) {
	try {
		let id = req.query.id;
		let st = new storage('mapGame');
		st.add({id: id}, 'mg');
		res.send('mini game add ' + id);
	} catch (e) {
		console.log(storage);
		console.log(e);
		res.send('error');
	}
});

apiv1.get('/get', async function (req, res) {
	try {
		let st = new storage('mapGame');
		res.send(await st.get('mg'));
	} catch (e) {
		console.log(e);
		res.send('error');
	}
});

apiv1.post('/add', async function (req, res) {
	try {
		let st = new storage('mapGame');
		console.log('req body', req.body);
		let name = req.body.name;
		await st.add({ name: name }, 'mg');
		res.send('ok');
	} catch (e) {
		res.send('error');
		console.log(e);
	}
});

apiv1.post('/place', async function (req, res) {
	try {

	} catch (e) {


	}
});

apiv1.delete('/del', function (req,res) {
	try {
		if (req.query.id == undefined) {
			res.send('id is undefined');
			return;
		}
		let st = new storage('mapGame');
		st.deleteById(req.query.id, 'mg');
		res.send('ok');
	} catch (e) {
		console.log(e);
	}
});

apiv1.get('/collections', async function (req, res) {
	try {
		let st = new storage('mapGame');
		res.send(await st.getAllCollections());
	} catch (e) {
		console.log(e);
	}
});

module.exports = apiv1;

