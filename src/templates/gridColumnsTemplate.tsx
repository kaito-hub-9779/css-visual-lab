import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Essential for grid properties
  gap: "10px", // Adds spacing between grid items
};

const gridItemStyles: React.CSSProperties = {
  background: "#38bdf8",
  padding: "15px",
  borderRadius: "4px",
  textAlign: "center",
  color: "#1a2332",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50px",
};

export const gridTemplateColumnsTemplate: PropertyTemplate = {
  name: "Grid Template Columns",
  controls: [],
  values: [
    "repeat(3, 1fr)",
    "100px 1fr auto",
    "1fr 2fr 1fr",
    "repeat(auto-fit, minmax(80px, 1fr))",
    "20% 1fr 20%",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
       {/* demo content that clearly illustrates the property */}
       <div style={gridItemStyles}>Item 1</div>
       <div style={gridItemStyles}>Item 2</div>
       <div style={gridItemStyles}>Item 3</div>
       <div style={gridItemStyles}>Item 4</div>
       <div style={gridItemStyles}>Item 5</div>
       <div style={gridItemStyles}>Item 6</div>
    </div>
  ),
  generate: (v) => ({ gridTemplateColumns: v as any }),
  prefix: "grid-template-columns: ",
  parentClass: "container",
};