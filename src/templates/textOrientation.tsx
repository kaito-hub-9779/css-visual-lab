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
  fontSize: "2rem",
  fontFamily: "sans-serif",
  // Crucial for text-orientation to have an effect
  writingMode: "vertical-rl",
  height: "250px", // Ensure enough height for vertical text
};

export const textOrientationTemplate: PropertyTemplate = {
  name: "Text Orientation",
  controls: [],
  values: ["mixed", "upright", "sideways"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div
        style={{
          padding: "15px 10px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          backgroundColor: "rgba(56, 189, 248, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "min-content", // Allow the width to adjust to the content in vertical mode
          whiteSpace: "nowrap", // Prevent text from wrapping horizontally
        }}
      >
        <span>
          Hello World!
          <br />
          123 ABC
        </span>
      </div>
    </div>
  ),
  generate: (v) => ({ textOrientation: v as any }),
  prefix: "text-orientation: ",
  parentClass: "block",
};