import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "row", // Ensure items are arranged horizontally for vertical text
  alignItems: "center",
  justifyContent: "space-around",
  fontSize: "28px",
  border: "2px solid #38bdf8", // To clearly show the container boundary
  // Crucial for text-orientation demo:
  writingMode: "vertical-rl", // Sets the text flow to vertical, right-to-left
  whiteSpace: "nowrap", // Prevents text from wrapping
};

export const textOrientationTemplate: PropertyTemplate = {
  name: "Text Orientation",
  controls: [],
  values: ["mixed", "upright", "sideways"],
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        ...style,
        lineHeight: "1.2",
        padding: "10px 20px",
        gap: "30px", // Spacing between the text lines
        // textOrientation will be applied to this container from `style`
      }}
    >
      <div style={{ borderBottom: '1px dashed #64748b', paddingBottom: '10px' }}>
        Hello World!
      </div>
      <div style={{ borderBottom: '1px dashed #64748b', paddingBottom: '10px' }}>
        こんにちは
      </div>
      <div>
        中文示例
      </div>
    </div>
  ),
  generate: (v) => ({ textOrientation: v as any }),
  prefix: "text-orientation: ",
  parentClass: "block",
};