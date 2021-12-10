const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a6b17b94798b8a4056fb23c';
var userId = '5a6acc46b1922af815f2a852';


if(!ObjectID.isValid(id)){
	console.log('Invalid todo id');
}

if(!ObjectID.isValid(userId)){
	console.log('Invalid user id');
}
/*Todo.find({
	_id: id
}).then((todos) =>{
	console.log(todos);
});

Todo.findOne({
	_id: id
}).then((todo) =>{
	console.log(todo);
});*/

Todo.findById(id).then((todo) =>{
	if(!todo)return console.log('Id not found');

	console.log(todo);
}).catch((e)=> console.log(e));


User.findById(userId).then((user) =>{
	if(!user)return console.log('Id not found');

	console.log(JSON.stringify(user, undefined, 2));
}).catch((e)=> console.log(e));