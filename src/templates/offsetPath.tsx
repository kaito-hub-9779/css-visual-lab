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

export const offsetPathTemplate: PropertyTemplate = {
  name: "Offset Path",
  controls: [],
  values: [
    "none",
    'path("M 20 20 L 180 20 L 180 180 L 20 180 Z")', // Square path
    'path("M 20 100 Q 60 20 100 100 T 180 100")', // Wavy path
    "circle(50% at 100px 100px)", // Circular path within 200x200 container
    "ellipse(70px 40px at 100px 100px)", // Elliptical path within 200x200 container
    "polygon(100px 20px, 20px 180px, 180px 180px)", // Triangle path
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, position: "relative" }}>
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          border: "2px dashed #38bdf8",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          textAlign: "center",
          overflow: "hidden", // Ensures path doesn't visually bleed outside
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            background: "#8b5cf6",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#f8fafc",
            offsetDistance: "50%", // Places the element halfway along the path
            offsetAnchor: "center", // Ensures the center of the element follows the path
            top: 0, // Set initial position, offsetPath will take over
            left: 0, // Set initial position, offsetPath will take over
            ...style, // Applies the selected offsetPath value
            // Adding a transition for smoother preview when changing paths
            transition: "offset-path 0.3s ease-in-out, offset-distance 0.3s ease-in-out",
          }}
        >
          Box
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            opacity: 0.7,
            fontSize: "10px",
            color: "#60a5fa",
          }}
        >
          (Path is relative to dashed border)
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ offsetPath: v as any }),
  prefix: "offset-path: ",
  parentClass: "block",
};