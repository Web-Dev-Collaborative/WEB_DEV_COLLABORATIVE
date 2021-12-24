var lessMiddleware = require('less-middleware');
var bundleUp = require('bundle-up');
var settings = require('./settings');

module.exports = function(express, app){    
    bundleUp(app, settings.paths.config + '/assets', {
      staticRoot: settings.paths.public,
      staticUrlRoot:'/',
      bundle: false,
      minifyJs: true
    });
    
    app.use(lessMiddleware({
        src: settings.paths.public + "/less",
        dest: settings.paths.public + "/css",
        prefix: '/css',
        compress : true
    }));
    
    app.use(express.static(settings.paths.public));
};