const ConversionRate = require('../models/ConversionRate');

const rateController = {
    // Get all rates
    getAllRates: async (req, res) => {
        try {
            const rates = await ConversionRate.find().sort({ timestamp: -1 });
            res.json(rates);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get latest rate
    getLatestRate: async (req, res) => {
        try {
            const latestRate = await ConversionRate.findOne().sort({ timestamp: -1 });
            res.json(latestRate);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get historical rates with optional time range
    getHistoricalRates: async (req, res) => {
        try {
            const { start, end } = req.query;
            const query = {};
            
            if (start) query.timestamp = { $gte: new Date(start) };
            if (end) query.timestamp = { ...query.timestamp, $lte: new Date(end) };
            
            const rates = await ConversionRate.find(query).sort({ timestamp: 1 });
            res.json(rates);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Store new rate
    storeRate: async (rate) => {
        try {
            const conversionRate = new ConversionRate({ rate });
            await conversionRate.save();
            console.log(`Stored new conversion rate: ${rate}`);
            return conversionRate;
        } catch (error) {
            console.error('Error storing rate:', error);
            throw error;
        }
    }
};

module.exports = rateController; 