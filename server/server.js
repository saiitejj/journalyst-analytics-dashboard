// server/server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5001; 

app.use(cors({ origin: 'http://localhost:5173' })); // Adjust port if Vite uses a different one

const analyticsData = {
  totalTrades: 120,
  winningTrades: 75,
  losingTrades: 45,
  winRate: 62.5,
  profitFactor: 2.1,
  averageReturn: 1.8,
  maxDrawdown: -15.2,
  sharpeRatio: 1.5,
  longestWinStreak: 8,
  longestLossStreak: 4,
  plBreakdown: {
    currency: 5250.75,
    percentage: 21.0
  },
  recentTrades: [
    { id: 1, type: 'WIN', pnl: 150.25, timestamp: '2025-10-15T10:00:00Z' },
    { id: 2, type: 'LOSS', pnl: -75.50, timestamp: '2025-10-15T11:30:00Z' },
    { id: 3, type: 'WIN', pnl: 220.00, timestamp: '2025-10-15T14:00:00Z' },
    { id: 4, type: 'WIN', pnl: 85.10, timestamp: '2025-10-16T09:00:00Z' },
    { id: 5, type: 'LOSS', pnl: -110.00, timestamp: '2025-10-16T10:15:00Z' },
    { id: 6, type: 'WIN', pnl: 300.50, timestamp: '2025-10-16T11:45:00Z' },
    { id: 7, type: 'LOSS', pnl: -50.25, timestamp: '2025-10-16T13:00:00Z' },
    { id: 8, type: 'WIN', pnl: 175.75, timestamp: '2025-10-16T15:20:00Z' },
    { id: 9, type: 'WIN', pnl: 95.00, timestamp: '2025-10-16T16:00:00Z' },
    { id: 10, type: 'LOSS', pnl: -65.80, timestamp: '2025-10-16T17:30:00Z' }
  ]
};

app.get('/api/analytics', (req, res) => {
  console.log("Received request for analytics data.");
  res.status(200).json(analyticsData);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});