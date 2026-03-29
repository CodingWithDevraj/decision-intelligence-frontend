import React, { useState } from "react";
import Upload from "./components/Upload";
import Insights from "./components/Insights";
import Decisions from "./components/Decisions";
import Simulation from "./components/Simulation";
import Strategy from "./components/Strategy";
import RootCause from "./components/RootCause";
import Forecast from "./components/Forecast";
import Compare from "./components/Compare";
import WorkflowSection from "./components/WorkflowSection";
import NotesSection from "./components/NotesSection ";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);
  const now     = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const handleRefresh = () => setRefresh(r => !r);

  return (
    <div className="app">

      {/* ── HEADER ── */}
      <header className="app-header">
        <div className="header-left">
          <span className="header-badge">Decision Intelligence Platform · v2.0</span>
          <h1 className="app-title">
            Decision <span>Intelligence</span> Dashboard
          </h1>
          <p className="app-subtitle">Real-time business analytics and strategy optimization engine</p>
        </div>
        <div className="header-status">
          <div className="status-item">
            <span className="status-label">System</span>
            <span className="status-value"><span className="status-dot" />Online</span>
          </div>
          <div className="status-item">
            <span className="status-label">Session</span>
            <span className="status-value">{timeStr}</span>
          </div>
          <div className="status-item">
            <span className="status-label">Date</span>
            <span className="status-value">{dateStr}</span>
          </div>
        </div>
      </header>

      {/* ── NOTES ── */}
      <NotesSection />

      {/* ── ROW 1: Upload + Insights + Forecast ── */}
      <div className="section-label">Data Ingestion &amp; Key Metrics</div>
      <div className="grid">
        <div className="col-4"><Upload onUploadSuccess={handleRefresh} /></div>
        <div className="col-4"><Insights key={refresh} /></div>
        <div className="col-4"><Forecast key={refresh} /></div>
      </div>

      {/* ── ROW 2: Decisions + Root Cause ── */}
      <div className="section-label">Analysis &amp; Diagnostics</div>
      <div className="grid">
        <div className="col-6"><Decisions key={refresh} /></div>
        <div className="col-6"><RootCause key={refresh} /></div>
      </div>

      {/* ── ROW 3: Simulation + Strategy + Compare ── */}
      <div className="section-label">Simulation &amp; Optimization</div>
      <div className="grid">
        <div className="col-4"><Simulation /></div>
        <div className="col-4"><Strategy key={refresh} /></div>
        <div className="col-4"><Compare /></div>
      </div>

      {/* ── WORKFLOW ── */}
      <WorkflowSection />


    </div>
  );
}

export default App;