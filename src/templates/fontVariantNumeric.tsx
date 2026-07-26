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
  gap: "10px",
};

export const fontVariantNumericTemplate: PropertyTemplate = {
  name: "Font Variant Numeric",
  controls: [],
  values: [
    "normal",
    "ordinal",
    "slashed-zero",
    "lining-nums",
    "oldstyle-nums",
    "tabular-nums",
    "proportional-nums",
    "stacked-fractions",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', maxWidth: '400px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '1.8em', lineHeight: '1.2' }}>
            <span style={{ fontFamily: 'Georgia, serif', ...style }}>
              1st 2nd 3rd 0 $123.45 1/2
            </span>
          </p>
          <p style={{ margin: 0, fontSize: '0.9em', color: '#a0aec0' }}>
            This text demonstrates different numeric forms for "1st 2nd 3rd 0 $123.45 1/2".
            Font set to Georgia for better visibility of styles.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ fontVariantNumeric: v as any }),
  prefix: "font-variant-numeric: ",
  parentClass: "block",
};