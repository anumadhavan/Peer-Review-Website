const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
  const reviews = await Review.find().populate('revieweeId reviewerIds');
  res.json(reviews);
});

// Create a new review
router.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
});

// Assign reviewers to a review
router.put('/:id/assign', async (req, res) => {
  const { reviewerIds } = req.body;
  const updatedReview = await Review.findByIdAndUpdate(
    req.params.id,
    { reviewerIds },
    { new: true }
  );
  res.json(updatedReview);
});

module.exports = router;
