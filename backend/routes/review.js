const express = require('express');
const Review = require('../models/Review'); // Import the Review model
const router = express.Router();

// @route   POST /reviews
// @desc    Add a new review
// @access  Public or Protected (Based on your requirements)
router.post('/', async (req, res) => {
  const { business, user, rating, reviewText } = req.body;

  try {
    // Create a new review
    const newReview = new Review({
      business,
      user,
      rating,
      reviewText,
    });

    // Save the review to the database
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error: error.message });
  }
});

// @route   GET /reviews/:businessId
// @desc    Get reviews for a specific business
// @access  Public
router.get('/:businessId', async (req, res) => {
  const { businessId } = req.params;

  try {
    // Find reviews for the specified business
    const reviews = await Review.find({ business: businessId }).populate('user', 'name email'); // Assuming User model has 'name' and 'email'
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
});

// @route   DELETE /reviews/:id
// @desc    Delete a review by ID
// @access  Protected (Add authentication middleware as needed)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the review
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error: error.message });
  }
});

// Export the router
module.exports = router;
