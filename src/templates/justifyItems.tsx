import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const justifyItemsTemplate: PropertyTemplate = {
  name: "Justify Items",
  controls: [],
  values: ["start", "end", "center", "stretch", "baseline"],
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        ...style,
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // Each item gets its own grid area
        gap: "10px",
        height: "250px", // Give vertical space to clearly see items within cells
        alignItems: "start", // Prevent vertical stretching to focus on horizontal justification
      }}
    >
      <div
        style={{
          padding: "10px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          background: "#34455f",
          width: "80px", // Fixed width to clearly show justification within the grid cell
          boxSizing: "border-box",
        }}
      >
        Item 1
      </div>
      <div
        style={{
          padding: "10px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          background: "#34455f",
          width: "120px",
          boxSizing: "border-box",
        }}
      >
        Item 2 (wider)
      </div>
      <div
        style={{
          padding: "10px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          background: "#34455f",
          width: "60px",
          boxSizing: "border-box",
        }}
      >
        Item 3
      </div>
    </div>
  ),
  generate: (v) => ({ justifyItems: v as any }),
  prefix: "justify-items: ",
  parentClass: "grid-container",
};