import type { PropertyTemplate } from "../types";
import React from "react";

const demoWrapperStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const gridContainerStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // Define 4 equal columns for the grid
  gridTemplateRows: "repeat(2, 60px)",   // Define 2 rows for visual clarity
  gap: "10px",
  width: "100%",
  maxWidth: "400px",
  border: "1px dashed #475569", // Visual border for the grid container
  padding: "5px",
};

const gridItemBaseStyles: React.CSSProperties = {
  background: "#334155",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  minHeight: "50px",
  color: "#f8fafc",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

export const gridColumnStartTemplate: PropertyTemplate = {
  name: "Grid Column Start",
  controls: [],
  values: ["1", "2", "3", "4", "auto", "-1"], // Valid line numbers, 'auto', and negative line number
  preview: (style) => (
    <div style={demoWrapperStyles}>
      <div style={gridContainerStyles}>
        {/* The actual grid item that applies the property */}
        <div
          style={{
            ...gridItemBaseStyles,
            background: "#38bdf8", // Highlight the styled item
            color: "#1e293b",
            fontWeight: "bold",
            fontSize: "16px",
            ...style, // Apply the gridColumnStart property here
          }}
        >
          Styled Item
        </div>

        {/* Placeholder grid items to demonstrate flow and context */}
        <div style={gridItemBaseStyles}>Item A</div>
        <div style={gridItemBaseStyles}>Item B</div>
        <div style={gridItemBaseStyles}>Item C</div>
        <div style={gridItemBaseStyles}>Item D</div>
        <div style={gridItemBaseStyles}>Item E</div>
        <div style={gridItemBaseStyles}>Item F</div>
        <div style={gridItemBaseStyles}>Item G</div>
        <div style={gridItemBaseStyles}>Item H</div>
      </div>
    </div>
  ),
  generate: (v) => ({ gridColumnStart: v as any }),
  prefix: "grid-column-start: ",
  parentClass: "block", // This property applies to a grid item (a block element within the grid)
};