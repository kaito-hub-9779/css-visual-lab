import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const textEmphasisTemplate: PropertyTemplate = {
  name: "Text Emphasis",
  controls: [],
  values: [
    "none",
    "dot",
    "circle",
    "sesame",
    "double-circle",
    "triangle",
    "dot red",
    "circle #fcd34d", // Tailwind yellow-300
    "filled sesame #10b981", // Tailwind emerald-500
    "open double-circle #f97316", // Tailwind orange-500
    "filled triangle #38bdf8", // Tailwind sky-400
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{
        padding: '20px',
        maxWidth: '450px',
        textAlign: 'center',
        border: '2px solid #38bdf8',
        borderRadius: '4px',
        background: '#2d3748', // Slightly darker background for the inner content
        color: '#f8fafc', // Ensure text is visible
        fontSize: '1.2rem',
        lineHeight: '2', // Provide enough vertical space for emphasis marks
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '160px', // Ensure sufficient height
        fontFamily: 'sans-serif'
      }}>
        <p style={{ margin: 0 }}>
          This is an example text demonstrating the fascinating <strong style={{color: '#93c5fd'}}>text-emphasis</strong> property.
          Observe the unique marks above each character in this sentence.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ textEmphasis: v as any }),
  prefix: "text-emphasis: ",
  parentClass: "block",
};