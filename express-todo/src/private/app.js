var express = require('express');
var http = require('http');
var bundles = require('./config/bundles');
var routes = require('./config/routes');
var environment = require('./config/environment');
var app = express();

environment(app);
routes(app);

http.createServer(app).listen(app.get('port'));

app.configure(function(){
    bundles(express, app);    
});