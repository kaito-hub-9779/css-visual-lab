import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Essential for grid properties
  gridTemplateRows: "1fr", // Ensures items take full height in their row
  gridAutoFlow: "column", // Crucial for making items flow into implicit columns
  gap: "10px", // Visual separation between grid items
  alignItems: "stretch", // Default for grid items, allows vertical stretching
  overflowX: "auto", // Allows scrolling if items exceed container width
};

const itemStyles: React.CSSProperties = {
  background: "#2d3748",
  border: "2px solid #38bdf8",
  borderRadius: "4px",
  padding: "15px 10px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap", // Prevents text wrapping for min/max-content demo
};

export const gridAutoColumnsTemplate: PropertyTemplate = {
  name: "Grid Auto Columns",
  controls: [],
  values: ["100px", "200px", "minmax(50px, 1fr)", "min-content", "max-content", "auto"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={itemStyles}>Item 1</div>
      <div style={itemStyles}>This is a longer item 2 to show content-based sizing</div>
      <div style={itemStyles}>Item 3</div>
      <div style={itemStyles}>Item 4</div>
      <div style={itemStyles}>Item 5</div>
      <div style={itemStyles}>Short 6</div>
    </div>
  ),
  generate: (v) => ({ gridAutoColumns: v as any }),
  prefix: "grid-auto-columns: ",
  parentClass: "container",
};