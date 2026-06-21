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
    "1px solid #38bdf8",
    "3px dashed #facc15",
    "5px double #ef4444",
    "4px groove #a78bfa",
    "2px dotted #f472b6",
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          ...style,
          columnCount: 3,
          columnGap: "30px", // Ensure there's space for the rule
          padding: "10px",
          lineHeight: "1.6em",
          maxWidth: "700px",
          background: "#2d3748",
          borderRadius: "6px",
          color: "#cbd5e0",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <p>
          The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Programming is fun, especially when you can visualize CSS
          properties easily.
        </p>
        <p>
          Praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "container",
};