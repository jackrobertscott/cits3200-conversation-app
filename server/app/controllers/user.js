'use strict';

var express = require('express');
var router = module.exports = express.Router();
var User = require('../models/user.js');

/**
 * Get all the user objects
 */
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    else res.json(users);
  });
});

/**
 * Make a new user object
 */
router.post('/', function(req, res) {
  User.create({
    email: req.body.email,
    password: req.body.password,
  }, function(err) {
    if (err) res.send(err);
    else {
      res.json({
        message: 'Successfully created!'
      });
    }
  });
});

/**
 * Get a single user object by the given id
 */
router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.send(err);
    else res.json(user);
  });
});

/**
 * Update a user object
 */
router.put('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.send(err);
    else {
      user.email = req.body.email;
      user.password = req.body.password;

      user.save(function(err) {
        if (err) res.send(err);
        else {
          res.json({
            message: 'Successfully updated!'
          });
        }
      });
    }
  });
});

/**
 * Delete a user object
 */
router.delete('/:id', function(req, res) {
  User.remove({
    _id: req.params.id,
  }, function(err) {
    if (err) res.send(err);
    else {
      res.json({
        message: 'Successfully deleted!'
      });
    }
  });
});
