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
};

export const hyphensTemplate: PropertyTemplate = {
  name: "Hyphens",
  controls: [],
  values: ["none", "manual", "auto"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div 
         style={{ 
           ...style, // The `hyphens` property will be applied here
           width: '180px', // Constrain width to force text wrapping
           padding: '15px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           backgroundColor: '#2d3748', // Darker background for the text block
           color: '#f8fafc',
           fontSize: '16px',
           lineHeight: '1.4',
           wordBreak: 'normal', // Ensure default word breaking behavior that allows hyphenation
           textAlign: 'justify', // Make hyphenation more visible by attempting to fill lines
         }}
         lang="en" // Important for `hyphens: auto` to work in browsers
       >
          <p style={{ margin: 0 }}>
             This is a very long word that will demonstrate how 
             pneumonoultramicroscopicsilicovolcanoconiosis
             can be broken across lines. Understanding browser hyphenation 
             is crucial for creating aesthetically pleasing and readable 
             text layouts in responsive designs.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ hyphens: v as any }),
  prefix: "hyphens: ",
  parentClass: "block",
};