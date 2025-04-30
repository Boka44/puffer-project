const { ethers } = require('ethers');
const PufferVaultV2 = require('../contracts/PufferVaultV2');

const initializeProvider = () => {
    const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL || 'https://eth.llamarpc.com');
    const pufferVault = new PufferVaultV2(provider);
    return { provider, pufferVault };
};

module.exports = initializeProvider; 