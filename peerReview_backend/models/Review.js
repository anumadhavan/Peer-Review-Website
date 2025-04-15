const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  revieweeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  reviewerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  dueDate: Date,
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Review', reviewSchema);
