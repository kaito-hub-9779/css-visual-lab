import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "linear-gradient(45deg, #ef4444, #3b82f6 50%, #fde047)", // Complex background for backdrop blending
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative", // Needed for absolute positioning of the example content
};

const parentContainerStyles: React.CSSProperties = {
  position: "relative",
  width: "250px",
  height: "150px",
  background: "#10b981", // Distinct background for the parent, which will be isolated
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden", // Ensure child blending doesn't visually escape
};

const blendedCircleStyles: React.CSSProperties = {
  position: "absolute",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  mixBlendMode: "multiply", // Key property for interaction
  opacity: 0.8, // Make the blending more obvious
};

export const isolationTemplate: PropertyTemplate = {
  name: "Isolation",
  controls: [],
  values: ["auto", "isolate"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      {/* Informative text above the demo */}
      <p style={{
        position: 'absolute',
        top: '10px',
        left: '20px',
        margin: 0,
        fontSize: '14px',
        zIndex: 1,
        color: '#f8fafc',
        textShadow: '0 0 5px rgba(0,0,0,0.5)',
        width: 'calc(100% - 40px)'
      }}>
        When set to 'isolate', an element establishes a new stacking context, containing its own blend modes and those of its children within its boundaries.
      </p>

      {/* The container that gets the isolation property */}
      <div style={{ ...parentContainerStyles, ...style }}>
        {/* Child elements with mix-blend-mode that will interact with the parent's background */}
        <div style={{ ...blendedCircleStyles, background: "#ef4444", top: "20px", left: "20px" }}></div>
        <div style={{ ...blendedCircleStyles, background: "#3b82f6", bottom: "20px", right: "20px" }}></div>

        {/* Label for the isolation value, also with a blend mode to demonstrate confinement */}
        <span style={{
          position: 'absolute',
          zIndex: 10,
          mixBlendMode: 'screen',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '14px',
        }}>
          isolation: {style?.isolation?.toString() || 'auto'}
        </span>
      </div>
    </div>
  ),
  generate: (v) => ({ isolation: v as any }),
  prefix: "isolation: ",
  parentClass: "block",
};