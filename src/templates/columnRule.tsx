import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const columnRuleTemplate: PropertyTemplate = {
  name: "Column Rule",
  controls: [],
  values: [
    "none",
    "1px solid #38bdf8",
    "2px dashed #f87171",
    "3px double #a78bfa",
    "4px groove #facc15",
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          ...style, // columnRule will be applied here
          columnCount: 3,
          columnGap: "20px", // Add some gap for better visibility
          padding: "10px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          textAlign: "justify",
          lineHeight: "1.5",
        }}
      >
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p style={{ margin: "1em 0 0 0" }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p style={{ margin: "1em 0 0 0" }}>
          Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque
          nisl consectetur et. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac
          cursus commodo.
        </p>
      </div>
      <p style={{ marginTop: "20px", fontSize: "0.85em", opacity: 0.7 }}>
        Visual representation of columnRule: This text flows into multiple
        columns, with a rule appearing between them.
      </p>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "block",
};