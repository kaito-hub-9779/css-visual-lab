import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  overflow: "hidden", // Ensures inner scrollbar doesn't extend beyond this container
};

export const scrollPaddingTemplate: PropertyTemplate = {
  name: "Scroll Padding",
  controls: [], 
  values: ["0", "20px", "40px", "80px", "10%", "20%"], 
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p style={{ marginBottom: "15px", fontSize: "0.9em", color: "#a0aec0" }}>
        Scroll down inside the blue box to see the effect. Items will snap with the specified padding from the edge.
      </p>
      <div
        style={{
          height: "200px",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          backgroundColor: "#2d3748", // Background for the scrollable area
          ...style, // scrollPadding will be applied here
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              height: "150px",
              minHeight: "100px", // Ensure items are large enough to scroll
              background: "#38bdf8",
              color: "#1a2332",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5em",
              margin: "15px", // Spacing between items
              borderRadius: "4px",
              scrollSnapAlign: "start",
              fontWeight: "bold",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </div>
  ),
  generate: (v) => ({ scrollPadding: v as any }),
  prefix: "scroll-padding: ",
  parentClass: "container",
};