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
  gap: "40px", // Increased gap for better separation
  fontFamily: "monospace", // Better for observing character alignment
};

export const textOrientationTemplate: PropertyTemplate = {
  name: "Text Orientation",
  controls: [],
  values: ["mixed", "upright", "sideways"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
           padding: '20px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           writingMode: 'vertical-rl', // Essential for text-orientation to be visible
           fontSize: '28px', // Larger font for clarity
           lineHeight: '1.2',
           width: 'fit-content', // Restrict width to make text wrap vertically
           height: '180px', // Fixed height to demonstrate vertical alignment
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center', // Center text vertically within its box
           alignItems: 'center', // Center text horizontally within its box
           ...style, // This will apply textOrientation (e.g., { textOrientation: 'upright' })
       }}>
          Apply this text orientation.
       </div>

       <div style={{
           padding: '20px',
           border: '2px solid #6ee7b7',
           borderRadius: '4px',
           writingMode: 'vertical-rl', // Same writing mode for comparison
           fontSize: '28px',
           lineHeight: '1.2',
           width: 'fit-content',
           height: '180px',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
           textOrientation: 'mixed', // Explicit baseline for comparison
       }}>
          Default/Mixed text orientation.
       </div>
    </div>
  ),
  generate: (v) => ({ textOrientation: v as any }),
  prefix: "text-orientation: ",
  parentClass: "block",
};