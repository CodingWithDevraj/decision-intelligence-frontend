import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#00c2ff", "#00d48a", "#ffb020", "#ff5c5c", "#7c6fff"];

const IconCompare = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="5" width="3" height="9" rx="1" fill="#00c2ff" opacity="0.5"/>
    <rect x="6" y="2" width="3" height="12" rx="1" fill="#00c2ff" opacity="0.75"/>
    <rect x="11" y="7" width="3" height="7" rx="1" fill="#00c2ff"/>
  </svg>
);

function Compare() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const runCompare = () => {
    setLoading(true);
    fetch("https://decision-intelligence-backend-h6lw.onrender.com/api/compare?price=10,20,30&demand=10,20,30")
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(() => setLoading(false));
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconCompare /></div>
          <h2>Strategy Comparison</h2>
        </div>
        <span className="card-tag">Multi-Scenario</span>
      </div>

      <button onClick={runCompare}>
        {loading ? (
          <><span className="loading-dot"><span /><span /><span /></span> Comparing</>
        ) : "Run Comparison"}
      </button>

      {data.length > 0 && (
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={data} barSize={30}>
              <XAxis
                dataKey="price"
                tick={{ fontSize: 10, fill: "#4e6880", fontFamily: "IBM Plex Mono" }}
                axisLine={false} tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: "#142034",
                  border: "1px solid rgba(0,194,255,0.28)",
                  borderRadius: "7px",
                  fontFamily: "IBM Plex Mono",
                  fontSize: "11px",
                  color: "#e4eeff"
                }}
                cursor={{ fill: "rgba(0,194,255,0.05)" }}
              />
              <Bar dataKey="profit" radius={[4, 4, 0, 0]}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default Compare;