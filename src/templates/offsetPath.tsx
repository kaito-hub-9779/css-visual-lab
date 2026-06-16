import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  position: "relative", // Needed for absolute positioning of child
  overflow: "hidden", // In case path goes slightly out of bounds
  display: 'flex', // To help center helper text if path not drawn
  justifyContent: 'center',
  alignItems: 'center',
};

// Styles for the element that will move along the path
const pathElementStyles: React.CSSProperties = {
  position: "absolute",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "#38bdf8", // Tailwind blue-400
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.8em",
  color: "#1a2332",
  fontWeight: "bold",
  boxShadow: "0 0 10px rgba(56, 189, 248, 0.7)",
  offsetDistance: "50%", // Default position along the path for demonstration
  offsetAnchor: "center", // Center the element on the path point
  zIndex: 10,
  transition: 'offset-path 0.3s ease-in-out', // Smooth transition for offset-path changes
};

// Helper component to visualize explicit SVG paths
const PathSVG = ({ pathData, fill = "none", stroke = "#60a5fa", strokeDasharray = "4", strokeWidth = "2" }: { pathData: string, fill?: string, stroke?: string, strokeDasharray?: string, strokeWidth?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 250 250" // Assuming a 250x250 internal coordinate system for paths
    style={{ position: "absolute", top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}
  >
    <path d={pathData} fill={fill} stroke={stroke} strokeDasharray={strokeDasharray} strokeWidth={strokeWidth} />
  </svg>
);

export const offsetPathTemplate: PropertyTemplate = {
  name: "Offset Path",
  controls: [],
  values: [
    "none",
    "circle(50% at 125px 125px)", // A circle path centered in a 250x250 area
    "ellipse(100px 50px at 125px 125px)", // An ellipse path
    'path("M20 125 C 80 25, 170 225, 230 125")', // A smooth S-curve
    'path("M50 50 L200 50 L200 200 L50 200 Z")', // A square path
    'path("M125 20 L205 125 L125 230 L45 125 Z")', // A diamond path
  ],
  preview: (style) => {
    const currentOffsetPath = style.offsetPath as string;
    let pathDataToVisualize: string | undefined;

    // Extract path data for SVG visualization only if it's an explicit path() function
    if (currentOffsetPath && currentOffsetPath !== 'none' && currentOffsetPath.startsWith('path("')) {
      pathDataToVisualize = currentOffsetPath.substring(6, currentOffsetPath.length - 2);
    }

    return (
      <div style={{ ...demoContainerStyles, ...style }}>
        {/* Render the path visualization for explicit SVG paths */}
        {pathDataToVisualize && (
          <PathSVG pathData={pathDataToVisualize} />
        )}
        <div style={{ ...pathElementStyles, offsetPath: currentOffsetPath }}>
          ON PATH
        </div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 15px',
          border: '2px dashed #9ca3af',
          borderRadius: '4px',
          fontSize: '0.9em',
          textAlign: 'center',
          color: '#e2e8f0',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 5,
        }}>
          Element moves along 'offset-path'<br/>(with offset-distance: 50%)
        </div>
      </div>
    );
  },
  generate: (v) => ({ offsetPath: v as any }),
  prefix: "offset-path: ",
  parentClass: "block",
};