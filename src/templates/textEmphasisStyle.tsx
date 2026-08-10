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

export const textEmphasisStyleTemplate: PropertyTemplate = {
  name: "Text Emphasis Style",
  controls: [],
  values: [
    "none",
    "dot",
    "circle",
    "sesame",
    "triangle",
    "double-circle",
    "filled dot",
    "open circle",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
           padding: '20px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           maxWidth: '450px',
           backgroundColor: '#2d3748',
           display: 'flex',
           flexDirection: 'column',
           gap: '15px',
           fontSize: '1.1em',
           lineHeight: '1.6',
           boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
       }}>
          <p style={{
              margin: 0,
              ...style,
              textEmphasisColor: '#a78bfa', // Explicitly set color for clarity
              textEmphasisPosition: 'over right', // Default for horizontal-tb, ensures consistency
              writingMode: 'horizontal-tb',
          }}>
              This is a <strong style={{ fontWeight: 'normal' }}>text example</strong> demonstrating different emphasis styles on written content.
          </p>
          <p style={{
              margin: 0,
              ...style,
              textEmphasisColor: '#a78bfa',
              textEmphasisPosition: 'left', // Appropriate position for vertical-rl
              writingMode: 'vertical-rl',
              height: '120px', // Give some height for vertical text
              display: 'inline-block', // Required for vertical writing mode to respect height
          }}>
              This is a <strong style={{ fontWeight: 'normal' }}>text example</strong> demonstrating different emphasis styles on written content.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ textEmphasisStyle: v as any }),
  prefix: "text-emphasis-style: ",
  parentClass: "text",
};