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
  overflow: "hidden", // Prevents demo container itself from scrolling if inner content overflows
};

const demoText = `This is some    text with   multiple spaces.
And a line break.

Thisisaverylongwordwithoutanyspacesinitthatshouldpotentiallybreakandoverflow.`;

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
            ...style, // Applies the whiteSpace property directly
            padding: '20px',
            border: '2px solid #38bdf8',
            borderRadius: '4px',
            background: '#2c3e50',
            maxWidth: '300px', // Limit width to clearly demonstrate wrapping and overflow
            minWidth: '100px', // Ensure it doesn't collapse too much
            // Add scrollbars if the content overflows due to nowrap or pre,
            // otherwise hide overflow to prevent unwanted scrollbars
            overflow: (style.whiteSpace === 'nowrap' || style.whiteSpace === 'pre') ? 'auto' : 'hidden',
        }}>
          {demoText}
       </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};