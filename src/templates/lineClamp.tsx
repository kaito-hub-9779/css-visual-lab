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

export const lineClampTemplate: PropertyTemplate = {
  name: "Line Clamp",
  controls: [
    { key: "lines", label: "Lines", min: 1, max: 10, unit: "", default: 3 }
  ],
  values: ["1", "2", "3", "4", "5"], // Predefined values for the user to click
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
         padding: '20px',
         border: '2px solid #38bdf8',
         borderRadius: '4px',
         width: '80%', // Constrain width for clamping to be visible
         background: '#2d3748',
         color: '#f8fafc',
         fontSize: '16px',
         lineHeight: '1.5',
         // The 'style' object already contains lineClamp, WebkitLineClamp, overflow, display, WebkitBoxOrient, and textOverflow
         // We spread it to apply all necessary styles for the demo.
         ...style
       }}>
          <p style={{ margin: 0 }}>
            This is a long piece of sample text designed to demonstrate the CSS line-clamp property.
            It allows you to truncate text to a specified number of lines,
            adding an ellipsis at the end to indicate that more content exists.
            This is incredibly useful for responsive designs and card layouts
            where you need to maintain a consistent height for text blocks,
            regardless of the actual content length. Without line-clamp,
            achieving multi-line text truncation effectively requires more
            complex JavaScript or less flexible CSS tricks.
          </p>
       </div>
    </div>
  ),
  generate: (v) => {
    const numLines = parseInt(v, 10);
    return {
      lineClamp: numLines,
      WebkitLineClamp: numLines, // For wider browser compatibility, especially older WebKit browsers
      overflow: 'hidden', // Essential for truncation to occur
      display: '-webkit-box', // Essential for -webkit-line-clamp to work
      WebkitBoxOrient: 'vertical', // Essential for vertical truncation with -webkit-line-clamp
      textOverflow: 'ellipsis', // Ensures an ellipsis is shown for truncated text
    };
  },
  prefix: "line-clamp: ",
  parentClass: "block",
};