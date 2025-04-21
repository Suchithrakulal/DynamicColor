import React, { useState } from "react";

const DynamicColorGenerator = () => {
  const [color, setColor] = useState("#a29bfe");
  const [copied, setCopied] = useState(false);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={{ ...styles.colorCircle, backgroundColor: color }}></div>
        <p style={styles.codeText}>{color}</p>
        <div style={styles.controls}>
          <button onClick={generateRandomColor} style={styles.generateBtn}>
            New Color
          </button>
          <button onClick={copyToClipboard} style={styles.copyBtn}>
            Copy
          </button>
        </div>
        {copied && <span style={styles.copied}>Copied!</span>}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: "#f0f4f8",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "30px 40px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  colorCircle: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    marginBottom: "20px",
    border: "2px solid #ddd",
  },
  codeText: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
  controls: {
    display: "flex",
    gap: "12px",
  },
  generateBtn: {
    backgroundColor: "#74b9ff",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  copyBtn: {
    backgroundColor: "#dfe6e9",
    color: "#2d3436",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  copied: {
    marginTop: "10px",
    color: "#00b894",
    fontWeight: "500",
  },
};

export default DynamicColorGenerator;
