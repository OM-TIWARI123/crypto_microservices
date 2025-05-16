crypto-stats/
├── api-server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── worker-server/
│   ├── src/
│   │   ├── services/
│   │   └── worker.js
│   ├── package.json
│   └── README.md
└── README.md (Main documentation)
# API Server Documentation

## Features
- REST API endpoints for crypto statistics
- MongoDB integration for data storage
- NATS event consumer

## Setup Instructions

### Prerequisites
- Node.js v18+
- MongoDB
- NATS server

### Installation
```bash
npm install

MONGODB_URI=mongodb://localhost:27017/crypto-stats
NATS_URL=nats://localhost:4222
PORT=3000
COINGECKO_API_KEY=your_api_key_her
