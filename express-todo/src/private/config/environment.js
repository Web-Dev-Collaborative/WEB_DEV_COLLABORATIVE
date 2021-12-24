var express = require('express');
var path = require('path');
var less = require('less-middleware');
var settings = require('./settings');

module.exports = function(app){
    // all environments
    app.set('port', settings.port);
    app.set('views', settings.paths.views);
    app.set('view engine', 'jade');
    app.set('view options', { layout: true });
    app.set('env', settings.env);
    
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(less({ src: settings.paths.public}));
    
    
    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }
};
