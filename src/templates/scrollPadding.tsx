import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  color: "#f8fafc",
  // Properties added for scrollPadding demo:
  height: "250px", // Fixed height to make content scrollable
  overflowY: "scroll", // Enable vertical scrolling
  scrollSnapType: "y mandatory", // Enable vertical scroll snapping
  scrollBehavior: "smooth", // For a smoother user experience
};

// Styles for individual scroll-snap items
const scrollItemStyles: React.CSSProperties = {
  minHeight: "120px", // Make items taller than the viewport to demonstrate snapping
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.8rem",
  fontWeight: "bold",
  borderRadius: "4px",
  margin: "10px 0", // Space between items
  scrollSnapAlign: "start", // Each item will snap to the start of the scroll container
  flexShrink: 0, // Prevent items from shrinking
  scrollMarginTop: "5px", // Small margin for visual separation on snap
};

export const scrollPaddingTemplate: PropertyTemplate = {
  name: "Scroll Padding",
  controls: [],
  values: ["0", "20px", "40px", "0 20px", "40px 0", "20px 0 0 20px", "60px 20px 10px 30px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <p style={{ margin: '0 0 15px', fontSize: '0.9em', color: '#cbd5e1' }}>
        Scroll this container. `scroll-padding` defines the offset from the scrollport edge within which snap points are adjusted.
      </p>
      <div style={{ ...scrollItemStyles, background: "#3b82f6" }}>
        Item 1
      </div>
      <div style={{ ...scrollItemStyles, background: "#84cc16" }}>
        Item 2
      </div>
      <div style={{ ...scrollItemStyles, background: "#ef4444" }}>
        Item 3
      </div>
      <div style={{ ...scrollItemStyles, background: "#f59e0b" }}>
        Item 4
      </div>
      <div style={{ ...scrollItemStyles, background: "#a855f7" }}>
        Item 5
      </div>
    </div>
  ),
  generate: (v) => ({ scrollPadding: v as any }),
  prefix: "scroll-padding: ",
  parentClass: "block",
};