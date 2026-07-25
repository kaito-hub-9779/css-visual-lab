import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  fontFamily: "monospace", // Use monospace to clearly distinguish spaces
  fontSize: "14px",
  lineHeight: "1.4",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const demoTextContent = `This is some    text with  extra  spaces.

And a
line break.

Let's see how different white-space values affect it within this blue box.`;

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{ ...style, padding: '15px', border: '2px dashed #38bdf8', borderRadius: '4px', maxWidth: '300px', backgroundColor: '#2d3748', overflow: 'auto', boxSizing: 'border-box' }}>
          {demoTextContent}
       </div>
       <p style={{ fontSize: '0.8em', opacity: 0.8, maxWidth: '300px' }}>
        Observe how spaces, tabs, and line breaks are handled inside the dashed box.
       </p>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};