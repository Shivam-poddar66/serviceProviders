const express = require('express');
const Business = require('../models/Business'); // Import the Business model
const router = express.Router();

// @route   POST /businesses
// @desc    Add a new business
// @access  Protected (Add authentication middleware if required)
router.post('/', async (req, res) => {
  const { name, address, phone, email, category } = req.body;

  try {
    // Create a new business
    const newBusiness = new Business({
      name,
      address,
      phone,
      email,
      category,
    });

    // Save the business to the database
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Error adding business', error: error.message });
  }
});

// @route   GET /businesses
// @desc    Get all businesses
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Retrieve all businesses
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching businesses', error: error.message });
  }
});

// @route   GET /businesses/:id
// @desc    Get a single business by ID
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find business by ID
    const business = await Business.findById(id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json(business);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business', error: error.message });
  }
});
 
// @route   PUT /businesses/:id
// @desc    Update a business by ID
// @access  Protected (Add authentication middleware if required)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, email, category } = req.body;

  try {
    // Update the business
    const updatedBusiness = await Business.findByIdAndUpdate(
      id,
      { name, address, phone, email, category },
      { new: true } // Return the updated document
    );
    if (!updatedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Error updating business', error: error.message });
  }
});

// @route   DELETE /businesses/:id
// @desc    Delete a business by ID
// @access  Protected (Add authentication middleware if required)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the business
    const deletedBusiness = await Business.findByIdAndDelete(id);
    if (!deletedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json({ message: 'Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting business', error: error.message });
  }
});

// Export the router
module.exports = router;
