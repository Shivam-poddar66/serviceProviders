const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace the URI with your MongoDB connection string
    const conn = await mongoose.connect('mongodb://localhost:27017/businessDirectory', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
