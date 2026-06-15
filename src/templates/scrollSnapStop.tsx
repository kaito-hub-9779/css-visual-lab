import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const scrollSnapStopTemplate: PropertyTemplate = {
  name: "Scroll Snap Stop",
  controls: [],
  values: ["normal", "always"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p style={{ margin: 0, fontSize: '0.9em', color: '#cbd5e1' }}>
        Scroll horizontally. Observe if the scroll stops at every item (always) or allows skipping (normal).
      </p>
      <div
        style={{
          overflowX: "scroll",
          scrollSnapType: "x mandatory", // Essential for scroll snapping
          display: "flex",
          gap: "10px",
          padding: "10px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          ...style, // scrollSnapStop will be applied here
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "calc(70% - 20px)", // Adjust width to account for gap and padding
              minWidth: "200px", // Ensure items are visible
              height: "150px",
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#38bdf8' : '#818cf8'}, ${i % 2 === 0 ? '#818cf8' : '#38bdf8'})`,
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              scrollSnapAlign: "start", // Essential for child snap points
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#fff",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </div>
  ),
  generate: (v) => ({ scrollSnapStop: v as any }),
  prefix: "scroll-snap-stop: ",
  parentClass: "container",
};