const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./utils/db');



const authRoutes = require('./routes/auth');
const businessRoutes = require('./routes/business');
const reviewRoutes = require('./routes/review');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

 
// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/review', reviewRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
