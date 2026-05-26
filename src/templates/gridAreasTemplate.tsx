import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Essential for grid-template-areas to work
  gap: "10px", // Visual separation between grid items
  // Define a base grid structure. gridTemplateAreas will then map named items onto these tracks.
  // Using repeat(3, 1fr) for both columns and rows provides enough flexibility for most examples.
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  // Ensure content doesn't get too cramped and fills available space
  alignItems: "stretch",
  justifyItems: "stretch",
};

// Styles for individual grid items to make them distinct and clearly labeled
const gridItemStyle: React.CSSProperties = {
  padding: "15px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "1.1em",
  color: "#1a2332", // Darker text for contrast on colored backgrounds
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

export const gridTemplateAreasTemplate: PropertyTemplate = {
  name: "Grid Template Areas",
  controls: [], // This property is usually controlled by string values, not sliders
  values: [
    `"header header header"
     "nav    main   aside"
     "footer footer footer"`, // Classic website layout
    `"top top"
     "left right"
     "bottom bottom"`, // 2x3 layout with top/bottom spanning
    `"sidebar main"
     "sidebar footer"`, // Sidebar layout (uses fewer columns/rows from the base grid)
    `"a b c"
     "d e f"`, // Generic 2x3 layout
    `"one two three"
     "four five six"
     "seven eight nine"`, // Full 3x3 layout
    `". . ."
     ". main ."
     ". . ."`, // Centered main content
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* Each div represents a named grid area. Their gridArea property determines their placement based on gridTemplateAreas. */}
      <div style={{ ...gridItemStyle, background: "#f97316", gridArea: "header" }}>Header</div>
      <div style={{ ...gridItemStyle, background: "#facc15", gridArea: "nav" }}>Nav</div>
      <div style={{ ...gridItemStyle, background: "#a855f7", gridArea: "main" }}>Main Content</div>
      <div style={{ ...gridItemStyle, background: "#84cc16", gridArea: "aside" }}>Aside</div>
      <div style={{ ...gridItemStyle, background: "#3b82f6", gridArea: "footer" }}>Footer</div>

      {/* Additional common area names for other demo values */}
      <div style={{ ...gridItemStyle, background: "#ef4444", gridArea: "top" }}>Top</div>
      <div style={{ ...gridItemStyle, background: "#22c55e", gridArea: "left" }}>Left</div>
      <div style={{ ...gridItemStyle, background: "#facc15", gridArea: "right" }}>Right</div>
      <div style={{ ...gridItemStyle, background: "#eab308", gridArea: "bottom" }}>Bottom</div>
      <div style={{ ...gridItemStyle, background: "#10b981", gridArea: "sidebar" }}>Sidebar</div>

      {/* Generic alphanumeric areas for flexible demos */}
      <div style={{ ...gridItemStyle, background: "#6ee7b7", gridArea: "a" }}>A</div>
      <div style={{ ...gridItemStyle, background: "#d8b4fe", gridArea: "b" }}>B</div>
      <div style={{ ...gridItemStyle, background: "#fbcfe8", gridArea: "c" }}>C</div>
      <div style={{ ...gridItemStyle, background: "#bfdbfe", gridArea: "d" }}>D</div>
      <div style={{ ...gridItemStyle, background: "#fef08a", gridArea: "e" }}>E</div>
      <div style={{ ...gridItemStyle, background: "#fda4af", gridArea: "f" }}>F</div>

      {/* For full 3x3 demo */}
      <div style={{ ...gridItemStyle, background: "#a78bfa", gridArea: "one" }}>1</div>
      <div style={{ ...gridItemStyle, background: "#c084fc", gridArea: "two" }}>2</div>
      <div style={{ ...gridItemStyle, background: "#e879f9", gridArea: "three" }}>3</div>
      <div style={{ ...gridItemStyle, background: "#f472b6", gridArea: "four" }}>4</div>
      <div style={{ ...gridItemStyle, background: "#fb7185", gridArea: "five" }}>5</div>
      <div style={{ ...gridItemStyle, background: "#fdba74", gridArea: "six" }}>6</div>
      <div style={{ ...gridItemStyle, background: "#fcd34d", gridArea: "seven" }}>7</div>
      <div style={{ ...gridItemStyle, background: "#a3e635", gridArea: "eight" }}>8</div>
      <div style={{ ...gridItemStyle, background: "#4ade80", gridArea: "nine" }}>9</div>
    </div>
  ),
  generate: (v) => ({ gridTemplateAreas: v as any }), // Type assertion for flexibility with string literal types
  prefix: "grid-template-areas: ",
  parentClass: "grid-container", // Describes the parent element's role
};