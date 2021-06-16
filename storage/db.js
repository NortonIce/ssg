const { MongoClient } = require("mongodb");
const uri = 'mongodb://mongodb0.example.com:27017';


const mongoClient = new MongoClient(uri, {
	useUnifiedTopology: true
});

async function run() {
	try {
		console.log('start');
		//let n = await get();
		//console.log('get result', n);
		add([{name: 'Norton'}]);

	} catch(e) {
		console.log(e);
	} finally {
		console.log('end');
		await mongoClient.close();
	}
}

async function add(users) {
	let p = new Promise((resolve, reject) => {
		mongoClient.connect(function (err, client) {
			const db = client.db('userdb');
			const collection = db.collection('users');
			collection.insertMany(users, function (err, results) {
				console.log(results);
				resolve(results);
				client.close();
			});
		});
	});
	return await p;
}

async function get() {
	let p = new Promise((resolve, reject) => {
		mongoClient.connect(function (err, client) {
			const db = client.db('userdb');
			const collection = db.collection('users');
			collection.find().toArray(function (err, results) {
				resolve(results);
				console.log(err);
				console.log(results);
				client.close();
			});
		});
	});
	return await p;
}

run().catch(console.dir);

