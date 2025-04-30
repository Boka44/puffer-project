require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const rateRoutes = require('./api/routes/rateRoutes');
const rateFetcher = require('./utils/rateFetcher');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/rates', rateRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    // Start rate fetcher
    rateFetcher.start();
}); 