const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ['admin', 'employee'], default: 'employee' }
});

module.exports = mongoose.model('Employee', employeeSchema);
