import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
};

const gridParentStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "50px 100px",
  gridTemplateAreas: `
    "header header header"
    "nav main main"
  `,
  gap: "8px",
  width: "100%",
  maxWidth: "400px",
  border: "2px dashed #64748b",
  padding: "8px",
  borderRadius: "4px",
};

const gridPlaceholderItemStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: "#334155",
  borderRadius: "4px",
  padding: "10px",
  fontSize: "0.8em",
  color: "#94a3b8",
  textAlign: "center",
  minHeight: '40px', // Ensure visibility
};

const targetGridItemStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: "#38bdf8",
  color: "#1a2332",
  fontWeight: 'bold',
  borderRadius: "4px",
  padding: "10px",
  fontSize: "0.9em",
  textAlign: "center",
  zIndex: 20, // Ensure it's on top of placeholders
  minHeight: '40px',
  boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
};

export const gridAreaTemplate: PropertyTemplate = {
  name: "Grid Area",
  controls: [],
  values: [
    "header",
    "nav",
    "main",
    "1 / 1 / 2 / 4", // Row 1, Col 1 to 4 (same as header)
    "2 / 1 / 3 / 2", // Row 2, Col 1 to 2 (same as nav)
    "2 / 2 / 3 / 4", // Row 2, Col 2 to 4 (same as main)
    "span 1 / span 1", // Span 1 row, 1 column from its implicit position
    "span 2 / span 2", // Span 2 rows, 2 columns from its implicit position
    "auto / auto / span 1 / span 3" // Implicit position, span 1 row, 3 columns
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div style={{ fontSize: '0.9em', color: '#94a3b8' }}>
        Parent grid with named areas: <span style={{ fontFamily: 'monospace', background: '#334155', padding: '2px 4px', borderRadius: '3px' }}>header</span>, <span style={{ fontFamily: 'monospace', background: '#334155', padding: '2px 4px', borderRadius: '3px' }}>nav</span>, <span style={{ fontFamily: 'monospace', background: '#334155', padding: '2px 4px', borderRadius: '3px' }}>main</span>
      </div>
      <div style={gridParentStyles}>
        {/* Placeholder elements to visually define the grid structure and named areas */}
        <div style={{ ...gridPlaceholderItemStyles, gridArea: "header" }}>Header Area</div>
        <div style={{ ...gridPlaceholderItemStyles, gridArea: "nav" }}>Nav Area</div>
        <div style={{ ...gridPlaceholderItemStyles, gridArea: "main" }}>Main Area</div>

        {/* The element demonstrating the gridArea property */}
        <div style={{ ...targetGridItemStyles, ...style }}>
          Target Element
          <br />
          <span style={{ fontFamily: 'monospace', fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '2px 5px', borderRadius: '3px' }}>{`gridArea: ${style?.gridArea as string}`}</span>
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ gridArea: v as any }),
  prefix: "grid-area: ",
  parentClass: "grid-item",
};