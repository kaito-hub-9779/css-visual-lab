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

export const textWrapTemplate: PropertyTemplate = {
  name: "Text Wrap",
  controls: [],
  values: ["wrap", "nowrap", "balance", "pretty"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{ 
          ...style, 
          maxWidth: '320px', 
          padding: '20px',
          border: '2px solid #38bdf8',
          borderRadius: '6px',
          backgroundColor: '#2d3748',
          lineHeight: '1.5',
          fontSize: '16px',
          textAlign: 'center', // Helps to visually demonstrate 'balance' effect
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}>
          This is a long sentence that clearly demonstrates how the text-wrap property influences line breaks and text flow within a fixed-width container. The 'balance' value aims to create more visually appealing and evenly distributed lines of text, avoiding awkward single words on the last line.
       </div>
    </div>
  ),
  generate: (v) => ({ textWrap: v as any }),
  prefix: "text-wrap: ",
  parentClass: "block",
};