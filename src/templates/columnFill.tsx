import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  fontSize: "14px",
  lineHeight: "1.5",
};

export const columnFillTemplate: PropertyTemplate = {
  name: "Column Fill",
  controls: [],
  values: ["auto", "balance"],
  preview: (style) => {
    const isAuto = style.columnFill === 'auto';
    const columnContainerSpecificStyles: React.CSSProperties = {
      border: '2px solid #38bdf8',
      borderRadius: '4px',
      padding: '15px',
      columnCount: 3, // Essential for demonstrating column-fill
      columnGap: '20px',
      // Dynamically adjust height and overflow to clearly show the difference
      height: isAuto ? '150px' : 'auto', // For 'auto', fixed height shows sequential filling and potential cutoff
      overflow: isAuto ? 'hidden' : 'visible', // Hide overflow for 'auto' to emphasize it not filling all space
      ...style, // The actual columnFill property is applied here
    };

    return (
      <div style={{ ...demoContainerStyles, display: 'block', padding: '30px' }}>
        <p style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold' }}>Multi-column Layout Demo:</p>
        <div style={columnContainerSpecificStyles}>
          <p style={{ margin: '0 0 10px 0' }}>
            This is some sample text to demonstrate the <code>column-fill</code> property.
            When set to <code>auto</code>, columns are filled sequentially. If the container has a fixed height, content might not be evenly distributed, potentially leaving some columns empty or overflowing.
          </p>
          <p style={{ margin: '0 0 10px 0' }}>
            With <code>balance</code>, the browser tries to distribute the content equally across all columns, making them approximately the same height. This ensures a more aesthetically pleasing and readable layout, especially when the amount of content is unpredictable.
          </p>
          <p style={{ margin: '0' }}>
            Here is some more text to fill up the columns and make the effect of <code>column-fill</code> more apparent.
            It's a subtle but important property for controlling how multi-column layouts behave in CSS.
          </p>
        </div>
        <p style={{ marginTop: '15px', color: '#cbd5e1' }}>
          {isAuto ?
            "Observe: 'auto' fills columns one by one, potentially cutting content or leaving trailing columns empty with a fixed height." :
            "Observe: 'balance' evenly distributes content across all columns, creating equal heights."
          }
        </p>
      </div>
    );
  },
  generate: (v) => ({ columnFill: v as any }),
  prefix: "column-fill: ",
  parentClass: "block",
};