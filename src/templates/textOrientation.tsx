import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  // Base styles for text-orientation demo: must be in a vertical writing mode
  writingMode: "vertical-rl",
  height: "250px", // Provide sufficient height for vertical text layout
  display: "flex", // Use flexbox for centering content within the vertical flow
  alignItems: "center", // Centers content along the cross axis (horizontal for vertical-rl)
  justifyContent: "center", // Centers content along the main axis (vertical for vertical-rl)
  fontSize: "24px",
  lineHeight: "1.2",
  letterSpacing: "2px",
};

export const textOrientationTemplate: PropertyTemplate = {
  name: "Text Orientation",
  controls: [],
  values: ["mixed", "upright", "sideways"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
       <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', textAlign: 'center' }}>
          <p style={{ margin: 0 }}>
             Hello World!
          </p>
          <p style={{ margin: '10px 0 0' }}>
             文字の向き
          </p>
          <p style={{ margin: '10px 0 0' }}>
             12345
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ textOrientation: v as any }),
  prefix: "text-orientation: ",
  parentClass: "block",
};