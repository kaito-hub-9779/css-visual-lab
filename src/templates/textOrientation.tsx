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

export const textOrientationTemplate: PropertyTemplate = {
  name: "Text Orientation",
  controls: [],
  values: ["mixed", "upright", "sideways"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          padding: "15px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          backgroundColor: "#2c3e50",
          width: "max-content", // Allow width to adjust to vertical content
          height: "180px", // Fixed height for a clear vertical text area
          display: "flex",
          flexDirection: "column", // Arrange lines vertically
          justifyContent: "center",
          alignItems: "center",
          writingMode: "vertical-rl", // Essential for text-orientation to take effect
          textAlign: "center",
          fontSize: "1.2em",
          lineHeight: "1.3",
          fontFamily: "sans-serif",
          whiteSpace: "nowrap", // Prevent text from wrapping horizontally
          ...style, // The textOrientation property will be applied here
        }}
      >
        <p style={{ margin: "5px 0", padding: 0 }}>
          Hello World!
        </p>
        <p style={{ margin: "5px 0", padding: 0 }}>
          CSS Property
        </p>
        <p style={{ margin: "5px 0", padding: 0, fontFamily: 'serif' }}>
          文字の向き
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ textOrientation: v as any }),
  prefix: "text-orientation: ",
  parentClass: "block",
};