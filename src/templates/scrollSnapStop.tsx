import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  // Styles added specifically for scroll-snap-stop demo
  overflowX: "auto", // Make the container horizontally scrollable
  height: "200px", // Fixed height to ensure scrollability
  display: "flex", // Arrange items horizontally
  gap: "10px", // Space between items
  scrollSnapType: "x mandatory", // Enable horizontal mandatory snapping
  // The scrollSnapStop property will be applied directly to this div via 'style' prop
};

export const scrollSnapStopTemplate: PropertyTemplate = {
  name: "Scroll Snap Stop",
  controls: [],
  values: ["normal", "always"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* Demo content: multiple items that serve as scroll snap points */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            minWidth: "180px", // Ensure items are wide enough to require scrolling
            height: "150px",
            background: i % 2 === 0 ? "#38bdf8" : "#818cf8",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2em",
            fontWeight: "bold",
            flexShrink: 0, // Prevent items from shrinking when space is limited
            scrollSnapAlign: "start", // Each item's start edge is a snap point
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "background 0.3s ease",
          }}
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ scrollSnapStop: v as any }),
  prefix: "scroll-snap-stop: ",
  parentClass: "container", // The property applies to the scroll container
};