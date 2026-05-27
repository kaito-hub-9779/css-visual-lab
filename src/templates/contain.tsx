import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "style", "paint"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          ...style, // The 'contain' property will be applied here
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          backgroundColor: "rgba(56, 189, 248, 0.1)",
          color: "#f8fafc",
          fontFamily: "monospace",
          fontSize: "14px",
          width: "fit-content",
          minWidth: "250px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        <p>
          This element has <code>contain: {String(style.contain || "none")}</code> applied.
        </p>
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "linear-gradient(45deg, #f97316, #fbbf24)",
            borderRadius: "50%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1a2332",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          📦
        </div>
        <p style={{ fontSize: "12px", opacity: 0.8 }}>
          It helps isolate this element from the rest of the DOM for browser
          rendering optimizations, improving performance.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};