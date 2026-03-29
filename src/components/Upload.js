import React, { useState, useRef } from "react";

const IconUpload = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L8 10M8 2L5 5M8 2L11 5" stroke="#00c2ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12V13C2 13.552 2.448 14 3 14H13C13.552 14 14 13.552 14 13V12" stroke="#00c2ff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

function Upload({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) { alert("Please select a file"); return; }
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const res = await fetch("https://decision-intelligence-backend-h6lw.onrender.com/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      alert(data.message);
      if (onUploadSuccess) onUploadSuccess();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon"><IconUpload /></div>
          <h2>Data Upload</h2>
        </div>
        <span className="card-tag">CSV</span>
      </div>

      <div className="upload-zone" onClick={() => inputRef.current.click()}>
        <span className="upload-icon" />
        <div className="upload-text">
          <strong>Click to select a CSV file</strong><br />
          Drop your dataset here to begin analysis
        </div>
      </div>
      <input ref={inputRef} type="file" accept=".csv" onChange={handleFileChange} />

      {file && (
        <div className="file-selected">{file.name}</div>
      )}

      <button onClick={handleUpload} disabled={loading}>
        {loading ? (
          <><span className="loading-dot"><span /><span /><span /></span> Uploading</>
        ) : "Upload Dataset"}
      </button>
    </div>
  );
}

export default Upload;