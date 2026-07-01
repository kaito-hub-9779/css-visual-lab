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

export const borderImageTemplate: PropertyTemplate = {
  name: "Border Image",
  controls: [],
  values: [
    "url('https://mdn.github.io/css-examples/howto/border-image-source/star.png') 30 round",
    "url('https://mdn.github.io/css-examples/howto/border-image-source/border-corner.png') 27 fill / 20px / 10px stretch",
    "linear-gradient(45deg, #f00, #ff0, #0f0, #0ff, #00f) 10",
    "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\"><rect x=\"0\" y=\"0\" width=\"50\" height=\"50\" fill=\"none\" stroke=\"gold\" stroke-width=\"5\"/><circle cx=\"25\" cy=\"25\" r=\"15\" fill=\"orange\"/></svg>') 10 fill / 15px round",
    "url('https://mdn.github.io/css-examples/howto/border-image-source/star.png') 30 stretch",
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          padding: "20px",
          minHeight: "100px",
          border: "15px solid #38bdf8", // Base border, thickness used by border-image-width if not specified
          borderRadius: "8px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2d3748", // Inner background to contrast with border
          fontSize: "1.2em",
          ...style, // Here's where borderImage is applied
        }}
      >
        Visual representation of border-image
      </div>
    </div>
  ),
  generate: (v) => ({ borderImage: v as any }),
  prefix: "border-image: ",
  parentClass: "block",
};