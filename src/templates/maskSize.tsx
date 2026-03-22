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

export const maskSizeTemplate: PropertyTemplate = {
  name: "Mask Size",
  controls: [],
  values: ["auto", "contain", "cover", "50%", "25px", "100% 50%"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          width: "220px",
          height: "220px",
          // A vibrant background to clearly show the masking effect
          background: "linear-gradient(135deg, #ff6b6b 0%, #48dbfb 100%)",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2em",
          fontWeight: "bold",
          textAlign: "center",
          // Use a simple SVG circle as the mask image
          maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="black"/></svg>')`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          ...style, // maskSize will be applied here
          color: "#f8fafc",
          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        <span style={{ maxWidth: '80%', lineHeight: '1.4' }}>
          Masked Content
        </span>
      </div>
    </div>
  ),
  generate: (v) => ({ maskSize: v as any }),
  prefix: "mask-size: ",
  parentClass: "block",
};