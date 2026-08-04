import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px", // Ensure enough space for the grid
  color: "#f8fafc",
  boxSizing: "border-box", // Important for consistent sizing
};

export const gridAreaTemplate: PropertyTemplate = {
  name: "Grid Area",
  controls: [],
  values: ["header", "nav", "main", "sidebar", "footer", "1 / 1 / 4 / 4", "1 / 2 / 3 / 3"], // Demonstrate both named areas and line numbers
  preview: (style) => (
    <div style={{
      ...demoContainerStyles,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 equal width columns
      gridTemplateRows: '50px 100px 50px', // 3 rows with defined heights
      gap: '8px',
      gridTemplateAreas: `
        "header header header"
        "nav main sidebar"
        "footer footer footer"
      `,
      alignItems: 'stretch', // Grid items stretch to fill cells by default
      justifyItems: 'stretch', // Grid items stretch to fill cells by default
    }}>
      {/* Background grid areas for visual context */}
      <div style={{ background: '#374151', padding: '10px', borderRadius: '4px', gridArea: 'header', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Header</div>
      <div style={{ background: '#374151', padding: '10px', borderRadius: '4px', gridArea: 'nav', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Nav</div>
      <div style={{ background: '#374151', padding: '10px', borderRadius: '4px', gridArea: 'main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Main Content</div>
      <div style={{ background: '#374151', padding: '10px', borderRadius: '4px', gridArea: 'sidebar', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sidebar</div>
      <div style={{ background: '#374151', padding: '10px', borderRadius: '4px', gridArea: 'footer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Footer</div>

      {/* The element whose grid-area will be controlled by the demo */}
      <div style={{
        ...style, // This applies the selected gridArea value, e.g., { gridArea: 'header' } or { gridArea: '1 / 2 / 3 / 3' }
        background: '#38bdf8',
        color: '#1e293b',
        fontWeight: 'bold',
        padding: '10px',
        borderRadius: '8px',
        border: '2px dashed #a7f3d0', // Dashed border to clearly mark the controlled element
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '60px',
        minHeight: '40px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        zIndex: 10, // Ensure it's on top if it overlaps other grid areas
      }}>
        Controlled Item
      </div>
    </div>
  ),
  generate: (v) => ({ gridArea: v as any }),
  prefix: "grid-area: ",
  parentClass: "item", // This property applies to a grid item (child), not the grid container (parent)
};