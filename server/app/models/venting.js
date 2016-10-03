var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Create Venting schema
 */
var VentingSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
});

/**
 * Export the Venting model
 */
module.exports = mongoose.model('Venting', VentingSchema);
