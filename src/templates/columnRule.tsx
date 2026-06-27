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
  name: "Multi-Column Rule",
  controls: [],
  values: [
    "none",
    "1px solid #64748b", // Slate 400
    "2px dashed #38bdf8", // Sky 400
    "3px double #a855f7", // Purple 500
    "4px groove #f97316", // Orange 500
    "5px outset #ef4444", // Red 500
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "20px",
          border: "1px solid #334155", // Slate 700
          borderRadius: "4px",
          fontSize: "14px",
          lineHeight: "1.6",
          textAlign: "justify",
          columnCount: 3, // Fixed for demo to show the rule clearly
          gap: "20px", // Ensure there's space for the rule between columns
          ...style, // This will apply the columnRule property
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Curabitur pretium tincidunt lacus. Nulla facilisi. Aenean quam. In
          scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
          Proin ut ligula vel nunc egestas porttitor.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "block",
};