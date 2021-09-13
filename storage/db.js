const { MongoClient } = require("mongodb");
const mongodb = require('mongodb');
const uri = 'mongodb://localhost:27017';

async function run() {
	try {
		//		let db = new Database();
		console.log('start');
		//		db.crColl('mg');
		//await db.get('test');
	} catch(e) {
		console.log(e);
	} finally {
		console.log('end');
	}
}

class Database {

	constructor(databaseName) {
		if (databaseName) {
			this.dbName = databaseName;
		} else {
			this.dbName = 'test_db';
		}
	}

	async crColl(collectionName) {
		let _dbName = this.dbName;
		MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, db) {
			if (err) throw err;
			var dbo = db.db(_dbName);
			dbo.createCollection(collectionName, function (err) {
				if (err) throw err;
				db.close();
			});
		});
	}

	async add(myobj, collectionName) {
		let _dbName = this.dbName;
		MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, db) {
			if (err) throw err;
			var dbo = db.db(_dbName);
			console.log('inserting collection');
			dbo.collection(collectionName).update(myobj, myobj, {upsert: true});
			console.log('Database created');
		});
		return ;
	}

	async get(collectionName) {
		let _dbName = this.dbName;
		let p = new Promise((resolve, reject) => {
			MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, db) {
				if (err) throw err;
				var dbo = db.db(_dbName);
				var cursor = dbo.collection(collectionName).find({});
				let result = [];
				console.log('iterating over cursor');
				result = cursor.toArray();	
				console.log('stop iterating');
				console.log(result);
				resolve(result);
			});
		});
		return await p;
	}

	async deleteById(id, collectionName) {
		let _dbName = this.dbName;
		let p = new Promise((resolve, reject) => {
			MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, db) {
				if (err) throw err;
				var dbo = db.db(_dbName);
				dbo.collection(collectionName).deleteOne({_id: new mongodb.ObjectID(id) });
			});
		});
		return await p;
	}

	async getAllCollections() {
		let _dbName = this.dbName;
		let p = new Promise((resolve, reject) => {
			MongoClient.connect(uri, { useUnifiedTopology: true }, function (err, db) {
				if (err) throw err;
				var dbo = db.db(_dbName);
				let collections = 
					dbo.listCollections().toArray();
				resolve(collections);
			});
		});
		return await p;
	}

}

run().catch(console.dir);

module.exports = Database; 
