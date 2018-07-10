var express = require('express')();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var app = require('express');

express.set('view engine', 'ejs');
express.set('views', './app/views');

express.use(bodyParser.urlencoded({extended: true}));
express.use(expressValidator());
express.use(app.static('./app/public'));

consign().include('./app/routes')
        .then('./app/models')
        .then('./app/controllers')
        .then('config/dbConnection.js')
        .then('config/dbConnectionPG.js')        
        .into(express);

module.exports = express;