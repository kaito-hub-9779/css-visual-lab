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
  // perspective is essential to see the perspective-origin effect
  perspective: "500px",
};

export const perspectiveOriginTemplate: PropertyTemplate = {
  name: "Perspective Origin",
  controls: [], // No sliders needed, values are descriptive strings
  values: [
    "center center",
    "top left",
    "bottom right",
    "20% 80%",
    "right", // Shorthand for right center
    "top", // Shorthand for center top
    "75% 25%",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* demo content that clearly illustrates the property */}
      <div
        style={{
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, #38bdf8, #a78bfa)",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2em",
          fontWeight: "bold",
          color: "white",
          // Apply a 3D transform to illustrate the effect of perspective-origin
          transform: "rotateY(45deg) rotateX(15deg)",
          transition: "transform 0.3s ease", // Smooth transition for visual clarity
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          border: "2px solid #f8fafc",
          backfaceVisibility: "hidden", // Good practice for 3D transforms
        }}
      >
        3D Element
      </div>
    </div>
  ),
  generate: (v) => ({ perspectiveOrigin: v as any }),
  prefix: "perspective-origin: ",
  parentClass: "container",
};