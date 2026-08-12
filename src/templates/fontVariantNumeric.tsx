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
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
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
    "proportional-nums",
    "tabular-nums",
    "diagonal-fractions",
    "stacked-fractions",
    "ordinal slashed-zero lining-nums tabular-nums diagonal-fractions",
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', maxWidth: '500px', lineHeight: '1.6' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '1.3em', ...style }}>
          The price is $123.45. Rankings: 1st, 2nd, 3rd. Ratios: 1/2, 3/4. Code: 0123.
        </p>
        <p style={{ margin: 0, fontSize: '0.9em', color: '#94a3b8' }}>
          This text demonstrates the <code style={{ color: '#38bdf8' }}>font-variant-numeric</code> property, which controls the use of alternate glyphs for numbers, fractions, and ordinal markers.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ fontVariantNumeric: v as any }),
  prefix: "font-variant-numeric: ",
  parentClass: "block",
};