'use strict';

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');

module.exports = function(app, config) {
  var env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env === 'development';

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(methodOverride());
  app.use(session({
    secret: 'supersecretsessionkeythatisforcits3200',
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  require('./passport.js')(passport);
  require('../app/routes.js')(app);

  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
      res.send(err);
    });
  }

  app.use(function(err, req, res) {
    res.send(err);
  });
};
