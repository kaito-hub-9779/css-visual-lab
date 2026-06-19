import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  fontFamily: "sans-serif",
  fontSize: "17px",
  lineHeight: "1.6",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
};

export const textEmphasisTemplate: PropertyTemplate = {
  name: "Text Emphasis",
  controls: [],
  values: [
    "none",
    "filled circle",
    "open dot",
    "double-circle red",
    "filled sesame blue",
    "'✨' yellow"
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{
        padding: '20px',
        border: '2px solid #38bdf8',
        borderRadius: '4px',
        maxWidth: '500px',
        textAlign: 'center',
        background: '#0f172a',
      }}>
        <h3 style={{ margin: 0, marginBottom: '10px', fontSize: '1.3em', fontWeight: 'bold' }}>
          Visualizing Text Emphasis
        </h3>
        <p style={{ margin: 0 }}>
          This is a paragraph of <strong style={{ color: '#a78bfa' }}>sample text</strong> to illustrate
          the <code>text-emphasis</code> property. It adds small <span style={{ color: '#facc15' }}>decorative marks</span>
          next to the characters. These marks can be styled with different <span style={{ color: '#f472b6' }}>shapes and colors</span>.
          Even <span style={{ color: '#2dd4bf' }}>custom characters</span> can be used for emphasis.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ textEmphasis: v as any }),
  prefix: "text-emphasis: ",
  parentClass: "block",
};