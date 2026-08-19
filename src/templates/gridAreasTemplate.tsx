import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

const GridAreaBox: React.FC<{ areaName: string; bgColor: string }> = ({ areaName, bgColor }) => (
  <div
    style={{
      gridArea: areaName,
      background: bgColor,
      padding: "10px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      color: ["#facc15", "#4ade80"].includes(bgColor) ? "#1f2937" : "#fff", // Adjust text color for readability
      minHeight: "30px",
      fontSize: "0.8em",
      textAlign: 'center',
    }}
  >
    {areaName.charAt(0).toUpperCase() + areaName.slice(1)} (area: '{areaName}')
  </div>
);

export const gridTemplateAreasTemplate: PropertyTemplate = {
  name: "Grid Template Areas",
  controls: [], 
  values: [
    `"head head head" "nav main aside" "foot foot foot"`,
    `"a a b" "c d b"`,
    `"top top" "left right"`,
    `"area1 area2 ." ". area3 area4"`,
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p style={{ margin: 0, fontSize: '0.9em', lineHeight: '1.4' }}>
        Defines grid areas by naming cells within the grid. Child items are then placed into these areas using the <code style={{color: '#a78bfa'}}>grid-area</code> property. The dots ( <code style={{color: '#6ee7b7'}}>.</code> ) indicate empty cells.
      </p>
      <div
        style={{
          display: "grid",
          gap: "8px",
          height: "200px", // Fixed height for consistent visual demo
          border: "2px dashed #475569",
          padding: "10px",
          ...style, // The gridTemplateAreas property will be applied here
        }}
      >
        {/* These elements demonstrate how items with specific gridArea names are placed */}
        <GridAreaBox areaName="head" bgColor="#a78bfa" />
        <GridAreaBox areaName="nav" bgColor="#22d3ee" />
        <GridAreaBox areaName="main" bgColor="#4ade80" />
        <GridAreaBox areaName="aside" bgColor="#facc15" />
        <GridAreaBox areaName="foot" bgColor="#f87171" />

        <GridAreaBox areaName="a" bgColor="#60a5fa" />
        <GridAreaBox areaName="b" bgColor="#c084fc" />
        <GridAreaBox areaName="c" bgColor="#fca5a5" />
        <GridAreaBox areaName="d" bgColor="#818cf8" />

        <GridAreaBox areaName="top" bgColor="#fda4af" />
        <GridAreaBox areaName="left" bgColor="#f0abfc" />
        <GridAreaBox areaName="right" bgColor="#c4b5fd" />

        <GridAreaBox areaName="area1" bgColor="#99f6e4" />
        <GridAreaBox areaName="area2" bgColor="#d8b4fe" />
        <GridAreaBox areaName="area3" bgColor="#fde68a" />
        <GridAreaBox areaName="area4" bgColor="#d9f99d" />
      </div>
    </div>
  ),
  generate: (v) => ({ gridTemplateAreas: v as any }),
  prefix: "grid-template-areas: ",
  parentClass: "container",
};