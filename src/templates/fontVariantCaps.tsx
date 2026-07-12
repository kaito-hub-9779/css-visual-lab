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
  fontSize: "20px", // Base font size for better visibility
  fontFamily: "serif", // Helps in clearly distinguishing caps variations
};

export const fontVariantCapsTemplate: PropertyTemplate = {
  name: "Font Variant Caps",
  controls: [],
  values: [
    "normal",
    "small-caps",
    "all-small-caps",
    "petite-caps",
    "all-petite-caps",
    "unicase",
    "titling-caps",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', background: '#2d3748', textAlign: 'center' }}>
        <p style={{ margin: 0, padding: 0, fontSize: '28px', lineHeight: '1.2', ...style }}>
          The Quick Brown Fox Jumps Over The Lazy Dog.
        </p>
        <p style={{ margin: '15px 0 0', padding: 0, fontSize: '14px', color: '#94a3b8' }}>
          Visual representation of `font-variant-caps`.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ fontVariantCaps: v as any }),
  prefix: "font-variant-caps: ",
  parentClass: "block",
};