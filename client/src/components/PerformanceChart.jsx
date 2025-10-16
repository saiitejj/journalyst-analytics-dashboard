// src/components/PerformanceChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PerformanceChart.css';

function PerformanceChart({ winningTrades, losingTrades }) {
  const data = [
    { name: 'Winning Trades', value: winningTrades },
    { name: 'Losing Trades', value: losingTrades },
  ];

  const COLORS = ['#10b981', '#ef4444']; 

  return (
    <div className="chart-container">
      <h2 className="chart-title">Trade Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%" 
            cy="50%" 
            labelLine={false}
            outerRadius={110} 
            fill="#8884d8"
            dataKey="value" 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;