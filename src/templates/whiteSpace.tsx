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

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          ...style, // The whiteSpace property will be applied here
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          backgroundColor: "#2c3e50",
          maxWidth: "300px", // Limit width to clearly show wrapping/no wrapping
          overflow: "auto", // Handle potential overflow for 'nowrap'
          lineHeight: "1.5", // Ensure readability
        }}
      >
        <p>
          This is a paragraph with    multiple spaces.
          And also some line breaks to see how the property handles them.
          It's an important property for controlling
          text flow and
          rendering.
        </p>
        <p style={{ marginTop: "15px", fontSize: "0.8em", color: "#94a3b8" }}>
          Visual representation of white-space
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};