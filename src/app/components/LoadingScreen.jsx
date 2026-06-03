"use client";

export default function LoadingScreen({ visible }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#0f0f0f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      opacity: visible ? 1 : 0,
      transition: "opacity 0.5s ease",
      pointerEvents: visible ? "all" : "none",
    }}>
      <div style={{
        width: "60px",
        height: "60px",
        border: "5px solid #333",
        borderTop: "5px solid #6c63ff",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <p style={{ color: "#fff", marginTop: "20px", fontSize: "16px" }}>
        Loading...
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}