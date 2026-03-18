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

export const textUnderlineOffsetTemplate: PropertyTemplate = {
  name: "Text Underline Offset",
  controls: [],
  values: ["auto", "2px", "0.1em", "0.5em", "5px"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p
        style={{
          padding: '20px',
          border: '2px dashed #38bdf8',
          borderRadius: '4px',
          textDecoration: 'underline', // Essential for the property to have an effect
          ...style, // This will apply the textUnderlineOffset property
          fontSize: '24px',
          lineHeight: '1.5',
          textAlign: 'center',
          maxWidth: '80%',
        }}
      >
        This is a demo text to illustrate the <b>text-underline-offset</b> property. Observe how the underline position changes.
      </p>
    </div>
  ),
  generate: (v) => ({ textUnderlineOffset: v as any }),
  prefix: "text-underline-offset: ",
  parentClass: "text",
};