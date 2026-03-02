import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "350px", // Increased height to better demonstrate placement
  color: "#f8fafc",
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Create a 3x3 grid
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '10px',
  placeItems: 'start' // Default alignment for items within cells, to make placeSelf impact clear
};

export const placeSelfTemplate: PropertyTemplate = {
  name: "Place Self",
  controls: [],
  values: ["auto", "start", "end", "center", "stretch"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      {/* Grid cells to visually represent the grid structure */}
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          style={{
            border: "1px dashed #475569",
            borderRadius: "2px",
            minWidth: "30px", // Ensure cells have some minimum size
            minHeight: "30px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: '#64748b'
          }}
        >
          {/* Cell markers can be added here if needed, e.g., "C{i+1}" */}
        </div>
      ))}

      {/* The actual demo item, positioned in the middle grid cell */}
      <div
        style={{
          gridColumn: '2 / 3', // Place the item in the second column
          gridRow: '2 / 3',    // Place the item in the second row
          width: '80px',       // Fixed width to clearly show alignment for non-stretch values
          height: '80px',      // Fixed height
          background: '#38bdf8',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#1a2332',
          overflow: 'hidden',
          ...style, // Apply the placeSelf style directly to this item
        }}
      >
        <span style={{ padding: '5px' }}>Place Self</span>
      </div>
    </div>
  ),
  generate: (v) => ({ placeSelf: v as any }),
  prefix: "place-self: ",
  parentClass: "grid-item",
};