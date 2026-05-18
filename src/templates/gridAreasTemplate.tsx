import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Essential for grid properties
  gap: "10px", // Provides visual separation between grid items
};

const gridItemStyles: React.CSSProperties = {
  padding: "15px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "#1a2332",
  fontSize: "1rem",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

export const gridTemplateAreasTemplate: PropertyTemplate = {
  name: "Grid Template Areas",
  controls: [],
  values: [
    `"header header header" "main main sidebar" "footer footer footer"`,
    `"nav main" "nav sidebar" "nav footer"`,
    `"top top" "left right" "bottom bottom"`,
    `"a b c" "d e f"`,
    `"one two three" "one four three"`,
    `"content content" "nav ads"`,
    `"logo nav" "logo content"`,
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{ ...gridItemStyles, gridArea: "header", background: "#f97316" }}>Header</div>
      <div style={{ ...gridItemStyles, gridArea: "nav", background: "#facc15" }}>Navigation</div>
      <div style={{ ...gridItemStyles, gridArea: "main", background: "#22c55e", minHeight: "80px" }}>Main Content</div>
      <div style={{ ...gridItemStyles, gridArea: "sidebar", background: "#8b5cf6" }}>Sidebar</div>
      <div style={{ ...gridItemStyles, gridArea: "footer", background: "#ef4444" }}>Footer</div>

      {/* Additional items to support various layout patterns */}
      <div style={{ ...gridItemStyles, gridArea: "top", background: "#f97316" }}>Top Area</div>
      <div style={{ ...gridItemStyles, gridArea: "left", background: "#facc15" }}>Left Section</div>
      <div style={{ ...gridItemStyles, gridArea: "right", background: "#22c55e" }}>Right Section</div>
      <div style={{ ...gridItemStyles, gridArea: "bottom", background: "#ef4444" }}>Bottom Area</div>

      <div style={{ ...gridItemStyles, gridArea: "a", background: "#6366f1" }}>Area A</div>
      <div style={{ ...gridItemStyles, gridArea: "b", background: "#a855f7" }}>Area B</div>
      <div style={{ ...gridItemStyles, gridArea: "c", background: "#ec4899" }}>Area C</div>
      <div style={{ ...gridItemStyles, gridArea: "d", background: "#f43f5e" }}>Area D</div>
      <div style={{ ...gridItemStyles, gridArea: "e", background: "#fde047" }}>Area E</div>
      <div style={{ ...gridItemStyles, gridArea: "f", background: "#2dd4bf" }}>Area F</div>

      <div style={{ ...gridItemStyles, gridArea: "one", background: "#10b981" }}>One</div>
      <div style={{ ...gridItemStyles, gridArea: "two", background: "#06b6d4" }}>Two</div>
      <div style={{ ...gridItemStyles, gridArea: "three", background: "#3b82f6" }}>Three</div>
      <div style={{ ...gridItemStyles, gridArea: "four", background: "#eab308" }}>Four</div>

      <div style={{ ...gridItemStyles, gridArea: "content", background: "#e879f9" }}>Page Content</div>
      <div style={{ ...gridItemStyles, gridArea: "ads", background: "#be185d" }}>Advertisements</div>
      <div style={{ ...gridItemStyles, gridArea: "logo", background: "#0ea5e9" }}>Logo</div>
    </div>
  ),
  generate: (v) => ({ gridTemplateAreas: v as any }),
  prefix: "grid-template-areas: ",
  parentClass: "container",
};