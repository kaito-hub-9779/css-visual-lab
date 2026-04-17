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
    { key: "value", label: "Offset", min: -20, max: 20, unit: "px", default: 5 },
  ],
  values: ["0px", "5px", "-5px", "10px", "20px", "-10px"],
  preview: (propertyStyle) => (
    <div style={demoContainerStyles}>
      <p style={{ marginBottom: "25px", textAlign: "center", maxWidth: "80%" }}>
        Adjusts the space between an element's border box and its outline.
        Negative values place the outline *inside* the border.
      </p>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          outline: "2px dashed #f59e0b", // Ensure an outline is present for the offset to apply
          ...propertyStyle, // This merges { outlineOffset: '...' } directly onto this element
        }}
      >
        Visual representation of outline-offset
      </div>
    </div>
  ),
  generate: (v) => ({ outlineOffset: v as any }),
  prefix: "outline-offset: ",
  parentClass: "block",
};