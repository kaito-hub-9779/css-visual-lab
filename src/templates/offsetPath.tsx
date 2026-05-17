import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  width: "250px", // Fixed width for predictable path coordinates within the demo
  height: "250px", // Fixed height for predictable path coordinates within the demo
  color: "#f8fafc",
  position: "relative", // Crucial: establishes containing block for the mover and SVG path
  overflow: "hidden", // Clip elements if they go outside the demo container
  boxSizing: "border-box", // Ensure padding is included in width/height
  display: "flex", // Default to flex to visually centralize content if offset-path is 'none'
  alignItems: "center",
  justifyContent: "center",
};

const pathSVGStyles: React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  pointerEvents: "none", // Allow clicks to pass through to elements below
  overflow: "visible", // Allow paths to extend beyond SVG boundaries if coordinates imply it
};

const moverElementStyles: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#38bdf8",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.7rem",
  fontWeight: "bold",
  color: "#1a2332",
  position: "absolute", // CRITICAL: required for offset-path to apply
  // The transform property centers the mover element precisely on the calculated offset-path point.
  transform: 'translate(-50%, -50%)',
  // Initial position when offset-path is 'none'. Without offset-path, it'll be at top-left.
  top: '0',
  left: '0',
};

export const offsetPathTemplate: PropertyTemplate = {
  name: "Offset Path",
  controls: [],
  values: [
    "none",
    // Custom SVG path strings: Coordinates are relative to the demo container's content area (250x250px).
    "path('M 50 50 L 200 50 L 200 200 L 50 200 Z')", // A simple square path
    "path('M 125 50 C 175 0, 225 100, 125 150 C 25 100, 75 0, 125 50')", // A heart-like shape
    "path('M 50 125 A 75 75 0 1 0 200 125 A 75 75 0 1 0 50 125 Z')", // A figure-8 path
    // Basic shapes: These shapes are drawn relative to the *reference box* (by default the element's border-box).
    // For visual consistency with the SVG overlay, we use percentages, assuming the containing block is the reference for visual guide.
    "circle(30% at 50% 50%)", // A circle path in the center
    "ellipse(40% 20% at 50% 50%)", // An ellipse path in the center
    "inset(20% 20% round 10%)", // A rounded rectangle inset path
  ],
  preview: (style) => {
    // Ensure offsetDistance and offsetRotate are set for the property to have a visual effect.
    // '20%' ensures the mover is visible somewhere along the path.
    const effectiveStyle = {
      ...style,
      offsetDistance: style.offsetDistance || '20%',
      offsetRotate: style.offsetRotate || 'auto', // Keeps the mover aligned with the path's direction
    };

    const currentOffsetPath = effectiveStyle.offsetPath as string | undefined;

    // The SVG viewBox size should match the inner content area of demoContainerStyles (250x250px).
    const viewBoxSize = 250;

    // Helper to extract SVG path data from CSS `offset-path` values for the visual guide.
    const getSvgPathData = (cssPath: string): string => {
      // Direct `path()` values can be used directly for SVG `d` attribute.
      if (cssPath.startsWith("path('") && cssPath.endsWith("')")) {
        return cssPath.slice(6, -2);
      }
      // For basic shapes (circle, ellipse, inset), we approximate their SVG path representation
      // using percentages relative to our viewBox, for the visual guide.
      if (cssPath.startsWith("circle(")) {
        const match = cssPath.match(/circle\((\d+)% at (\d+)% (\d+)%\)/);
        if (match) {
          const r = (parseFloat(match[1]) / 100) * viewBoxSize;
          const cx = (parseFloat(match[2]) / 100) * viewBoxSize;
          const cy = (parseFloat(match[3]) / 100) * viewBoxSize;
          return `M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx} ${cy + r} A ${r} ${r} 0 1 0 ${cx} ${cy - r} Z`;
        }
      }
      if (cssPath.startsWith("ellipse(")) {
        const match = cssPath.match(/ellipse\((\d+)% (\d+)% at (\d+)% (\d+)%\)/);
        if (match) {
          const rx = (parseFloat(match[1]) / 100) * viewBoxSize;
          const ry = (parseFloat(match[2]) / 100) * viewBoxSize;
          const cx = (parseFloat(match[3]) / 100) * viewBoxSize;
          const cy = (parseFloat(match[4]) / 100) * viewBoxSize;
          return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`;
        }
      }
      if (cssPath.startsWith("inset(")) {
        const match = cssPath.match(/inset\((\d+)% (\d+)% round (\d+)%\)/);
        if (match) {
          const top = (parseFloat(match[1]) / 100) * viewBoxSize;
          const right = (parseFloat(match[2]) / 100) * viewBoxSize;
          const radius = (parseFloat(match[3]) / 100) * Math.min(viewBoxSize, viewBoxSize);
          const x1 = right;
          const y1 = top;
          const x2 = viewBoxSize - right;
          const y2 = viewBoxSize - top;
          return `M ${x1 + radius} ${y1} H ${x2 - radius} A ${radius} ${radius} 0 0 1 ${x2} ${y1 + radius} V ${y2 - radius} A ${radius} ${radius} 0 0 1 ${x2 - radius} ${y2} H ${x1 + radius} A ${radius} ${radius} 0 0 1 ${x1} ${y2 - radius} V ${y1 + radius} A ${radius} ${radius} 0 0 1 ${x1 + radius} ${y1} Z`;
        }
      }
      return ""; // No SVG path data generated for other types or unparsed values
    };

    const pathData = currentOffsetPath ? getSvgPathData(currentOffsetPath) : "";

    return (
      <div style={{
        ...demoContainerStyles,
        // Disable default centering if offset-path is active to show mover relative to path
        justifyContent: currentOffsetPath === "none" ? "center" : "flex-start",
        alignItems: currentOffsetPath === "none" ? "center" : "flex-start",
      }}>
        {currentOffsetPath !== "none" && pathData && (
          <svg
            style={pathSVGStyles}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d={pathData}
              fill="none"
              stroke="#60a5fa" // Light blue color for the path guide
              strokeWidth="2"
              strokeDasharray="4 4" // Dashed line for visual clarity
            />
          </svg>
        )}
        <div style={{ ...moverElementStyles, ...effectiveStyle }}>
          Mover
        </div>
      </div>
    );
  },
  generate: (v) => ({
    offsetPath: v as any,
    offsetDistance: '20%', // Always include for visibility of the effect
    offsetRotate: 'auto', // Always include for visibility of the effect
  }),
  prefix: "offset-path: ",
  parentClass: "block", // This property applies to the element that moves along the path
};