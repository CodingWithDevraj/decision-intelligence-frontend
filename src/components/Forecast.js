import React, { useEffect, useState } from "react";

const IconForecast = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12L5 8L8 10L12 5L14 7" stroke="#00c2ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5H14V7" stroke="#00c2ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Forecast() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://decision-intelligence-backend-h6lw.onrender.com/api/forecast")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconForecast /></div>
          <h2>Revenue Forecast</h2>
        </div>
        <span className="card-tag">Predictive</span>
      </div>
      <div className="loading-state">
        <span className="loading-dot"><span /><span /><span /></span>
        Forecasting
      </div>
    </div>
  );

  const current   = parseFloat(data.current_revenue) || 0;
  const predicted = parseFloat(data.predicted_revenue) || 0;
  const delta     = predicted - current;
  const pct       = current ? ((delta / current) * 100).toFixed(1) : 0;
  const positive  = delta >= 0;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconForecast /></div>
          <h2>Revenue Forecast</h2>
        </div>
        <span className="card-tag">Predictive</span>
      </div>

      <div className="stat-row">
        <div className="stat-item">
          <span className="stat-label">Current Revenue</span>
          <span className="stat-value">{current.toLocaleString()}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Predicted Revenue</span>
          <span className="stat-value green">{predicted.toLocaleString()}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Projected Change</span>
          <span className={`stat-value ${positive ? "green" : "amber"}`}>
            {positive ? "+" : ""}{pct}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default Forecast;