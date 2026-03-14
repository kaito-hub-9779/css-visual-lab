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
  fontFamily: "Arial, sans-serif",
};

export const textUnderlineOffsetTemplate: PropertyTemplate = {
  name: "Text Underline Offset",
  controls: [
    { key: 'val', label: 'Offset', min: -5, max: 15, unit: 'px', default: 2 }
  ],
  values: ["auto", "0px", "2px", "4px", "8px", "12px", "-2px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <p style={{
         fontSize: '2rem',
         fontWeight: 'bold',
         textDecoration: 'underline',
         textDecorationColor: '#38bdf8', // A vibrant blue for clarity
         textDecorationThickness: '2px', // Make the underline more visible
         padding: '0 20px',
         lineHeight: '1.5',
         textAlign: 'center',
         ...style // textUnderlineOffset will be applied here
       }}>
          <span>This text has an underline.</span><br />
          <span>Observe its vertical position.</span><br />
          <span>The offset changes here!</span>
       </p>
    </div>
  ),
  generate: (v) => ({ textUnderlineOffset: v as any }),
  prefix: "text-underline-offset: ",
  parentClass: "block",
};