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
  gap: "15px",
  justifyContent: "center",
  alignItems: "flex-start",
};

export const textEmphasisTemplate: PropertyTemplate = {
  name: "Text Emphasis",
  controls: [],
  values: [
    "none",
    "filled circle",
    "open circle",
    "filled dot",
    "open dot",
    "filled triangle",
    "open triangle",
    "filled sesame",
    "open sesame",
    "double-circle #facc15", // Example with custom color
    "dot #38bdf8",         // Example with custom color
    "filled circle red",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <p style={{ margin: 0, fontSize: '18px', color: '#cbd5e1' }}>
         This text demonstrates the <code style={{ color: '#facc15' }}>text-emphasis</code> property.
       </p>
       <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', maxWidth: '600px' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '24px', lineHeight: '1.4', ...style }}>
             新しい言葉には強調記号を付けることがあります。
             <span style={{ backgroundColor: '#2d3748', padding: '0 5px', borderRadius: '3px' }}>
               Important phrases
             </span> can be marked with emphasis dots.
          </p>
          <p style={{ margin: 0, fontSize: '16px', color: '#94a3b8' }}>
            Try different emphasis styles to see how they affect the text.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ textEmphasis: v as any }),
  prefix: "text-emphasis: ",
  parentClass: "block",
};