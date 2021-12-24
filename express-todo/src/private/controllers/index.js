exports.index = function(req, res){
    res.render('index', { 'title': "My To Do List" });
};