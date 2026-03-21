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

export const maskModeTemplate: PropertyTemplate = {
  name: "Mask Mode",
  controls: [],
  values: ["alpha", "luminance", "match-source"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          width: "200px",
          height: "100px",
          background: "linear-gradient(45deg, #f06, #3cc, #ffeb3b)", // Content to be masked
          border: "2px dashed #64748b",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f8fafc",
          fontWeight: "bold",
          fontSize: "1.2rem",
          // The mask-image itself
          // Left half: white with 30% opacity (high luminance, low alpha)
          // Right half: black with 70% opacity (low luminance, high alpha)
          maskImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 100\'><rect x=\'0\' y=\'0\' width=\'100\' height=\'100\' fill=\'white\' opacity=\'0.3\' /><rect x=\'100\' y=\'0\' width=\'100\' height=\'100\' fill=\'black\' opacity=\'0.7\' /></svg>")',
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
          ...style, // maskMode will be applied here
        }}
      >
        Masked Content
      </div>
    </div>
  ),
  generate: (v) => ({ maskMode: v as any }),
  prefix: "mask-mode: ",
  parentClass: "block",
};