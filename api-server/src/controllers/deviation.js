import CryptoStat from '../models/CryptoStat.js';

export const getDeviation = async (req, res) => {
  try {
    const coin = req.query.coin;
    const records = await CryptoStat.find({ coinId: coin })
      .sort({ timestamp: -1 })
      .limit(100)
      .select('price -_id');

    if (records.length < 2) {
      return res.json({ deviation: 0 });
    }

    const prices = records.map(r => r.price);
    const mean = prices.reduce((a, b) => a + b) / prices.length;
    const variance = prices.reduce((acc, price) => 
      acc + Math.pow(price - mean, 2), 0) / (prices.length - 1);
    const stdDev = Math.sqrt(variance);

    res.json({ deviation: Number(stdDev.toFixed(2)) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};