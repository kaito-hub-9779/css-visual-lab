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
  fontFamily: "sans-serif",
};

export const textEmphasisStyleTemplate: PropertyTemplate = {
  name: "Text Emphasis Style",
  controls: [],
  values: [
    "none",
    "dot",
    "circle",
    "double-circle",
    "triangle",
    "sesame",
    "filled dot",
    "open dot",
    "filled circle",
    "open circle",
    "filled sesame",
    "open sesame",
    "filled triangle",
    "open triangle",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          fontSize: "2rem",
          lineHeight: "1.5",
          maxWidth: "450px",
          textAlign: "center",
          textEmphasisColor: "#f87171", // A vibrant color to make emphasis visible
          ...style, // Apply any top-level styles, though textEmphasisStyle should go on the span
        }}
      >
        <p style={{ margin: 0 }}>
          This is a{" "}
          <span
            style={{
              textEmphasisStyle: style.textEmphasisStyle,
            }}
          >
            demonstration
          </span>{" "}
          of text emphasis style.
        </p>
        <p style={{ margin: "10px 0 0" }}>
          Observe how the{" "}
          <span
            style={{
              textEmphasisStyle: style.textEmphasisStyle,
            }}
          >
            emphasis marks
          </span>{" "}
          appear above the text.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ textEmphasisStyle: v as any }),
  prefix: "text-emphasis-style: ",
  parentClass: "typography",
};