
//mongod.exe --dbpath /Users/admin/mongo-data
// C:\program files\mongodb\server\3.6\bin
//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');


	//insert new record
	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false 
	}, (err, result) => {
		if (err) {
		return console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	*/

	//insert users record
	/*db.collection('Users').insertOne({
		name: 'Chirag Shah',
		age: 22,
		location: 'Mumbai'
	}, (err, result) => {
		if (err) {
		return console.log('Unable to insert user', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id.getTimestamp());

	});
	*/



});
