import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid",
  gap: "10px",
  alignItems: "stretch",
  justifyItems: "stretch",
};

const gridItemStyle: React.CSSProperties = {
  background: "#0f172a",
  padding: "15px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.9em",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  minWidth: "0",
  minHeight: "0",
};

export const gridAreaTemplate: PropertyTemplate = {
  name: "Grid Area",
  controls: [],
  values: [
    "1 / 1 / 2 / 4", // Spans the entire top row
    "1 / 1 / 4 / 2", // Spans the entire left column
    "2 / 2 / 3 / 3", // Occupies the center cell
    "2 / 1 / span 2 / span 3", // Starts at row 2, col 1, spans 2 rows, 3 columns
    "header", // Places item in the named 'header' area
    "content", // Places item in the named 'content' area
    "auto / auto / auto / auto", // Auto-places the item in the next available cell
  ],
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 80px)",
        gridTemplateAreas: `
          'header header header'
          'nav    content aside'
          'footer footer  footer'
        `,
      }}
    >
      {/* Static grid items to define the layout context */}
      <div style={{ ...gridItemStyle, gridArea: "header", background: '#38bdf8' }}>Header (Fixed)</div>
      <div style={{ ...gridItemStyle, gridArea: "nav", background: '#a78bfa' }}>Nav (Fixed)</div>
      <div style={{ ...gridItemStyle, gridArea: "aside", background: '#60a5fa' }}>Aside (Fixed)</div>
      <div style={{ ...gridItemStyle, gridArea: "footer", background: '#2dd4bf' }}>Footer (Fixed)</div>

      {/* The 'Demo Item' whose gridArea property will be dynamically changed */}
      <div style={{ ...gridItemStyle, ...style, background: '#ef4444', border: '2px solid #f8fafc', color: '#f8fafc', fontWeight: 'bold' }}>
        Demo Item
      </div>
    </div>
  ),
  generate: (v) => ({ gridArea: v as any }),
  prefix: "grid-area: ",
  parentClass: "container",
};