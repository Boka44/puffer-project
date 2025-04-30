# pufETH Conversion Rate Tracker

A real-time dashboard that tracks and displays the pufETH/ETH conversion rate from Puffer's PufferVaultV2 contract.

## Project Overview

I set up a simple microservice that calls and stores the conversion rate in a local db. I used my usual go-to folder setup, although sometimes I version my APIs as well. One other habit I like is adding all db related methods to the model, but this is a simple microservice.

## Project Structure

```
.
├── contracts/        # Smart contract interactions
├── api/              # Backend microservice
│   ├── models/       # MongoDB models
│   ├── controllers/  # API controllers
│   ├── routes/       # API routes
├── config/           # Configuration files
├── utils/            # Utility functions
└── frontend/         # React frontend application
```

## Tech Stack

### Backend
- Node.js with Express
- MongoDB for data storage
- ethers.js for blockchain interaction

### Frontend
- React
- Material-UI
- Redux Toolkit for state management
- Recharts for data visualization

## Features

- Real-time conversion rate tracking
- Historical rate visualization
- Responsive dashboard interface
- Automatic data refresh every 10 seconds
- Stores historical data in MongoDB

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

### Database Setup

1. Create a simple free mongoDB cluster, then copy the uri.s

### Backend Setup

1. Navigate to the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb_uri
   PORT=3001
   ETHEREUM_RPC_URL=https://eth.llamarpc.com
   ```
4. Start the backend server:
   ```bash
   npm run server
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:3001`.

## API Endpoints

- `GET /api/rates` - Get all conversion rates
- `GET /api/rates/latest` - Get the latest conversion rate
- `GET /api/rates/history` - Get historical conversion rates with optional time range parameters 

## Contract Information

The conversion rate is calculated from the PufferVaultV2 contract:
- Address: `0xD9A442856C234a39a81a089C06451EBAa4306a72`
- Formula: `totalAssets() / totalSupply()`

## Frontend Architecture Notes

For the frontend, I used the Puffer Media Kit to draft a quick theme and set up a simple dashboard. 

Since this is a test of skills, I implemented a feature-based folder structure that I would use for a production dApp. From my research (I normally use Vue), feature-based structures are becoming more popular.

This structure could be beneficial depending on the app's complexity and team preferences. For this project, I chose a feature-based structure that provides a proper separation of logic while maintaining simplicity:

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── features/       # Feature-based modules
│   ├── pages/          # Page components
│   ├── routes/         # Route configurations
│   ├── services/       # External service integrations
│   ├── store/          # Redux store
│   └── theme.js        # Theme configuration
```

## License

MIT