import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px", // Ensures visibility even with minimal content
  color: "#f8fafc",
  display: "grid", // Essential for grid properties
  gap: "10px", // Provides spacing between grid items for clarity
};

const areaBoxStyles: React.CSSProperties = {
  color: "#1a2332", // Default dark text color for brighter backgrounds
  padding: "10px",
  borderRadius: "4px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50px", // Ensures each grid area has a minimum visual size
  fontWeight: "bold",
  fontSize: "0.9em",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

export const gridTemplateAreasTemplate: PropertyTemplate = {
  name: "Grid Template Areas",
  controls: [],
  values: [
    `"header header header" "nav main aside" "footer footer footer"`,
    `"top top" "left right" "bottom bottom"`,
    `"alpha" "beta" "gamma"`,
    `"grid-start grid-start" ". grid-center"`, // Example with empty cell
    `"a . b" ". c ." "d . e"`, // More complex example with empty cells
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* Elements for the "header/nav/main/aside/footer" layout */}
      <div style={{ ...areaBoxStyles, gridArea: "header", background: "#f97316" }}>Header</div>
      <div style={{ ...areaBoxStyles, gridArea: "nav", background: "#fde047", color: "#1a2332" }}>Nav</div>
      <div style={{ ...areaBoxStyles, gridArea: "main", background: "#6ee7b7", color: "#1a2332" }}>Main Content</div>
      <div style={{ ...areaBoxStyles, gridArea: "aside", background: "#a78bfa" }}>Aside</div>
      <div style={{ ...areaBoxStyles, gridArea: "footer", background: "#f97316" }}>Footer</div>

      {/* Elements for the "top/left/right/bottom" layout */}
      <div style={{ ...areaBoxStyles, gridArea: "top", background: "#3b82f6" }}>Top</div>
      <div style={{ ...areaBoxStyles, gridArea: "left", background: "#84cc16", color: "#1a2332" }}>Left</div>
      <div style={{ ...areaBoxStyles, gridArea: "right", background: "#ef4444" }}>Right</div>
      <div style={{ ...areaBoxStyles, gridArea: "bottom", background: "#3b82f6" }}>Bottom</div>

      {/* Elements for the "alpha/beta/gamma" layout */}
      <div style={{ ...areaBoxStyles, gridArea: "alpha", background: "#ec4899" }}>Alpha</div>
      <div style={{ ...areaBoxStyles, gridArea: "beta", background: "#22c55e", color: "#1a2332" }}>Beta</div>
      <div style={{ ...areaBoxStyles, gridArea: "gamma", background: "#a855f7" }}>Gamma</div>

      {/* Elements for the "grid-start/grid-center" layout */}
      <div style={{ ...areaBoxStyles, gridArea: "grid-start", background: "#eab308", color: "#1a2332" }}>Start</div>
      <div style={{ ...areaBoxStyles, gridArea: "grid-center", background: "#14b8a6", color: "#1a2332" }}>Center</div>

      {/* Elements for the "a . b / . c . / d . e" layout */}
      <div style={{ ...areaBoxStyles, gridArea: "a", background: "#be185d" }}>A</div>
      <div style={{ ...areaBoxStyles, gridArea: "b", background: "#fb923c" }}>B</div>
      <div style={{ ...areaBoxStyles, gridArea: "c", background: "#818cf8" }}>C</div>
      <div style={{ ...areaBoxStyles, gridArea: "d", background: "#06b6d4" }}>D</div>
      <div style={{ ...areaBoxStyles, gridArea: "e", background: "#f43f5e" }}>E</div>
    </div>
  ),
  generate: (v) => ({ gridTemplateAreas: v as any }),
  prefix: "grid-template-areas: ",
  parentClass: "container", // This property applies to the grid container
};