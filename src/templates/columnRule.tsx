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

export const columnRuleTemplate: PropertyTemplate = {
  name: "Column Rule",
  controls: [],
  values: [
    "none",
    "1px solid #6366f1",
    "2px dotted #facc15",
    "3px double #10b981",
    "4px dashed #ef4444",
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          ...style, // columnRule will be applied here
          columnCount: 3, // Essential for demonstrating column-rule
          columnGap: "20px",
          width: "100%",
          maxWidth: "700px",
          padding: "20px",
          background: "#2d3748",
          borderRadius: "6px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          lineHeight: "1.6",
          fontSize: "0.95em",
        }}
      >
        <p style={{ margin: "0 0 10px 0", color: "#e2e8f0" }}>
          The quick brown fox jumps over the lazy dog. This text is split into
          multiple columns to demonstrate the `column-rule` property. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <p style={{ margin: "0", color: "#e2e8f0" }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "block",
};