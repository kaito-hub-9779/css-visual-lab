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
  fontFamily: "sans-serif",
};

export const hyphensTemplate: PropertyTemplate = {
  name: "Text Hyphenation",
  controls: [],
  values: ["none", "auto"], // 'manual' value would require adding soft hyphens, which is not suitable for this simple demo template.
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div 
         style={{ 
            width: '220px', // Constrain width to force line breaks and show hyphenation
            padding: '15px', 
            border: '2px solid #38bdf8', 
            borderRadius: '4px',
            lineHeight: '1.4',
            fontSize: '15px',
            backgroundColor: '#2d3748',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            wordBreak: 'normal', // Ensure default word breaking behavior, allowing hyphens to apply
            ...style, // The 'hyphens' property will be applied here
         }}
       >
          <p lang="en" style={{ margin: 0, textAlign: 'justify' }}>
            This demonstrates how long words like <span style={{ fontWeight: 'bold' }}>supercalifragilisticexpialidocious</span> can be broken with hyphens.
            When enabled, words will break at appropriate points to better fit the line, preventing excessive whitespace.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ hyphens: v as any }),
  prefix: "hyphens: ",
  parentClass: "block",
};