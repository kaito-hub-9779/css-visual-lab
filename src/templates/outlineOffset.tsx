import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "40px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  // Base outline to demonstrate the offset property
  outline: "4px solid #38bdf8",
  outlineStyle: "solid", // Ensure outline style is visible
};

export const outlineOffsetTemplate: PropertyTemplate = {
  name: "Outline Offset",
  controls: [
    { key: "offset", label: "Offset", min: -20, max: 20, unit: "px", default: 5 },
  ],
  values: ["0px", "5px", "10px", "-5px", "15px", "-10px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
       {/* demo content that clearly illustrates the property */}
       <div style={{ padding: '20px', background: '#38bdf8', borderRadius: '4px', color: '#1a2332', fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center' }}>
          This element has an outline
          <br />
          and its offset is applied here.
       </div>
    </div>
  ),
  generate: (v) => ({ outlineOffset: v as any }),
  prefix: "outline-offset: ",
  parentClass: "block",
};