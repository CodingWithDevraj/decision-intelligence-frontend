import React, { useEffect, useState } from "react";

const IconTarget = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="#00c2ff" strokeWidth="1.2" opacity="0.4"/>
    <circle cx="8" cy="8" r="4" stroke="#00c2ff" strokeWidth="1.3" opacity="0.7"/>
    <circle cx="8" cy="8" r="1.5" fill="#00c2ff"/>
  </svg>
);

function Strategy() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://decision-intelligence-backend-h6lw.onrender.com/api/strategy")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconTarget /></div>
          <h2>Optimal Strategy</h2>
        </div>
        <span className="card-tag">Optimizer</span>
      </div>
      <div className="loading-state">
        <span className="loading-dot"><span /><span /><span /></span>
        Optimizing
      </div>
    </div>
  );

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconTarget /></div>
          <h2>Optimal Strategy</h2>
        </div>
        <span className="card-tag">Optimizer</span>
      </div>

      <div className="stat-row">
        <div className="stat-item">
          <span className="stat-label">Recommended Price Change</span>
          <span className="stat-value">{data.price_change_percent}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Recommended Demand Change</span>
          <span className="stat-value">{data.demand_change_percent}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Expected Revenue</span>
          <span className="stat-value green">{typeof data.expected_revenue === "number" ? data.expected_revenue.toLocaleString() : data.expected_revenue}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Expected Profit</span>
          <span className="stat-value green">{typeof data.expected_profit === "number" ? data.expected_profit.toLocaleString() : data.expected_profit}</span>
        </div>
      </div>
    </div>
  );
}

export default Strategy;