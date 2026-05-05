import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // Three equal columns
  gridTemplateRows: "auto auto auto", // Three rows, auto height
  gap: "10px",
  gridTemplateAreas: `
    "header header header"
    "nav main main"
    "footer footer footer"
  `, // Define named grid areas
};

const gridItemBaseStyles: React.CSSProperties = {
  background: "#3b82f6", // A default blue for context items
  padding: "15px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.9em",
  minHeight: "40px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

export const gridAreaTemplate: PropertyTemplate = {
  name: "Grid Area",
  controls: [],
  values: [
    "1 / 1 / 2 / 4", // Spans row 1, from column 1 to line 4 (whole first row)
    "nav",           // Uses the named 'nav' area
    "main",          // Uses the named 'main' area
    "2 / 1 / 4 / 2", // Spans from row 2, col 1, to row line 4, col line 2 (nav and part of footer column)
    "2 / 2 / span 2 / span 2", // Starts at row 2, col 2, spans 2 rows and 2 columns
  ],
  preview: (style) => (
    <div style={demoContainerStyles}>
      {/* Contextual Grid Items using named areas */}
      <div style={{ ...gridItemBaseStyles, gridArea: 'header', background: '#f59e0b' }}>Header</div>
      <div style={{ ...gridItemBaseStyles, gridArea: 'nav', background: '#10b981' }}>Navigation</div>
      
      {/* This is the target element where gridArea is applied */}
      <div style={{ 
          ...gridItemBaseStyles, 
          ...style, 
          background: '#ec4899', 
          color: '#fff', 
          border: '2px dashed #38bdf8',
          position: 'relative',
          overflow: 'hidden'
        }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: 1,
        }}>
          Target Item
          <br />
          <strong style={{ fontSize: '1.1em' }}>`grid-area`</strong> applied here
        </div>
        {/* Visual cue for the grid area */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)`,
          backgroundSize: '20px 20px',
          opacity: 0.3,
          zIndex: 0,
        }} />
      </div>

      {/* More contextual grid items */}
      <div style={{ ...gridItemBaseStyles, background: '#8b5cf6' }}>Item B</div>
      <div style={{ ...gridItemBaseStyles, background: '#ef4444' }}>Item C</div>
      <div style={{ ...gridItemBaseStyles, gridArea: 'footer', background: '#10b981' }}>Footer</div>
    </div>
  ),
  generate: (v) => ({ gridArea: v as any }),
  prefix: "grid-area: ",
  parentClass: "block", // Applies to a grid item (a block within the grid container)
};