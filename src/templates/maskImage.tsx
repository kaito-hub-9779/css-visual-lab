import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const maskImageTemplate: PropertyTemplate = {
  name: "Mask Image",
  controls: [],
  values: [
    "none",
    "linear-gradient(to right, transparent, black)",
    "radial-gradient(circle, black 0%, transparent 70%)",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='black'/%3E%3C/svg%3E\")", // Circular mask
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='0,100 50,0 100,100' fill='black'/%3E%3C/svg%3E\")", // Triangular mask
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='10' y='10' width='80' height='80' rx='20' ry='20' fill='black'/%3E%3C/svg%3E\")", // Rounded square mask
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          width: "250px",
          height: "180px",
          backgroundImage:
            "url('https://picsum.photos/seed/maskimage/400/300')", // A placeholder image to be masked
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#38bdf8", // Fallback/default background
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // Ensures content stays within bounds of the masked area
          // The maskImage property will be applied via the `style` prop here
          ...style,
        }}
      >
        <p
          style={{
            padding: "10px 20px",
            fontSize: "1.2em",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
            borderRadius: "4px",
            textAlign: "center",
            lineHeight: "1.4em",
          }}
        >
          Visual representation of mask-image
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ maskImage: v as any }),
  prefix: "mask-image: ",
  parentClass: "block",
};