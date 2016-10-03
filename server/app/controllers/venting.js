var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Venting = mongoose.model('Venting');

// Set the prepended URL

module.exports = function(app) {
  app.use('/api/venting/', router);
};

// Create the routes

/**
 * Get all the venting objects
 */
router.get('/', function(req, res, next) {
  Venting.find({}, function(err, ventings) {
    if (err) res.send(err);
    else res.json(ventings);
  });
});

/**
 * Make a new venting object
 */
router.post('/', function(req, res, next) {
  Venting.create({
    message: req.body.message,
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
 * Get a single venting object by the given id
 */
router.get('/:id', function(req, res, next) {
  Venting.findById(req.params.id, function(err, venting) {
    if (err) res.send(err);
    else res.json(venting);
  });
});

/**
 * Update a venting object
 */
router.put('/:id', function(req, res, next) {
  Venting.findById(req.params.id, function(err, venting) {
    if (err) res.send(err);
    else {
      venting.message = req.body.message;
      venting.save(function(err) {
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
 * Delete a venting object
 */
router.delete('/:id', function(req, res, next) {
  Venting.remove({
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
