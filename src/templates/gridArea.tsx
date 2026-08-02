import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid",
  gridTemplateColumns: "120px 1fr 1fr", // Nav | Main | Main
  gridTemplateRows: "auto 1fr auto", // Header | Content | Footer
  gridTemplateAreas: `
    "header header header"
    "nav    main   main"
    "footer footer footer"
  `,
  gap: "10px",
};

const baseGridItemStyles: React.CSSProperties = {
  padding: "10px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.9em",
  opacity: 0.8,
};

export const gridAreaTemplate: PropertyTemplate = {
  name: "Grid Area",
  controls: [],
  values: [
    "main",
    "header",
    "nav",
    "footer",
    "1 / 1 / 2 / 4", // From row 1, col 1, to row 2, col 4 (covers header)
    "1 / 1 / -1 / -1", // Covers entire grid
    "2 / 1 / 3 / 2", // Covers the 'nav' area (row 2, col 1, to row 3, col 2)
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div
        style={{
          ...baseGridItemStyles,
          gridArea: "header",
          background: "#38bdf8",
          color: "#0f172a",
        }}
      >
        Header Area
      </div>
      <div
        style={{
          ...baseGridItemStyles,
          gridArea: "nav",
          background: "#facc15",
          color: "#0f172a",
        }}
      >
        Nav Area
      </div>
      <div
        style={{
          ...baseGridItemStyles,
          gridArea: "footer",
          background: "#a78bfa",
          color: "#0f172a",
        }}
      >
        Footer Area
      </div>

      {/* This is the item demonstrating the gridArea property */}
      <div
        style={{
          ...style, // Apply the gridArea style here
          padding: "20px",
          border: "2px dashed #f8fafc", // Dotted border to show it's the target
          borderRadius: "4px",
          background: "#0e131d", // Darker background to stand out
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2em",
          fontWeight: "bold",
          textAlign: "center",
          color: "#cbd5e1",
        }}
      >
        This item's `grid-area` is set.
      </div>

      {/* Another item to fill content if the target moves */}
      <div
        style={{
          ...baseGridItemStyles,
          gridArea: "main",
          background: "#1e293b",
          opacity: 0.6,
        }}
      >
        Main Content Area
      </div>
    </div>
  ),
  generate: (v) => ({ gridArea: v as any }),
  prefix: "grid-area: ",
  parentClass: "block", // Can be applied to any grid item
};