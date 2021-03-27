const { MongoClient } = require("mongodb");

const uri = 'mongodb://localhost/MyDB';

const client = new MongoClient(uri, {
	useUnifiedTopology: true
})

async function run() {
	try {
		console.log('start');
		await client.connect();
		console.log('connected');
		const database = client.db('test');
		const movies = database.collection('movies');
		const doc = { name: "Red", town: "kanto" };
	    const result = await movies.insertOne(doc);
	} finally {
		console.log('end');
		await client.close();
	}
}

run().catch(console.dir);

console.log(process.argv);
