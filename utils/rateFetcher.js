const cron = require('node-cron');
const initializeProvider = require('../config/ethereum');
const rateController = require('../api/controllers/rateController');

class RateFetcher {
    constructor() {
        this.isRunning = false;
        this.initialize();
    }

    initialize() {
        // Initialize Ethereum provider
        const { pufferVault } = initializeProvider();
        this.pufferVault = pufferVault;
    }

    async fetchAndStoreRate() {
        try {
            const rate = await this.pufferVault.getConversionRate();
            await rateController.storeRate(rate);
        } catch (error) {
            console.error('Error fetching and storing rate:', error);
        }
    }

    start() {
        if (this.isRunning) {
            console.log('Rate fetcher is already running');
            return;
        }

        // Schedule rate fetching every 10 seconds
        this.cronJob = cron.schedule('*/10 * * * * *', () => {
            this.fetchAndStoreRate();
        });

        // Fetch initial rate
        this.fetchAndStoreRate();
        
        this.isRunning = true;
        console.log('Rate fetcher started');
    }

    stop() {
        if (!this.isRunning) {
            console.log('Rate fetcher is not running');
            return;
        }

        this.cronJob.stop();
        this.isRunning = false;
        console.log('Rate fetcher stopped');
    }
}

module.exports = new RateFetcher(); 