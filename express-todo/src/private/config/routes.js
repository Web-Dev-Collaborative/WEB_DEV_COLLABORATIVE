var routes = require('../controllers/index');
var api = require('../controllers/api/itemsController');

module.exports = function (app) {
    app.use(app.router);

    app.get('/', routes.index);
    app.post('/api/items', api.create);
    app.get('/api/items', api.read);
    app.delete('/api/items', api.delete);
};