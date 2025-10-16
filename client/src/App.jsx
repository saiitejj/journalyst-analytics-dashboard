// src/App.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import MetricCard from './components/MetricCard';
import RecentTradeTable from './components/RecentTradeTable';
import PerformanceChart from './components/PerformanceChart'; 

function App() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/analytics');
        setAnalytics(response.data);
      } catch (err) {
        setError('Failed to fetch analytics data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='app-container'>
      <h1>Analytics Dashboard</h1>
      <div className='dashboard-grid'>
        <MetricCard title="Win Rate" value={`${analytics.winRate}%`} />
        <MetricCard title="Profit Factor" value={analytics.profitFactor} />
        <MetricCard title="Total Trades" value={analytics.totalTrades} />
        <MetricCard title="P/L" value={`$${analytics.plBreakdown.currency.toFixed(2)}`} />
        </div>

        <RecentTradeTable trades={analytics.recentTrades}/>
        <PerformanceChart
        winningTrades={analytics.winningTrades}
        losingTrades={analytics.losingTrades}
      />
      </div>

  );
}

export default App;