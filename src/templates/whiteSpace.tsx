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

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          ...style,
          padding: "15px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          background: "#0f172a",
          maxWidth: "300px",
          fontSize: "14px",
          lineHeight: "1.4",
        }}
      >
        <p style={{ margin: 0 }}>
          This is text with{"    "}multiple spaces.
          {"\n"}A line break follows.
          {"\n"}Another line.
        </p>
        <p style={{ margin: "10px 0 0 0" }}>
          And a reallylongunbrokenwordthatwilldemonstratethebreakingbehaviorofthisproperty. More text after.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};