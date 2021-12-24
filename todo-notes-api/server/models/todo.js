var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};


/*var newTodo = new Todo({
	text: 'Cook Dinner '
});


newTodo.save().then((doc) => {
	console.log('Saved Todo',doc);
}, (e) => {

	console.log('Unable to save todo');
});
*/

/*var newTodo = new Todo({
	text: 'Edit video',
	completed: false,
	completeAt: '12 PM'
});

newTodo.save().then((res) =>{
	console.log(JSON.stringify(res,undefined,2));
}, (e) =>{
	console.log('Unable to save todo');
});
*/

