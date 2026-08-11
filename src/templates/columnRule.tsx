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
  justifyContent: "center",
  alignItems: "center",
  gap: "15px", // Spacing between the demo box and its description
};

export const columnRuleTemplate: PropertyTemplate = {
  name: "Column Rule",
  controls: [],
  values: [
    "none",
    "1px solid #38bdf8",
    "3px dotted #f87171",
    "2px double #a78bfa",
    "5px outset #facc15"
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      {/* This inner div is where the multi-column layout and the column-rule property will be applied */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "180px", // Fixed height to ensure content flows into columns
          padding: "15px",
          border: "2px solid #3e4a5d",
          borderRadius: "4px",
          backgroundColor: "#2a3547",
          columnCount: 3, // Crucial for multi-column layout
          columnGap: "20px", // Space between columns, allowing for the rule to be visible
          overflow: "hidden", // Prevents scrollbars if text overflows
          ...style, // Apply the columnRule property here
        }}
      >
        <p style={{ margin: 0, lineHeight: "1.6", fontSize: "0.9em" }}>
          The <code>column-rule</code> property is a shorthand for setting the width, style, and color of the rule (a vertical line) between columns in a multi-column layout. It's very similar to the <code>border</code> property but applies specifically to the dividers between columns. This property allows you to visually separate your content columns, enhancing readability and design.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div style={{ fontSize: "0.85em", color: "#94a3b8" }}>
        Visual representation of <code>column-rule</code>
      </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "block",
};