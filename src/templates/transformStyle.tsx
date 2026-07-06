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
  // Perspective is crucial to observe 3D transforms
  perspective: "800px",
  perspectiveOrigin: "center center",
};

export const transformStyleTemplate: PropertyTemplate = {
  name: "Transform Style",
  controls: [],
  values: ["flat", "preserve-3d"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#2a3b50",
          transform: "rotateY(45deg) scale(1.1)", // Parent transform in 3D space
          position: "relative",
          // The property being demonstrated applies to this parent container
          ...style,
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid #a78bfa",
            borderRadius: "4px",
            background: "#4f46e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotateX(30deg) translateZ(40px)", // Child transform
            fontSize: "12px",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            marginTop: "10px",
          }}
        >
          Child Element
        </div>
        <div
          style={{
            position: "absolute",
            top: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#38bdf8",
            textAlign: "center",
          }}
        >
          Parent (Transform-Style applied here)
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            fontSize: "10px",
            color: "#aaa",
            textAlign: "center",
          }}
        >
          Try switching between flat / preserve-3d
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ transformStyle: v as any }),
  prefix: "transform-style: ",
  parentClass: "block",
};