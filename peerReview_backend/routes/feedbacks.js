const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Get all feedbacks
router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find().populate('reviewId reviewerId');
  res.json(feedbacks);
});

// Submit feedback
router.post('/', async (req, res) => {
  const {reviewId} = req.body;
  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    return res.status(400).json({ message: 'Invalid reviewId' });
  }
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.status(201).json(feedback);
});

// Get feedbacks for a specific review
router.get('/review/:reviewId', async (req, res) => {
  const feedbacks = await Feedback.find({ reviewId: req.params.reviewId });
  res.json(feedbacks);
});

module.exports = router;
