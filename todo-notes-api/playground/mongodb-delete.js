//mongod.exe --dbpath /Users/admin/mongo-data
// C:\program files\mongodb\server\3.6\bin
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	/*db.collection('Todos').deleteMany({text: 'Its is Thursday'}).then( (res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete todos', err);
	});*/

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

	/*
	db.collection('Users').deleteMany({ name: 'ASD'}).then( (res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete todos', err);
	});

	db.collection('Users').deleteOne({name: 'ZXC'}).then( (res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete todos', err);
	});*/

	db.collection('Users').findOneAndDelete({name: 'Chirag Shah'}).then( (res) => {
		console.log(res);
	}, (err) => {
		console.log('Unable to delete todos', err);
	});

});
