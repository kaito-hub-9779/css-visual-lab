import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "10px", // Adjust padding to allow more scrollable area
  borderRadius: "8px",
  minHeight: "250px",
  maxHeight: "300px", // Set a max height to make it scrollable
  color: "#f8fafc",
  overflowY: 'scroll', // Make the container itself scrollable
  scrollSnapType: 'y mandatory', // Enable mandatory vertical scroll snapping
  border: '2px solid #38bdf8', // Highlight the scrollable area
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export const scrollSnapStopTemplate: PropertyTemplate = {
  name: "Scroll Snap Stop",
  controls: [],
  values: ["normal", "always"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            flexShrink: 0,
            width: '100%',
            height: '100px',
            background: i % 2 === 0 ? '#4a5568' : '#6b7280',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2em',
            fontWeight: 'bold',
            scrollSnapAlign: 'start', // Each item acts as a snap point
            color: '#f8fafc',
          }}
        >
          Scroll Item {i + 1}
        </div>
      ))}
      <div style={{ padding: '10px', textAlign: 'center', fontSize: '0.9em', color: '#cbd5e1' }}>
        Scroll quickly to see the effect of `scroll-snap-stop`.
      </div>
    </div>
  ),
  generate: (v) => ({ scrollSnapStop: v as any }),
  prefix: "scroll-snap-stop: ",
  parentClass: "block",
};