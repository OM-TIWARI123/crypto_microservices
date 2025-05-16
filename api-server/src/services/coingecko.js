import axios from 'axios';
import CryptoStat from '../models/CryptoStat.js';
import dotenv from 'dotenv';

dotenv.config();

const fetchAndStoreStats = async () => {
  const coins = ['bitcoin', 'ethereum', 'matic-network'];
  
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: coins.join(','),
        price_change_percentage: '24h'
      },
      headers: {
        'x-cg-demo-api-key': process.env.COINGECKO_API_KEY // Add this line
      }
    });

    const stats = response.data.map(coin => ({
      coinId: coin.id,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h
    }));
    
    await CryptoStat.insertMany(stats);
    console.log('Stats stored successfully',stats);
  } catch (error) {
    console.error('Error storing stats:', error.response?.data || error.message);
    // Implement retry logic here if needed
  }
};

export default fetchAndStoreStats;