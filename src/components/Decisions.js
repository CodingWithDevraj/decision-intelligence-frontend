import React, { useEffect, useState } from "react";

const IconBrain = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="3" stroke="#00c2ff" strokeWidth="1.5"/>
    <path d="M8 2V4M8 12V14M2 8H4M12 8H14" stroke="#00c2ff" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4.1 4.1L5.5 5.5M10.5 10.5L11.9 11.9M11.9 4.1L10.5 5.5M5.5 10.5L4.1 11.9" stroke="#00c2ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

function Decisions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://decision-intelligence-backend-h6lw.onrender.com/api/decisions")
      .then(res => res.json())
      .then(data => setData(data.decisions));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconBrain /></div>
          <h2>Decision Engine</h2>
        </div>
        <span className="card-tag">{data.length} Recommendations</span>
      </div>

      {data.length === 0 ? (
        <div className="loading-state">
          <span className="loading-dot"><span /><span /><span /></span>
          Generating recommendations
        </div>
      ) : (
        <div className="decision-list">
          {data.map((d, i) => (
            <div className="decision-item" key={i}>
              <span className="decision-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{d}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Decisions;