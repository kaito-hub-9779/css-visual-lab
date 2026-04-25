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
    "1px solid #6366f1", // Indigo
    "2px dotted #facc15", // Amber
    "3px double #ef4444", // Red
    "4px groove #22c55e", // Green
    "5px dashed #a855f7", // Purple
    "none",
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          ...style, // columnRule will be applied here
          columnCount: 3, // Fixed for demo to clearly show column-rules
          columnGap: "30px", // Increased gap to make room for rule
          padding: "20px",
          backgroundColor: "#2a3447", // Slightly lighter background for the content area
          borderRadius: "6px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          maxWidth: "800px",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        <p>
          The `column-rule` property is a shorthand property that sets the width, style, and color of the rule (a vertical line) between columns in a multi-column layout. It does not take up any space within the columns themselves, instead, it is drawn in the middle of the column gap.
        </p>
        <p>
          This demo illustrates how different `column-rule` values alter the appearance of the separators between content columns. Notice how the rule is drawn precisely between the columns without affecting the content flow or column width.
        </p>
        <p>
          CSS multi-column layout provides a flexible way to divide content into multiple columns, similar to newspaper layouts. The `column-rule` enhances readability and visual separation, making it easier to distinguish between adjacent blocks of text.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "container",
};