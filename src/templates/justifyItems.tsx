import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Essential for justifyItems
  gridTemplateColumns: "repeat(3, 1fr)", // Define grid columns
  gap: "10px", // Visual separation between grid items
  alignItems: "center", // Align items vertically to focus on horizontal justification
  // The 'justifyItems' property itself will be applied here via the 'style' prop
};

export const justifyItemsTemplate: PropertyTemplate = {
  name: "Justify Items",
  controls: [],
  values: ["start", "end", "center", "stretch"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{
        padding: '10px',
        border: '2px solid #38bdf8',
        borderRadius: '4px',
        backgroundColor: '#38bdf820',
        width: '70px', // Fixed width to show justification
        textAlign: 'center',
      }}>
        Item 1
      </div>
      <div style={{
        padding: '10px',
        border: '2px solid #38bdf8',
        borderRadius: '4px',
        backgroundColor: '#38bdf820',
        width: '90px', // Fixed width to show justification
        textAlign: 'center',
      }}>
        Item 2
      </div>
      <div style={{
        padding: '10px',
        border: '2px solid #38bdf8',
        borderRadius: '4px',
        backgroundColor: '#38bdf820',
        width: '50px', // Fixed width to show justification
        textAlign: 'center',
      }}>
        Item 3
      </div>
      <div style={{ gridColumn: 'span 3', color: '#94a3b8', fontSize: '0.9em', marginTop: '10px', textAlign: 'center' }}>
        `justify-items` aligns grid items along the inline (row) axis within their grid area.
      </div>
    </div>
  ),
  generate: (v) => ({ justifyItems: v as any }),
  prefix: "justify-items: ",
  parentClass: "container",
};