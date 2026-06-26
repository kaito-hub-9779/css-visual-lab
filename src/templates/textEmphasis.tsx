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
  fontSize: "20px",
  lineHeight: "1.8", // Provide ample space for emphasis marks
  fontFamily: "Arial, sans-serif", // Ensure wide character support
};

export const textEmphasisTemplate: PropertyTemplate = {
  name: "Text Emphasis",
  controls: [],
  values: [
    "none",
    "filled circle",
    "open dot",
    "double-circle red",
    "sesame blue",
    "filled triangle green",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <p style={{ ...style, maxWidth: '450px', textAlign: 'center', padding: '15px', border: '2px solid #38bdf8', borderRadius: '4px' }}>
          This text demonstrates the <strong style={{color: '#fde047'}}>Text Emphasis</strong> property.
          <br />
          日本語の<span style={{ color: '#a78bfa' }}>強調表示</span>
          <br />
          Some words need emphasis!
       </p>
    </div>
  ),
  generate: (v) => ({ textEmphasis: v as any }),
  prefix: "text-emphasis: ",
  parentClass: "text-block",
};