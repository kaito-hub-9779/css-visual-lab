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

const scrollWrapperStyles: React.CSSProperties = {
  width: '100%',
  maxWidth: '400px',
  height: '150px',
  overflowX: 'scroll',
  display: 'flex',
  border: '2px solid #38bdf8',
  borderRadius: '8px',
  backgroundColor: '#0f172a',
  scrollSnapType: 'x mandatory', // Essential for the demo
  scrollbarWidth: 'thin', // For better visibility of scrollbar in some browsers
  scrollbarColor: '#38bdf8 #475569', // Custom scrollbar colors
};

const scrollItemStyles: React.CSSProperties = {
  flexShrink: 0,
  width: '100%',
  minWidth: '100%', // Ensure each item takes full width for snapping
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#cbd5e1',
  scrollSnapAlign: 'start', // Essential for the demo
  borderRight: '1px solid #334155', // Visual separator
  boxSizing: 'border-box',
};

const itemColors = ['#facc15', '#ef4444', '#22c55e', '#3b82f6', '#a855f7', '#f472b6'];

export const scrollSnapStopTemplate: PropertyTemplate = {
  name: "Scroll Snap Stop",
  controls: [],
  values: ["normal", "always"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <div style={{ ...scrollWrapperStyles, ...style }}>
        {itemColors.map((color, index) => (
          <div key={index} style={{ ...scrollItemStyles, backgroundColor: color + '30' }}>
            <span style={{ color: color }}>Page {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  generate: (v) => ({ scrollSnapStop: v as any }),
  prefix: "scroll-snap-stop: ",
  parentClass: "container",
};