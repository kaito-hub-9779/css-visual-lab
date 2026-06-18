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
  overflow: "hidden",
};

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           padding: '20px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           width: 'calc(100% - 40px)', // Occupy most of the width for better demo
           maxWidth: '400px', // Prevent it from becoming too wide
           background: '#0d1117',
           fontSize: '14px',
           lineHeight: '1.5',
           overflow: 'auto', // Allow scrolling if content overflows due to 'nowrap'
           boxSizing: 'border-box',
           ...style, // The whiteSpace property will be applied here
         }}
       >
          This is a sentence with    multiple   spaces.
          And a manual line
          break.

          Another paragraph to show how a very_long_unbreakable_word_that_might_cause_overflow behaves.
          Visual representation of white-space.
       </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};