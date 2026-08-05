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

export const shapeMarginTemplate: PropertyTemplate = {
  name: "Shape Margin",
  controls: [],
  values: ["0", "20px", "40px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, fontSize: "15px" }}>
      <p style={{ lineHeight: "1.6", color: "#f8fafc" }}>
        <span
          style={{
            float: "left",
            width: "100px",
            height: "100px",
            background: "linear-gradient(45deg, #3b82f6, #60a5fa)",
            borderRadius: "50%",
            shapeOutside: "circle()", // Define the shape for text wrapping
            ...style, // shapeMargin property will be applied here
            marginRight: "15px", // Base margin for visual separation
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#f8fafc",
            boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)", // Visual cue for the shape
          }}
        >
          Shape
        </span>
        This paragraph demonstrates the <code style={{ color: "#facc15" }}>shape-margin</code> CSS property. When a floated element has a custom{" "}
        <code style={{ color: "#facc15" }}>shape-outside</code> defined, the <code style={{ color: "#facc15" }}>shape-margin</code> property adds an additional margin around that custom shape. This effectively pushes the surrounding inline content further away from the edge of the shape, creating more breathing room and enhancing readability around complex layouts. Try changing the values to see how the text flow adjusts to maintain the specified distance from the circle's boundary.
      </p>
    </div>
  ),
  generate: (v) => ({ shapeMargin: v as any }),
  prefix: "shape-margin: ",
  parentClass: "element",
};