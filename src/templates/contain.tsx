import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

export const containTemplate: PropertyTemplate = {
  name: "CSS Containment",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "paint", "style"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <p style={{ margin: 0, fontSize: '0.9em', textAlign: 'center' }}>
        This container has <code style={{ color: '#88e0ff' }}>contain: {style.contain || 'none'}</code> applied.
      </p>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          textAlign: "center",
          maxWidth: "320px",
          backgroundColor: "#2a374b",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", color: "#38bdf8", fontSize: "1.2em" }}>
          Contained Component Demo
        </h3>
        <p style={{ margin: 0, fontSize: "0.9em", lineHeight: "1.4" }}>
          The <code style={{ color: '#88e0ff' }}>contain</code> property signals to the browser that this element's subtree is independent, helping optimize rendering performance by limiting how deeply the browser needs to compute layout, style, or paint operations for this element.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};