const express = require('express');
const router = express.Router();
const rateController = require('../controllers/rateController');

// Get all rates
router.get('/', rateController.getAllRates);

// Get latest rate
router.get('/latest', rateController.getLatestRate);

// Get historical rates
router.get('/history', rateController.getHistoricalRates);

module.exports = router; 