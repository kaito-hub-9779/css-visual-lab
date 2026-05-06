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
  fontSize: "15px",
};

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          ...style,
          padding: "15px",
          border: "2px dashed #38bdf8",
          borderRadius: "4px",
          backgroundColor: "#2d3748",
          maxWidth: "300px",
          minWidth: "100px",
          maxHeight: "200px",
          overflowX: style.whiteSpace === "nowrap" ? "auto" : "hidden", // Enable horizontal scroll for nowrap
          overflowY: style.whiteSpace === "nowrap" ? "hidden" : "auto", // Enable vertical scroll for wrapping values
          resize: "horizontal", // Allow user to resize the inner box
          lineHeight: "1.4",
          boxSizing: "border-box", // Include padding and border in the element's total width and height
        }}
      >
        <p>
          This is some example text to demonstrate the white-space property.
          It has multiple   spaces    and explicit

          new
          lines.
          A verylongwordwithnospacesthatmightoverflowthecontainer.
          Trailing   spaces   
        </p>
        <p>
          Another short line.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};