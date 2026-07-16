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

export const gridTemplateAreasTemplate: PropertyTemplate = {
  name: "Grid Template Areas",
  controls: [],
  values: [
    `"header header header" "nav content aside" "footer footer footer"`,
    `"sidebar content" "footer footer"`,
    `"zoneA zoneA ." ". zoneB zoneB"`,
    `"alpha alpha beta" "gamma delta delta" "epsilon epsilon ."`,
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          ...style, // This is where gridTemplateAreas will be applied
          display: 'grid',
          width: '100%',
          height: '100%',
          minHeight: '200px',
          gap: '8px',
          gridTemplateColumns: '1fr 2fr 1fr', // Example columns for various templates
          gridTemplateRows: 'auto 1fr auto', // Example rows
          border: '2px solid #38bdf8',
          borderRadius: '4px',
          padding: '8px',
          boxSizing: 'border-box',
          fontSize: '0.875rem',
        }}
      >
        <div style={{ gridArea: 'header', background: '#f97316', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Header</div>
        <div style={{ gridArea: 'nav', background: '#a855f7', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Nav</div>
        <div style={{ gridArea: 'sidebar', background: '#3b82f6', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sidebar</div>
        <div style={{ gridArea: 'content', background: '#22c55e', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Content</div>
        <div style={{ gridArea: 'main', background: '#ef4444', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Main</div>
        <div style={{ gridArea: 'aside', background: '#eab308', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Aside</div>
        <div style={{ gridArea: 'footer', background: '#8b5cf6', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Footer</div>
        {/* Abstract areas for more complex demos */}
        <div style={{ gridArea: 'zoneA', background: '#64748b', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Zone A</div>
        <div style={{ gridArea: 'zoneB', background: '#f472b6', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Zone B</div>
        <div style={{ gridArea: 'alpha', background: '#ef4444', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Alpha</div>
        <div style={{ gridArea: 'beta', background: '#f97316', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Beta</div>
        <div style={{ gridArea: 'gamma', background: '#eab308', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Gamma</div>
        <div style={{ gridArea: 'delta', background: '#22c55e', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Delta</div>
        <div style={{ gridArea: 'epsilon', background: '#3b82f6', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Epsilon</div>
      </div>
    </div>
  ),
  generate: (v) => ({ gridTemplateAreas: v as any }),
  prefix: "grid-template-areas: ",
  parentClass: "container",
};