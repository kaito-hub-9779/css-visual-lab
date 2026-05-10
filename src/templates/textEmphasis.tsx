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
  justifyContent: "center",
  alignItems: "center",
};

export const textEmphasisTemplate: PropertyTemplate = {
  name: "Text Emphasis",
  controls: [],
  values: [
    "none",
    "filled circle",
    "open dot",
    "filled triangle blue",
    "open double-circle green",
    "sesame red",
    "dot",
    "★ yellow",
    "▲ fuchsia",
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p style={{ marginBottom: "15px", fontSize: "1.1em", maxWidth: "80%", textAlign: "center", lineHeight: "1.5" }}>
        This is normal text without emphasis.
      </p>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          background: "#2c3748",
          maxWidth: "80%",
          textAlign: "center",
        }}
      >
        <p style={{ ...style, fontSize: "1.4em", lineHeight: "1.5", margin: 0 }}>
          This is <span style={{ textDecoration: 'underline', textDecorationColor: '#f8fafc' }}>important</span> text with emphasis marks.
        </p>
        <p style={{ ...style, fontSize: "1.4em", lineHeight: "1.5", margin: "10px 0 0 0" }}>
          Highlighting <span style={{ textDecoration: 'underline', textDecorationColor: '#f8fafc' }}>key points</span> with CSS text emphasis.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ textEmphasis: v as any }),
  prefix: "text-emphasis: ",
  parentClass: "block",
};