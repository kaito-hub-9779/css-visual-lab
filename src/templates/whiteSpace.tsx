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
  overflow: "auto", // Allow scrolling for nowrap
};

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', maxWidth: '300px', ...style }}>
          <p>
            This is a sample text to demonstrate the effect of 'white-space'.
            
                Notice            how    multiple    spaces
                and line breaks
            are handled differently by each value.
            
            This text illustrates whitespace collapsing and wrapping.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};