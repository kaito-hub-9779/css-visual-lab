import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const textDecorationThicknessTemplate: PropertyTemplate = {
  name: "Text Decoration Thickness",
  controls: [],
  values: ["1px", "2px", "3px", "5px", "0.1em", "0.2em", "auto"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
           padding: '20px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           fontSize: '2rem',
           fontFamily: 'serif',
           textDecoration: 'underline', // Crucial to visualize the thickness
           textDecorationColor: '#fde047', // Make it stand out
           ...style // Apply the textDecorationThickness from the demo values
       }}>
          Text decoration thickness demo
       </div>
    </div>
  ),
  generate: (v) => ({ textDecorationThickness: v as any }),
  prefix: "text-decoration-thickness: ",
  parentClass: "block",
};