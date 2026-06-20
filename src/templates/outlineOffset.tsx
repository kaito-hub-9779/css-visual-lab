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
};

export const outlineOffsetTemplate: PropertyTemplate = {
  name: "Outline Offset",
  controls: [
    { key: "val", label: "Offset", min: -20, max: 30, unit: "px", default: 5 },
  ],
  values: ["5px", "10px", "-3px", "0px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           padding: "20px",
           border: "2px solid #38bdf8",
           borderRadius: "4px",
           outline: "3px solid #ef4444", // A distinct red outline
           transition: "outline-offset 0.2s ease-out", // Smooth transition for demo
           ...style, // outlineOffset will be applied here
         }}
       >
          Adjust the outline's position
       </div>
    </div>
  ),
  generate: (v) => ({ outlineOffset: v as any }),
  prefix: "outline-offset: ",
  parentClass: "block",
};