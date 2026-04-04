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
  gap: "20px",
};

export const outlineOffsetTemplate: PropertyTemplate = {
  name: "Outline Offset",
  controls: [
    { key: "value", label: "Offset", min: -20, max: 20, unit: "px", default: 5 }
  ],
  values: ["5px", "10px", "0px", "-5px"], // Predefined values for the user to click
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          outline: "4px solid #a78bfa", // Base outline for the demo
          ...style, // outlineOffset will be applied here
        }}
      >
        <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          Outline Offset Demo
        </span>
      </div>
      <div
        style={{
          padding: "20px",
          border: "2px dashed #6ee7b7",
          borderRadius: "4px",
          outline: "4px dashed #facc15", // Another base outline for comparison
          outlineOffset: "0px", // Explicitly set to 0 for comparison
        }}
      >
        <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          No Offset (Comparison)
        </span>
      </div>
    </div>
  ),
  generate: (v) => ({ outlineOffset: v as any }),
  prefix: "outline-offset: ",
  parentClass: "block",
};