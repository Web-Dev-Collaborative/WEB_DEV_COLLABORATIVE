var mongoose = require("mongoose");

module.exports = mongoose.Schema({
    text: {type: String, require: true},
    priority: {type: Number, require: true}
});