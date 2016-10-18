'use strict';

var passport = require('passport');
var exports = module.exports = {};

exports.authenticate = function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) return res.send(err);
    if (!user) return res.send({
      error: 'User not logged in.',
    });
    next(); // success
  }).apply(null, arguments);
};
