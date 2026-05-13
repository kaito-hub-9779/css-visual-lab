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
  boxSizing: "border-box",
};

export const textIndentTemplate: PropertyTemplate = {
  name: "Text Indent",
  controls: [],
  values: ["0", "20px", "5%", "-30px", "2em"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, alignItems: "flex-start", justifyContent: "flex-start" }}>
       <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', maxWidth: '450px', backgroundColor: '#2d3748', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', ...style }}>
            This is a paragraph of text designed to clearly illustrate the effect of the <code style={{ color: '#facc15' }}>text-indent</code> CSS property.
            It controls the indentation of the first line of text within a block-level element.
            Observe how the first line shifts horizontally based on the selected value, while subsequent lines gracefully maintain their original alignment to the left edge. This property is crucial for creating well-structured and readable typographic layouts.
          </p>
       </div>
       <p style={{ margin: '0', fontSize: '14px', color: '#cbd5e1', maxWidth: '450px' }}>
        Adjust the <code style={{ color: '#facc15' }}>text-indent</code> value to see the first line of the paragraph indent.
       </p>
    </div>
  ),
  generate: (v) => ({ textIndent: v as any }),
  prefix: "text-indent: ",
  parentClass: "block",
};