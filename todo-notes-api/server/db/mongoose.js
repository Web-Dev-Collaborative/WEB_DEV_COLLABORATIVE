var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//mongodb://localhost:27017/TodoApp
//mongodb://chirag:chirag@ds117888.mlab.com:17888/node-api-db
module.exports = {mongoose};

