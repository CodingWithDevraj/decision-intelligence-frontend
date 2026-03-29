import React, { useEffect, useState } from "react";

const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.5" cy="6.5" r="4.5" stroke="#00c2ff" strokeWidth="1.5"/>
    <path d="M10 10L14 14" stroke="#00c2ff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

function RootCause() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://decision-intelligence-backend-h6lw.onrender.com/api/root-cause")
      .then(res => res.json())
      .then(data => setData(data.root_causes));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconSearch /></div>
          <h2>Root Cause Analysis</h2>
        </div>
        <span className="card-tag">{data.length} Factors</span>
      </div>

      {data.length === 0 ? (
        <div className="loading-state">
          <span className="loading-dot"><span /><span /><span /></span>
          Analyzing factors
        </div>
      ) : (
        <div className="cause-list">
          {data.map((d, i) => (
            <div className="cause-item" key={i}>
              <span className="cause-dot" />
              {d}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RootCause;