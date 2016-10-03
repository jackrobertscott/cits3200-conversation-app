var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VentingSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
});

mongoose.model('Venting', VentingSchema);
