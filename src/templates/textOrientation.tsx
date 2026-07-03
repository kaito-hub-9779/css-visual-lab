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

export const textOrientationTemplate: PropertyTemplate = {
  name: "Text Orientation",
  controls: [],
  values: ["mixed", "upright", "sideways"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          writingMode: "vertical-rl", // Crucial for text-orientation demo
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #64748b",
          borderRadius: "4px",
          padding: "15px",
        }}
      >
        <p
          style={{
            ...style, // textOrientation will be applied here
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: "24px",
            lineHeight: "1.2",
            color: "#e2e8f0",
            border: "2px dashed #a78bfa",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Hello World! This is a demo for Text Orientation.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ textOrientation: v as any }),
  prefix: "text-orientation: ",
  parentClass: "block",
};