'use strict';

var userController = require('./controllers/user.js');
var ventingController = require('./controllers/venting.js');
var Auth = require('../auth.js');

module.exports = function(app) {
  app.post('/api/login', Auth.authenticate, function(req, res) {
    res.json({
      message: 'Successfully logged in.'
    });
  });
  app.use('/api/user', userController);
  app.use('/api/venting', ventingController);
};
