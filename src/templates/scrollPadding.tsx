import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  maxHeight: "250px", // Fixed height to enable scrolling
  overflowY: "scroll", // Make the container scrollable
  color: "#f8fafc",
  scrollSnapType: "y mandatory", // Helps clearly illustrate scroll-padding
};

const itemStyles: React.CSSProperties = {
  minHeight: "150px", // Each item is tall enough to be scroll-snapped
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5em",
  fontWeight: "bold",
  borderRadius: "4px",
  marginBottom: "10px",
  scrollSnapAlign: "start", // Each item snaps to the start of the scroll container
  border: "2px dashed rgba(255, 255, 255, 0.3)",
};

export const scrollPaddingTemplate: PropertyTemplate = {
  name: "Scroll Padding",
  controls: [],
  values: ["0px", "20px", "50px", "70px 0 0 0", "100px 20px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', marginBottom: '10px' }}>
         This container shows the effect of `scroll-padding`. Scroll down to see items snap into view with varying offsets.
      </div>
      <div style={{ ...itemStyles, background: "#ef4444" }}>Item 1</div>
      <div style={{ ...itemStyles, background: "#f97316" }}>Item 2</div>
      <div style={{ ...itemStyles, background: "#eab308" }}>Item 3</div>
      <div style={{ ...itemStyles, background: "#22c55e" }}>Item 4</div>
      <div style={{ ...itemStyles, background: "#06b6d4" }}>Item 5</div>
      <div style={{ ...itemStyles, background: "#3b82f6" }}>Item 6</div>
    </div>
  ),
  generate: (v) => ({ scrollPadding: v as any }),
  prefix: "scroll-padding: ",
  parentClass: "block",
};