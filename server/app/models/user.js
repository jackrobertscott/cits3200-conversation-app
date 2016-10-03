'use strict';

var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Create User schema
 */
var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
});

/**
 * Generate a hash for password
 */
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * Validate a password
 */
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

/**
 * Export the User model
 */
module.exports = mongoose.model('User', UserSchema);
