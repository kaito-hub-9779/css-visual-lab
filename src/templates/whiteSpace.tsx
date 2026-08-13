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
};

const textContent = `This is some    sample text.
It includes   multiple spaces and
a newline character to demonstrate   the
effect of the white-space property.
Averylongwordthatmightnotbreakautomaticallywithoutthecorrectwhitespacevalue.`;

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line', 'break-spaces'],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          maxWidth: "300px",
          fontFamily: "monospace",
          fontSize: "14px",
          lineHeight: "1.4",
          background: "#2d3748",
          color: "#cbd5e1",
          ...style,
        }}
      >
        {textContent}
      </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};