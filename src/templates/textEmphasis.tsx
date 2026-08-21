import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const textEmphasisTemplate: PropertyTemplate = {
  name: "Text Emphasis",
  controls: [],
  values: [
    "none",
    "filled dot #38bdf8",
    "open circle red",
    "filled sesame green",
    "double-circle orange",
    "dotted grey",
    "triangle magenta"
  ],
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          lineHeight: "1.8", // Increased lineHeight for better emphasis mark visibility
          maxWidth: "70%",
          textAlign: "center",
          border: "2px dashed #38bdf8",
          padding: "20px",
          borderRadius: "8px",
          ...style, // The actual textEmphasis property is applied here
        }}
      >
        This is some sample text to demonstrate the{" "}
        <strong style={{ color: "#38bdf8" }}>text-emphasis</strong> CSS
        property. It adds small marks next to each character, often used in
        East Asian typography for emphasis.
      </p>
    </div>
  ),
  generate: (v) => ({ textEmphasis: v as any }),
  prefix: "text-emphasis: ",
  parentClass: "block",
};