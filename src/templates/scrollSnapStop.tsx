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
  gap: "10px",
};

const scrollableContainerStyles: React.CSSProperties = {
  width: "100%",
  height: "180px", // Fixed height to enable scrolling
  overflowX: "scroll",
  display: "flex",
  gap: "10px",
  scrollSnapType: "x mandatory", // Essential for scroll-snap-stop to work
  paddingBottom: '10px', // Prevent scrollbar from obscuring content slightly
  scrollbarWidth: 'thin',
  scrollbarColor: '#38bdf8 #1a2332'
};

const snapChildStyles: React.CSSProperties = {
  flexShrink: 0,
  width: "100%", // Each child takes up the full width of the scroll container
  height: "150px",
  background: "#38bdf8",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "bold",
  scrollSnapAlign: "start", // Each child snaps to the start of the scroll container
  color: "#1a2332",
  padding: "10px",
};

export const scrollSnapStopTemplate: PropertyTemplate = {
  name: "Scroll Snap Stop",
  controls: [],
  values: ["normal", "always"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <p style={{ margin: '0 0 10px 0', fontSize: '14px', opacity: '0.8' }}>
         Scroll horizontally to see the effect.
         With "normal", you can scroll past multiple items quickly. With "always", each scroll gesture stops at the next item, forcing a full stop.
       </p>
       <div style={{ ...scrollableContainerStyles, ...style }}>
          <div style={snapChildStyles}>Item 1</div>
          <div style={snapChildStyles}>Item 2</div>
          <div style={snapChildStyles}>Item 3</div>
          <div style={snapChildStyles}>Item 4</div>
          <div style={snapChildStyles}>Item 5</div>
       </div>
    </div>
  ),
  generate: (v) => ({ scrollSnapStop: v as any }),
  prefix: "scroll-snap-stop: ",
  parentClass: "container",
};