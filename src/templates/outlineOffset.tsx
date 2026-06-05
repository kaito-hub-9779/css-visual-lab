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

export const outlineOffsetTemplate: PropertyTemplate = {
  name: "Outline Offset",
  controls: [
    { key: "offset", label: "Offset", min: -10, max: 20, unit: "px", default: 5 },
  ],
  values: ["0", "5px", "10px", "-5px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          outline: "2px dashed #f97316", // A distinct outline to show the offset
          ...style, // outlineOffset will be applied here
        }}
      >
        <p style={{ margin: 0 }}>This box has a border and an outline.</p>
        <p style={{ margin: "5px 0 0 0" }}>Observe how the outline moves relative to the border.</p>
      </div>
    </div>
  ),
  generate: (v) => ({ outlineOffset: v as any }),
  prefix: "outline-offset: ",
  parentClass: "block",
};