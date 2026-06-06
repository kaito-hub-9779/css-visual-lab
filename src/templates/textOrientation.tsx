import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "monospace",
};

export const textOrientationTemplate: PropertyTemplate = {
  name: "Text Orientation",
  controls: [],
  values: ["mixed", "upright", "sideways"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           padding: '20px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           writingMode: 'vertical-rl', // Essential for text-orientation to have an effect
           fontSize: '22px',
           lineHeight: '1.4',
           letterSpacing: '1px',
           fontWeight: 'bold',
           whiteSpace: 'nowrap', // Prevent text from wrapping
           textOrientation: style.textOrientation as React.CSSProperties['textOrientation'], // Apply the property
         }}
       >
          <p style={{ margin: 0, padding: 0 }}>Hello Vertical Text!</p>
          <p style={{ margin: '10px 0 0 0', padding: 0 }}>CSS Property Demo</p>
       </div>
    </div>
  ),
  generate: (v) => ({ textOrientation: v as any }),
  prefix: "text-orientation: ",
  parentClass: "block",
};