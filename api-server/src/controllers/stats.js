import CryptoStat from '../models/CryptoStat.js';

export const getStats = async (req, res) => {
  try {
    const coin = req.query.coin;
    const latest = await CryptoStat.findOne({ coinId: coin })
      .sort({ timestamp: -1 })
      .limit(1);
    console.log("latest",latest);
    res.json({
      price: latest.price,
      marketCap: latest.marketCap,
      "24hChange": latest.change24h
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};