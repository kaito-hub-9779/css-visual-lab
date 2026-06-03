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
  alignItems: "center",
  justifyContent: "center",
};

export const outlineOffsetTemplate: PropertyTemplate = {
  name: "Outline Offset",
  controls: [
    { key: "offset", label: "Offset", min: -20, max: 20, unit: "px", default: 5 },
  ],
  values: ["0px", "5px", "10px", "-5px"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p style={{ marginBottom: "20px", fontSize: "0.9em", textAlign: "center", maxWidth: "400px" }}>
        The <code style={{ color: "#bae6fd" }}>outline-offset</code> property sets the amount of space between an outline and the edge or border of an element.
        It can be positive (outwards) or negative (inwards).
      </p>
      <div
        style={{
          width: "180px",
          height: "100px",
          background: "#4f46e5", // Deep purple
          border: "4px solid #818cf8", // Lighter purple border
          borderRadius: "8px",
          outline: "3px solid #f97316", // Vibrant orange outline
          ...style, // outlineOffset will be applied here
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1em",
          fontWeight: "bold",
          color: "#f8fafc",
          textAlign: "center",
        }}
      >
        Element Box
      </div>
    </div>
  ),
  generate: (v) => ({ outlineOffset: v as any }),
  prefix: "outline-offset: ",
  parentClass: "block",
};