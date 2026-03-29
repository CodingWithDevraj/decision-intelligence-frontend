import React, { useState } from "react";

const IconSim = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="6" width="4" height="2" rx="1" fill="#00c2ff" opacity="0.5"/>
    <rect x="1" y="6" width="6" height="2" rx="1" fill="#00c2ff"/>
    <rect x="1" y="10" width="4" height="2" rx="1" fill="#00c2ff" opacity="0.5"/>
    <rect x="1" y="10" width="10" height="2" rx="1" fill="#00c2ff"/>
    <rect x="1" y="2" width="4" height="2" rx="1" fill="#00c2ff" opacity="0.5"/>
    <rect x="1" y="2" width="3" height="2" rx="1" fill="#00c2ff"/>
    <circle cx="12" cy="7" r="2" stroke="#00c2ff" strokeWidth="1.5"/>
    <circle cx="12" cy="11" r="2" stroke="#00c2ff" strokeWidth="1.5"/>
  </svg>
);

function Simulation() {
  const [price, setPrice] = useState(0);
  const [demand, setDemand] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runSimulation = () => {
    setLoading(true);
    fetch(`https://decision-intelligence-backend-h6lw.onrender.com/api/simulate?price_change=${price}&demand_change=${demand}`)
      .then(res => res.json())
      .then(data => { setResult(data); setLoading(false); })
      .catch(() => setLoading(false));
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconSim /></div>
          <h2>Simulation Engine</h2>
        </div>
        <span className="card-tag">What-If</span>
      </div>

      <div className="slider-group">
        <div className="slider-label">
          <span className="slider-name">Price Change</span>
          <span className="slider-val">{price > 0 ? `+${price}` : price}%</span>
        </div>
        <input type="range" min="-20" max="30" value={price}
          onChange={(e) => setPrice(Number(e.target.value))} />
      </div>

      <div className="slider-group">
        <div className="slider-label">
          <span className="slider-name">Demand Change</span>
          <span className="slider-val">{demand > 0 ? `+${demand}` : demand}%</span>
        </div>
        <input type="range" min="0" max="40" value={demand}
          onChange={(e) => setDemand(Number(e.target.value))} />
      </div>

      <button onClick={runSimulation}>
        {loading ? (
          <><span className="loading-dot"><span /><span /><span /></span> Running</>
        ) : "Run Simulation"}
      </button>

      {result && (
        <div className="result-box">
          <div className="result-item">
            <span className="result-label">Simulated Revenue</span>
            <span className="result-val">{typeof result.simulated_revenue === "number" ? result.simulated_revenue.toLocaleString() : result.simulated_revenue}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Simulated Profit</span>
            <span className="result-val">{typeof result.simulated_profit === "number" ? result.simulated_profit.toLocaleString() : result.simulated_profit}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Simulation;