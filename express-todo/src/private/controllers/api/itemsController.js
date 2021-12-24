var repository = require("../../services/itemRepository");

function callback (res) {
    return function (err, data) {
        res.json(err || data);
    };
}


module.exports = {
    create: function(req, res){
        //console.log(req.body);
        repository.create(req.body, callback(res));
    },
    
    read: function(req, res){
        repository.read(callback(res));
    },
    
    delete: function (req, res) {
        console.log(req.query);
        repository.delete(req.query.id, callback(res));
    }
};