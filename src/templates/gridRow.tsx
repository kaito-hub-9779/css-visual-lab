import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)", // Define 3 rows for demonstration
  gap: "10px",
  alignItems: "stretch",
  justifyItems: "stretch",
};

const gridItemBaseStyles: React.CSSProperties = {
  background: "#2d3748",
  padding: "10px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "14px",
  minHeight: "50px",
};

export const gridRowTemplate: PropertyTemplate = {
  name: "Grid Row",
  controls: [],
  values: ["auto", "1 / 2", "1 / 3", "2 / 4", "span 2", "span 3"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div style={{ ...gridItemBaseStyles, gridColumn: '1', gridRow: '1' }}>Item 1</div>
      <div style={{ ...gridItemBaseStyles, gridColumn: '2', gridRow: '1' }}>Item 2</div>
      <div style={{ ...gridItemBaseStyles, gridColumn: '3', gridRow: '1' }}>Item 3</div>

      <div style={{ ...gridItemBaseStyles, gridColumn: '1', gridRow: '2' }}>Item 4</div>
      {/* The target item: its gridRow will be controlled by the 'style' prop */}
      <div style={{
          ...gridItemBaseStyles,
          gridColumn: '2', // Fix the column to clearly see row changes
          gridRow: '2', // Default placement, overridden by `style`
          background: '#38bdf8', // Highlight color
          color: '#1a2332',
          ...style, // Apply the gridRow property here
        }}>
        Target Item (gridRow)
      </div>
      <div style={{ ...gridItemBaseStyles, gridColumn: '3', gridRow: '2' }}>Item 6</div>

      <div style={{ ...gridItemBaseStyles, gridColumn: '1', gridRow: '3' }}>Item 7</div>
      <div style={{ ...gridItemBaseStyles, gridColumn: '2', gridRow: '3' }}>Item 8</div>
      <div style={{ ...gridItemBaseStyles, gridColumn: '3', gridRow: '3' }}>Item 9</div>
    </div>
  ),
  generate: (v) => ({ gridRow: v as any }),
  prefix: "grid-row: ",
  parentClass: "block",
};