import React from "react";

const columns = [
  { name: "product",       desc: "The entity being analyzed — product or item name." },
  { name: "price",                desc: "Selling price per unit." },
  { name: "quantity",    desc: "Units sold — represents customer demand." },
  { name: "region",    desc: "Geographical segment for performance comparison." },
  { name: "cost",                 desc: "Cost per unit, used to derive profit." },
];

const whyItems = [
  "Revenue = Price × Quantity measures overall business performance.",
  "Profit = Revenue − Cost is critical for real-world decision-making.",
  "Product and Region enable segmentation to identify top and under-performers.",
  "Simulation and optimization rely on price–demand relationships to model realistic business scenarios.",
];

function NotesSection() {
  return (
    <div className="notes-section">
      <div className="section-label" style={{ marginBottom: "20px" }}>Dataset Guidelines</div>
      <h2 className="notes-title">Note for Users &amp; Reviewers</h2>
      <p className="notes-desc">
        For accurate analysis and meaningful insights, please upload datasets that include the following columns or equivalents.
        If column names differ, the system attempts auto-detection — however, maintaining this structure ensures the most reliable results.
      </p>

      <div className="columns-grid">
        {columns.map((c) => (
          <div className="column-card" key={c.name}>
            <div className="column-name">{c.name}</div>
            <div className="column-desc">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="why-title">Why These Fields Matter</div>
      <ul className="why-list">
        {whyItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="notes-footer">
        If column names differ from the above, the system will attempt to auto-detect them via fuzzy matching.
        For best results, maintain this standard structure before uploading your dataset.
      </p>
    </div>
  );
}

export default NotesSection;