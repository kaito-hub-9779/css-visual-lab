import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'grid', // Essential for grid properties
  gap: '10px', // Spacing between grid items
  // gridTemplateColumns and gridTemplateRows are intentionally omitted here,
  // as gridTemplateAreas implicitly defines the grid structure (columns and rows).
  // This allows the selected gridTemplateAreas value to fully dictate the layout.
};

const itemStyle: React.CSSProperties = {
  background: '#38bdf8',
  color: '#1a2332',
  padding: '15px',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1.1em',
  minHeight: '40px', // Ensure items have a minimum height for visibility
};

export const gridTemplateAreasTemplate: PropertyTemplate = {
  name: "Grid Template Areas",
  controls: [],
  values: [
    `"header header header" "nav main aside" "footer footer footer"`, // Classic layout
    `"top top top" "left main right" "bottom bottom bottom"`, // Another common layout
    `"sidebar content" "sidebar content"`, // Two-column fixed sidebar layout
    `"a b c" "d e f"`, // Generic 3-column, 2-row layout
    `"logo nav" "main main"`, // Simple header and main area layout
    `". . ." ". . ."`, // An empty grid, demonstrating unused areas
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* Items representing common grid areas.
          Items with a gridArea property will be placed by gridTemplateAreas.
          Items whose gridArea is not specified in the current template will
          either be auto-placed or not shown if the template is too restrictive. */}
      <div style={{ ...itemStyle, gridArea: 'header' }}>Header</div>
      <div style={{ ...itemStyle, gridArea: 'nav' }}>Navigation</div>
      <div style={{ ...itemStyle, gridArea: 'main' }}>Main Content</div>
      <div style={{ ...itemStyle, gridArea: 'aside' }}>Aside</div>
      <div style={{ ...itemStyle, gridArea: 'footer' }}>Footer</div>
      <div style={{ ...itemStyle, gridArea: 'sidebar' }}>Sidebar</div>

      {/* Generic items for more abstract templates (a, b, c, etc.) */}
      <div style={{ ...itemStyle, gridArea: 'top' }}>Top</div>
      <div style={{ ...itemStyle, gridArea: 'left' }}>Left</div>
      <div style={{ ...itemStyle, gridArea: 'right' }}>Right</div>
      <div style={{ ...itemStyle, gridArea: 'bottom' }}>Bottom</div>

      <div style={{ ...itemStyle, gridArea: 'a' }}>A</div>
      <div style={{ ...itemStyle, gridArea: 'b' }}>B</div>
      <div style={{ ...itemStyle, gridArea: 'c' }}>C</div>
      <div style={{ ...itemStyle, gridArea: 'd' }}>D</div>
      <div style={{ ...itemStyle, gridArea: 'e' }}>E</div>
      <div style={{ ...itemStyle, gridArea: 'f' }}>F</div>
      <div style={{ ...itemStyle, gridArea: 'logo' }}>Logo</div>
    </div>
  ),
  generate: (v) => ({ gridTemplateAreas: v as string }),
  prefix: "grid-template-areas: ",
  parentClass: "container", // This property applies to the grid container
};