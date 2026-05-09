import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px", // Ensures enough vertical space for the demo
  color: "#f8fafc",
  display: 'flex', // Arrange children horizontally
  alignItems: 'center', // Vertically center items within the container
  overflowX: 'scroll', // Enable horizontal scrolling to demonstrate snap behavior
  scrollSnapType: 'x mandatory', // Essential for scroll-snap-stop to take effect
  gap: '16px', // Space between scroll snap items
  // Hide scrollbar for a cleaner presentation across browsers
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE and Edge
  // Note: -webkit-scrollbar styling is not directly supported by inline React styles.
  // For webkit browsers, the scrollbar will be visible unless hidden via global CSS.
};

const snapItemStyles: React.CSSProperties = {
  flexShrink: 0, // Prevent items from shrinking
  width: '280px', // Fixed width for each scroll item
  height: '180px', // Fixed height for visual consistency
  background: '#38bdf8',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#0f172a',
  scrollSnapAlign: 'start', // Define each item as a snap point (align to start of item)
  border: '2px solid #0ea5e9',
  padding: '10px',
  textAlign: 'center',
};

export const scrollSnapStopTemplate: PropertyTemplate = {
  name: "Scroll Snap Stop",
  controls: [], // This property has predefined keyword values, no sliders needed
  values: ["normal", "always"], // The two possible values for scroll-snap-stop
  preview: (style) => (
    // The main scrollable container where scroll-snap-stop applies
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{ ...snapItemStyles, background: '#a78bfa', borderColor: '#8b5cf6' }}>
        Scroll Snap Stop Demo<br />Item 1
      </div>
      <div style={snapItemStyles}>
        Item 2
      </div>
      <div style={{ ...snapItemStyles, background: '#facc15', borderColor: '#eab308' }}>
        Item 3
      </div>
      <div style={snapItemStyles}>
        Item 4
      </div>
      <div style={{ ...snapItemStyles, background: '#ef4444', borderColor: '#dc2626' }}>
        Item 5
      </div>
      <div style={{ ...snapItemStyles, background: '#a78bfa', borderColor: '#8b5cf6' }}>
        Item 6
      </div>
      <div style={snapItemStyles}>
        Item 7
      </div>
      <div style={{ ...snapItemStyles, background: '#facc15', borderColor: '#eab308' }}>
        Item 8
      </div>
    </div>
  ),
  generate: (v) => ({ scrollSnapStop: v as any }), // Generates the CSS property with the selected value
  prefix: "scroll-snap-stop: ", // CSS property name in kebab-case for the prefix
  parentClass: "container", // The property applies to the scroll container
};