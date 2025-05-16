import express from 'express';
import connectDB from './config/db.js';
import connectNATS from './services/nats.js';
import fetchAndStoreStats from './services/coingecko.js';
import { getStats } from './controllers/stats.js';
import { getDeviation } from './controllers/deviation.js';

const app = express();
app.use(express.json());

// Initialize connections
await connectDB();


// NATS Subscription
// natsClient.subscribe('crypto.update', () => {
//   console.log('Received update trigger');
//   fetchAndStoreStats();
// });
fetchAndStoreStats()

// Routes
app.get('/stats', getStats);
app.get('/deviation', getDeviation);

app.listen(process.env.PORT, () => {
  console.log(`API Server running on port ${process.env.PORT}`);
});