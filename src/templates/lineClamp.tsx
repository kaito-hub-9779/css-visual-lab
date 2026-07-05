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
  gap: "15px",
  fontFamily: "system-ui, sans-serif",
};

export const lineClampTemplate: PropertyTemplate = {
  name: "Line Clamp",
  controls: [],
  values: ["1", "2", "3", "none"],
  preview: (style) => {
    // These styles are crucial for `line-clamp` to function across different browsers,
    // especially those that primarily support the -webkit- prefix for this feature.
    // They are applied to the element containing the text to be clamped.
    const lineClampSupportingStyles: React.CSSProperties = {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      // The `style` object from the control will add or override `lineClamp`.
    };

    const longText = `The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    return (
      <div style={{ ...demoContainerStyles }}>
        <div
          style={{
            padding: "15px",
            border: "2px solid #38bdf8",
            borderRadius: "4px",
            background: "#323f4b",
            maxWidth: "380px", // Constrain width to ensure text wraps and clamping is visible
            lineHeight: "1.5",
            fontSize: "0.95em",
            wordBreak: "break-word",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <p style={{ ...lineClampSupportingStyles, ...style, margin: 0 }}>
            {longText}
          </p>
        </div>
        <div style={{ fontSize: "0.9em", color: "#cbd5e1" }}>
          Visual representation of line-clamp
        </div>
      </div>
    );
  },
  generate: (v) => ({ lineClamp: v as any }),
  prefix: "line-clamp: ",
  parentClass: "block",
};