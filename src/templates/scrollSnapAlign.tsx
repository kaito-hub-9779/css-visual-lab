import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const scrollSnapAlignTemplate: PropertyTemplate = {
  name: "Scroll Snap Align",
  controls: [],
  values: ["none", "start", "end", "center"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, padding: '10px' }}>
      <div
        style={{
          width: "300px",
          height: "180px",
          overflowX: "scroll",
          scrollSnapType: "x mandatory", // Applied to the scroll container
          display: "flex",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          backgroundColor: '#2a3b50',
          gap: '10px',
          padding: '10px', // Provides space for snapping at edges
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "250px",
              height: "150px",
              backgroundColor: i % 2 === 0 ? "#67e8f9" : "#a78bfa",
              color: "#1a2332",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "4px",
              ...style, // scrollSnapAlign is applied to individual scroll items
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </div>
  ),
  generate: (v) => ({ scrollSnapAlign: v as any }),
  prefix: "scroll-snap-align: ",
  parentClass: "block", // Applied to the direct children (scroll items) of a scroll container
};