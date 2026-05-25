import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Parent needs to be a grid or flex container to use justify-self
  gridTemplateColumns: "repeat(3, 1fr)", // To provide cells for items to align within
  gap: "10px",
  alignItems: "start", // Default vertical alignment for items
  justifyItems: "start", // Default horizontal alignment for items, so justifySelf stands out
};

const commonItemStyles: React.CSSProperties = {
  background: "#38bdf8",
  padding: "10px",
  borderRadius: "4px",
  color: "#1a2332",
  fontWeight: "bold",
  textAlign: "center",
  width: "auto", // Allows the item to grow/shrink, crucial for 'stretch' value
  minWidth: "70px", // Ensures a minimum width for 'start', 'end', 'center' values
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: 'border-box', // Include padding in width calculations
};

export const justifySelfTemplate: PropertyTemplate = {
  name: "Justify Self",
  controls: [],
  values: ["auto", "start", "end", "center", "stretch"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={commonItemStyles}>Item 1</div>
       <div style={{ ...commonItemStyles, ...style, background: "#84cc16", border: '2px dashed #facc15' }}>
          Target Item
       </div>
       <div style={commonItemStyles}>Item 3</div>
       <div style={commonItemStyles}>Item 4</div>
       <div style={commonItemStyles}>Item 5</div>
       <div style={commonItemStyles}>Item 6</div>
    </div>
  ),
  generate: (v) => ({ justifySelf: v as any }),
  prefix: "justify-self: ",
  parentClass: "block",
};