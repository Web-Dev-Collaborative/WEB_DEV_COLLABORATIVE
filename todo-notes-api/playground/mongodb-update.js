//mongod.exe --dbpath /Users/admin/mongo-data
// C:\program files\mongodb\server\3.6\bin
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	//each arg is object
	db.collection('Users').findOneAndUpdate(
	{
		_id : new ObjectID("5a6969c16705a2029c4efb4e")
	},{
		$set: { 
				location : 'Pune'
		},
		$inc: {
				age : 1
		}
	},{
		returnOriginal : false
	}).then( (res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete todos', err);
	});

 

	/*db.collection('Todos').deleteOne({textanother: 'Learn'}).then( (res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete todos', err);
	});*/

	/*db.collection('Todos').findOneAndDelete({textanother: 'Learn'}).then( (res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete todos', err);
	});*/

	

});
