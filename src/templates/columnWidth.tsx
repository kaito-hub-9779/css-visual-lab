import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'block', // Ensure it behaves as a block for multi-column layout
  columnGap: '20px', // Add some gap between columns for clarity
};

export const columnWidthTemplate: PropertyTemplate = {
  name: "Column Width",
  controls: [
    { key: 'width', label: 'Width', min: 50, max: 400, unit: 'px', default: 150 },
  ],
  values: ["auto", "100px", "150px", "200px", "250px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
       <div style={{ padding: '10px', border: '1px dashed #38bdf8', borderRadius: '4px', overflow: 'hidden' }}>
          <p style={{ margin: 0, lineHeight: '1.5', fontSize: '14px' }}>
            This text demonstrates the `column-width` CSS property.
            It defines the ideal minimum width for columns in a multi-column layout.
            The browser will create as many columns as will fit into the available
            space, making sure that the column width is at least the specified value.
            If `column-count` is also specified, it works in conjunction with
            `column-width` to determine the exact number and width of columns.
            However, when `column-width` is used alone, the number of columns will
            automatically adjust based on the available space and the minimum desired width.
            This makes it a flexible way to manage content flow, especially in responsive designs.
            Observe how the number of columns changes as you adjust the width,
            or if the container itself were to resize.
            The goal is to maintain a readable column width while utilizing space efficiently.
            The visual representation within this dashed border shows how content
            is distributed across the generated columns.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ columnWidth: v as any }),
  prefix: "column-width: ",
  parentClass: "block",
};