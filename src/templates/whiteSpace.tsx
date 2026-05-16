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
};

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <p style={{
         ...style, // The whiteSpace property will be applied here
         padding: '15px',
         border: '2px solid #38bdf8',
         borderRadius: '4px',
         backgroundColor: '#2d3748', // Slightly different background for the text block
         maxWidth: '400px', // Limit width to ensure wrapping happens
         fontFamily: 'monospace', // To better show "pre" styles
         fontSize: '14px',
         lineHeight: '1.4',
         boxSizing: 'border-box',
       }}>
          Hello,  this is an example text.
          It contains    multiple spaces
          and also    new lines.
              Let's see how white-space handles it.    
       </p>
       <p style={{
         fontSize: '12px',
         color: '#cbd5e0',
         marginTop: '10px',
         textAlign: 'center',
       }}>
          (Try resizing your browser window for 'nowrap' effect)
       </p>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};