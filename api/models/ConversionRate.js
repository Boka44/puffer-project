const mongoose = require('mongoose');

const conversionRateSchema = new mongoose.Schema({
    rate: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ConversionRate', conversionRateSchema); 