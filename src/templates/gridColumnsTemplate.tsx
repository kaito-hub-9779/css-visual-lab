import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Essential for grid layout properties
  gap: "10px", // Creates space between grid items
  alignItems: "stretch", // Ensures items stretch vertically to fill their grid cells
};

const gridItemStyles: React.CSSProperties = {
  background: "#38bdf8",
  padding: "15px",
  borderRadius: "4px",
  color: "#1a2332",
  fontWeight: "bold",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50px", // Ensure items have a visible height
};

export const gridTemplateColumnsTemplate: PropertyTemplate = {
  name: "Grid Template Columns",
  controls: [],
  values: [
    "1fr 1fr 1fr",
    "100px 1fr auto",
    "repeat(2, 1fr) 200px",
    "1fr min-content 1fr",
    "auto 100px auto",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* demo content that clearly illustrates the property */}
      <div style={gridItemStyles}>Item 1</div>
      <div style={gridItemStyles}>Item 2 with more content to show auto/min-content</div>
      <div style={gridItemStyles}>Item 3</div>
      <div style={gridItemStyles}>Item 4</div>
    </div>
  ),
  generate: (v) => ({ gridTemplateColumns: v as any }),
  prefix: "grid-template-columns: ",
  parentClass: "container",
};