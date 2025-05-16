# 📊 Cryptocurrency Statistics Tracker

[![Node.js CI](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0%2B-brightgreen)](https://www.mongodb.com/)
[![NATS](https://img.shields.io/badge/NATS-2.16%2B-blue)](https://nats.io/)

A microservices-based system to collect and serve cryptocurrency statistics using Node.js, MongoDB, and NATS, with data from the CoinGecko API.

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) v5.0+
- [NATS Server](https://docs.nats.io/nats-server/installation) (or use Docker)
- [CoinGecko API Key](https://www.coingecko.com/en/api) (Free tier works)

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/crypto-stats.git
cd crypto-stats 

```
#CREATE ENV FILE IN BOTH THE DIRECTORIES

# API Server
MONGODB_URI=mongodb://localhost:27017/crypto-stats
NATS_URL=nats://localhost:4222
PORT=3000
COINGECKO_API_KEY=your_api_key_here

# Worker Server
# (Shares NATS_URL from above)
```bash
docker-compose up -d
```

```bash
cd api-server
npm install
npm start
```

```bash
cd ../worker-server
npm install
npm start

```
