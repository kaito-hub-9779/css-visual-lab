import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "15px",
};

export const textEmphasisTemplate: PropertyTemplate = {
  name: "Text Emphasis",
  controls: [],
  values: [
    "none",
    "filled circle",
    "open dot",
    "double-circle solid red",
    "filled triangle blue",
    "open sesame green",
    "• lightblue" // Custom character and color example
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
       <h3 style={{ margin: 0, fontSize: '1.4em', color: '#38bdf8' }}>
          Text Emphasis Property Demo
       </h3>
       <p style={{ 
          fontSize: '1.1em', 
          lineHeight: '1.6', 
          maxWidth: '500px',
          margin: 0,
          padding: '10px 20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '5px',
          backgroundColor: 'rgba(0,0,0,0.2)',
          // The actual textEmphasis style will be applied via the `style` prop passed to the parent div
       }}>
          This text demonstrates the <code style={{ color: '#facc15' }}>text-emphasis</code> property. 
          It adds small marks alongside the text to highlight specific words or phrases, 
          often used in East Asian typography. Watch how the emphasis marks appear above each character.
       </p>
    </div>
  ),
  generate: (v) => ({ textEmphasis: v as any }),
  prefix: "text-emphasis: ",
  parentClass: "block",
};