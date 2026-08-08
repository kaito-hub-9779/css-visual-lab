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

export const scrollPaddingTemplate: PropertyTemplate = {
  name: "Scroll Padding",
  controls: [],
  values: ["0px", "20px", "40px", "60px", "100px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <p style={{ margin: 0, fontSize: "0.9em", color: "#94a3b8" }}>
        Scroll the box below to see how padding affects scroll snap positions.
      </p>
      <div
        style={{
          ...style, // scrollPadding will be applied here
          overflowY: "scroll",
          height: "200px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          scrollSnapType: "y mandatory",
          background: "#2d3748",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2em",
              fontWeight: "bold",
              borderBottom: i < 4 ? "1px dashed #64748b" : "none",
              background: i % 2 === 0 ? "#334155" : "#475569",
              scrollSnapAlign: "start",
            }}
          >
            Section {i + 1}
          </div>
        ))}
      </div>
    </div>
  ),
  generate: (v) => ({ scrollPadding: v as any }),
  prefix: "scroll-padding: ",
  parentClass: "container",
};