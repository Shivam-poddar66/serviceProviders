const mongoose = require('mongoose');

// Define the Review schema
const reviewSchema = new mongoose.Schema(
  {
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business', // Reference to the Business model
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5, // Ensure rating is between 1 and 5
    },
    reviewText: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces
      minlength: 5, // Minimum length for the review text
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Review model
module.exports = mongoose.model('Review', reviewSchema);
