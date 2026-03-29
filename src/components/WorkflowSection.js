import React from "react";

const steps = [
  { num: "Step 01", title: "User Upload",           body: "CSV file is sent via HTTP POST to /api/upload. The frontend handles file selection and form submission." },
  { num: "Step 02", title: "Data Parsing & Storage", body: "Backend reads the CSV with Pandas, converts it to JSON records, and persists it in MongoDB as the source of truth." },
  { num: "Step 03", title: "Data Retrieval",         body: "On every API call, the stored dataset is fetched from MongoDB and loaded into a Pandas DataFrame for processing." },
  { num: "Step 04", title: "Computation Layer",      body: "Revenue = Price × Quantity. Profit = Revenue − Cost. Data is grouped and aggregated to surface business patterns." },
  { num: "Step 05", title: "Insights Generation",    body: "/api/insights returns total revenue, top product, and best region as structured JSON to the frontend." },
  { num: "Step 06", title: "Decision Engine",        body: "Rule-based logic is applied on computed metrics to generate actionable business recommendations automatically." },
  { num: "Step 07", title: "Simulation Engine",      body: "/api/simulate applies elasticity logic — price increases reduce demand — and recalculates revenue and profit in real time." },
  { num: "Step 08", title: "Optimization Engine",    body: "/api/strategy iterates over price and demand combinations and selects the scenario yielding the highest profit margin." },
  { num: "Step 09", title: "Advanced Modules",       body: "Root Cause identifies weak performers via grouped analysis. Forecast estimates future revenue. Compare evaluates strategies side-by-side." },
  { num: "Step 10", title: "Frontend Rendering",     body: "React consumes all API responses via hooks. Each user action triggers a backend call, ensuring real-time dynamic updates." },
];

function WorkflowSection() {
  return (
    <div className="workflow-section">
      <div className="section-label">Internal Architecture</div>
      <h2 className="workflow-title">How the Platform Works</h2>
      <p className="workflow-subtitle">
        A full-stack pipeline where each component processes data step-by-step — from raw CSV to actionable intelligence.
      </p>

      <div className="workflow-steps">
        {steps.map((s) => (
          <div className="workflow-step" key={s.num}>
            <div className="step-number">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-body">{s.body}</div>
          </div>
        ))}
      </div>

      <div className="workflow-summary">
        Continuous cycle: User Input → Backend Processing → Data Analysis → API Response → UI Update<br />
        Every cycle is dynamic, data-driven, and adapts to any uploaded dataset in real time.
      </div>
    </div>
  );
}

export default WorkflowSection;