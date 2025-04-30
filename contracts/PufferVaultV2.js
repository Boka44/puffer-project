const { ethers } = require('ethers');

const PufferVaultV2_ABI = [
    "function totalAssets() view returns (uint256)",
    "function totalSupply() view returns (uint256)"
];

const PufferVaultV2_ADDRESS = "0xD9A442856C234a39a81a089C06451EBAa4306a72";

class PufferVaultV2 {
    constructor(provider) {
        this.contract = new ethers.Contract(
            PufferVaultV2_ADDRESS,
            PufferVaultV2_ABI,
            provider
        );
    }

    async getConversionRate() {
        try {
            const totalAssets = await this.contract.totalAssets();
            const totalSupply = await this.contract.totalSupply();


            // Calculate rate: (totalAssets * 1e18) / totalSupply
            // This preserves 18 decimal places in the result
            const rate = (totalAssets * BigInt(1e18)) / totalSupply;
            
            return ethers.formatEther(rate);
        } catch (error) {
            console.error("Error getting conversion rate:", error);
            throw error;
        }
    }
}

module.exports = PufferVaultV2; 