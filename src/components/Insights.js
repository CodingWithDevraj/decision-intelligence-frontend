import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const IconChart = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="8" width="3" height="6" rx="1" fill="#00c2ff" opacity="0.6"/>
    <rect x="6" y="4" width="3" height="10" rx="1" fill="#00c2ff" opacity="0.8"/>
    <rect x="11" y="1" width="3" height="13" rx="1" fill="#00c2ff"/>
  </svg>
);

function Insights() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://decision-intelligence-backend-h6lw.onrender.com/api/insights")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconChart /></div>
          <h2>Business Insights</h2>
        </div>
        <span className="card-tag">Live</span>
      </div>
      <div className="loading-state">
        <span className="loading-dot"><span /><span /><span /></span>
        Fetching metrics
      </div>
    </div>
  );

  const chartData = [{ name: "Revenue", value: data.total_revenue }];

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconChart /></div>
          <h2>Business Insights</h2>
        </div>
        <span className="card-tag">Live</span>
      </div>

      <div className="stat-row" style={{ marginBottom: "16px" }}>
        <div className="stat-item">
          <span className="stat-label">Total Revenue</span>
          <span className="stat-value">{typeof data.total_revenue === "number" ? data.total_revenue.toLocaleString() : data.total_revenue}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Top Product</span>
          <span className="stat-value green">{data.top_product}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Best Region</span>
          <span className="stat-value amber">{data.best_region}</span>
        </div>
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={110}>
          <BarChart data={chartData} barSize={44}>
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#4e6880", fontFamily: "IBM Plex Mono" }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "#142034", border: "1px solid rgba(0,194,255,0.28)", borderRadius: "7px", fontFamily: "IBM Plex Mono", fontSize: "11px", color: "#e4eeff" }}
              cursor={{ fill: "rgba(0,194,255,0.05)" }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              <Cell fill="#00c2ff" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Insights;