const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//removes all record from db
/*Todo.remove({}).then((res) =>{
	console.log(res);
});
*/

Todo.findOneAndRemove('5a6b2767fbae4402ecb73e04').then((res) =>{
	console.log(res);
});

//findByIdAndRemove() same as findoneandremove
//5a6cc73fae873f0dbf5f2773