import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  // Properties to enable multi-column layout for the demo
  columnCount: 3,
  columnGap: "20px",
  lineHeight: "1.6",
};

export const columnSpanTemplate: PropertyTemplate = {
  name: "Column Span",
  controls: [],
  values: ["none", "all"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div style={{ ...style, padding: '10px', border: '2px dashed #60a5fa', marginBottom: '20px', backgroundColor: 'rgba(96, 165, 250, 0.1)' }}>
        <h3 style={{ margin: 0, color: '#f8fafc' }}>
          This Element Reacts to Column Span
        </h3>
        <p style={{ margin: '5px 0 0', fontSize: '0.9em' }}>
          When `column-span: all`, this block will span across all columns.
          When `column-span: none`, it will occupy only one column.
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Eget felis eget nunc lobortis mattis aliquam. Commodo odio aenean sed adipiscing diam. In hac habitasse platea dictumst vestibulum. Mauris vitae ultricies leo integer malesuada nunc vel.
      </p>
    </div>
  ),
  generate: (v) => ({ columnSpan: v as any }),
  prefix: "column-span: ",
  parentClass: "element",
};