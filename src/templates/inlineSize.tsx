import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

export const inlineSizeTemplate: PropertyTemplate = {
  name: "Inline Size",
  controls: [
    { key: 'val', label: 'Size', min: 50, max: 300, unit: 'px', default: 150 }
  ],
  values: ["100px", "200px", "300px", "50%", "auto"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      {/* Demo Block 1: Horizontal Writing Mode */}
      <div
        style={{
          padding: '20px',
          border: '2px solid #38bdf8',
          borderRadius: '4px',
          background: '#0f172a',
          flexShrink: 0, // Prevent shrinking
          writingMode: 'horizontal-tb',
          ...style, // inlineSize (width in this context) will be applied here
        }}
      >
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          This block has a horizontal writing mode.
          The 'inline-size' property controls its width here.
        </p>
        <p style={{ margin: '10px 0 0', fontSize: '12px', opacity: 0.7 }}>
          (writing-mode: horizontal-tb)
        </p>
      </div>

      {/* Demo Block 2: Vertical Writing Mode */}
      <div
        style={{
          padding: '20px',
          border: '2px solid #a855f7', // Different color for distinction
          borderRadius: '4px',
          background: '#0f172a',
          flexShrink: 0, // Prevent shrinking
          writingMode: 'vertical-lr', // Change writing mode to vertical
          ...style, // inlineSize (height in this context) will be applied here
        }}
      >
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          This block has a vertical writing mode.
          The 'inline-size' property controls its height here.
        </p>
        <p style={{ margin: '10px 0 0', fontSize: '12px', opacity: 0.7 }}>
          (writing-mode: vertical-lr)
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ inlineSize: v as any }),
  prefix: "inline-size: ",
  parentClass: "block",
};