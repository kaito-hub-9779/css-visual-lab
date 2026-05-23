import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        padding: '20px',
        border: '2px solid #38bdf8',
        borderRadius: '4px',
        width: '250px', // Fixed width to demonstrate wrapping
        minHeight: '150px', // Ensure enough height for content
        background: '#0f172a', // Slightly different background for the inner box
        // Add scroll for nowrap/pre to prevent layout issues when content overflows
        overflowX: (style.whiteSpace === 'nowrap' || style.whiteSpace === 'pre') ? 'auto' : 'hidden',
        overflowY: 'hidden', // No vertical scroll needed for this demo
        ...style // Apply the whiteSpace property here
      }}>
        <p style={{ margin: 0 }}>
          This is some example text to demonstrate the   white-space   CSS property. It controls how whitespace characters
          and line breaks are handled. This line has intentional    multiple    spaces.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};