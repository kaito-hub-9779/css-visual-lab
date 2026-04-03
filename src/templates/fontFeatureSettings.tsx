import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  // Using a generic serif font for better visibility of OpenType features like ligatures and fractions.
  // Many system serif fonts (e.g., Georgia, Times New Roman) support these features.
  fontFamily: "serif",
};

export const fontFeatureSettingsTemplate: PropertyTemplate = {
  name: "Font Feature Settings",
  controls: [],
  values: [
    "normal", // Default behavior, no special features enabled
    '"liga" 1', // Enable standard ligatures (e.g., ffi, ffl will combine)
    '"dlig" 1', // Enable discretionary ligatures (if available in the font)
    '"smcp" 1', // Render lowercase letters as small caps
    '"frac" 1', // Render common fractions (e.g., 1/2, 3/4 as true fractions)
    '"salt" 1', // Enable stylistic alternates (font-dependent character variations)
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{
        padding: '20px',
        border: '2px solid #38bdf8',
        borderRadius: '4px',
        textAlign: 'center',
        lineHeight: '1.5',
      }}>
        <p style={{ margin: '0 0 15px 0', fontSize: '1.3em', fontWeight: 'bold' }}>
          Font Feature Settings Demo
        </p>
        <p style={{ margin: '0 0 10px 0' }}>
          Observe the ffi in "office" and the ffl in "fluffy".
        </p>
        <p style={{ margin: '0 0 10px 0' }}>
          This line is meant to demonstrate SMALL CAPS.
        </p>
        <p style={{ margin: '0' }}>
          Numerical fractions like 1/2, 3/4, and 5/8.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ fontFeatureSettings: v as any }),
  prefix: "font-feature-settings: ",
  parentClass: "text",
};