import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'grid', // Make this a grid container
  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', // Create flexible grid columns
  gap: '10px',
  placeContent: 'start', // To prevent main axis justification from interfering with item justification
};

export const justifyItemsTemplate: PropertyTemplate = {
  name: "Justify Items",
  controls: [],
  values: ["start", "end", "center", "stretch", "baseline", "left", "right"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{ background: '#38bdf8', padding: '10px 15px', borderRadius: '4px', color: '#1a2332', fontWeight: 'bold', width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
      <div style={{ background: '#38bdf8', padding: '10px 15px', borderRadius: '4px', color: '#1a2332', fontWeight: 'bold', width: '80px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
      <div style={{ background: '#38bdf8', padding: '10px 15px', borderRadius: '4px', color: '#1a2332', fontWeight: 'bold', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Stretch Me</div> {/* This item will clearly show 'stretch' */}
      <div style={{ background: '#38bdf8', padding: '10px 15px', borderRadius: '4px', color: '#1a2332', fontWeight: 'bold', width: '70px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 4</div>
      <div style={{ background: '#38bdf8', padding: '10px 15px', borderRadius: '4px', color: '#1a2332', fontWeight: 'bold', width: '65px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 5</div>
    </div>
  ),
  generate: (v) => ({ justifyItems: v as any }),
  prefix: "justify-items: ",
  parentClass: "container",
};