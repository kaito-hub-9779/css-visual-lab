import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const columnRuleTemplate: PropertyTemplate = {
  name: "Column Rule",
  controls: [],
  values: [
    "1px solid #38bdf8",
    "2px dashed #facc15",
    "4px double #ef4444",
    "0.5rem groove #a78bfa",
    "none",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           padding: '15px',
           background: '#2d3748',
           borderRadius: '6px',
           maxWidth: '600px',
           width: '100%',
           columnCount: 3,
           columnGap: '25px', // Ensure enough gap for the rule to be visible
           textAlign: 'justify',
           lineHeight: '1.5',
           ...style, // Apply the columnRule property from the style prop
         }}
       >
          <p style={{ margin: '0 0 10px 0' }}>
            The `column-rule` property is a shorthand for setting all the column-rule properties at once.
            It allows you to define a line between columns in a multi-column layout.
            You can specify its width, style, and color to create a clear visual separator.
          </p>
          <p style={{ margin: '0 0 10px 0' }}>
            This paragraph contains sample text to demonstrate how content flows across multiple columns.
            When the `column-rule` property is applied, a visual separator appears between these columns,
            making it easier to distinguish the content in each column and improving readability.
          </p>
          <p style={{ margin: '0' }}>
            It's a powerful tool for enhancing visual organization in magazine-like layouts or any design
            where content is distributed into multiple columns. Experiment with different values to see
            how the column rule changes its appearance!
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "block",
};