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
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
};

export const hyphensTemplate: PropertyTemplate = {
  name: "Hyphenation",
  controls: [],
  values: ["none", "manual", "auto"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          width: "250px", // Constrain width to force hyphenation
          lineHeight: "1.4",
          fontSize: "16px",
          // The 'hyphens' property from the controls will be applied here
          ...style,
        }}
      >
        <p style={{ margin: 0 }}>
          This is a demonstration of the <strong style={{ color: '#6ee7b7' }}>hyphens</strong> CSS property,
          which controls how words are hyphenated when they break across lines.
          Observe how the word <span style={{ color: '#facc15' }}>supercalifragilisticexpialidocious</span>
          behaves in this constrained space. Another long example is <span style={{ color: '#a78bfa' }}>antidisestablishmentarianism</span>.
          This property allows for better text flow and readability in narrow columns, avoiding awkward overflowing text.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ hyphens: v as any }),
  prefix: "hyphens: ",
  parentClass: "block",
};