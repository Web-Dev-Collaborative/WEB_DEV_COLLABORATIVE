var mongoose = require('mongoose');
var schema = require("../models/schemas/item");
var Model = mongoose.model('Item', schema);
var db;

mongoose.connect('mongodb://127.0.0.1/items');
db = mongoose.connection;
db.on('error', function () {
    console.log("Error connecting to db");
});


module.exports = {
    'create': function (itemData, callback) {
        var item = new Model(itemData);
        item.save(callback);
    },

    'read': function (callback) {
        Model.find(callback);
    },

    'update': function () {

    },

    'delete': function (id, callback) {
        Model.remove({ "_id": id }, callback);
    }
};