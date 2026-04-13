import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  borderRadius: "8px",
  height: "250px", // Fixed height to enable scrolling
  overflowY: "scroll",
  scrollSnapType: "y mandatory", // Make it snap vertically
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  color: "#f8fafc",
  // scrollPadding will be applied directly via the `style` prop
  // The outer background color provides a clear boundary.
};

const snapItemStyles: React.CSSProperties = {
  minHeight: "150px",
  width: "calc(100% - 40px)", // Account for 20px left/right visual margin
  margin: '10px auto', // Visual margin for items inside the scroll area
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  scrollSnapAlign: "start", // Each item snaps to the start of the scroll container
  flexShrink: 0, // Prevent items from shrinking
  padding: '20px',
  boxSizing: 'border-box',
  fontWeight: 'bold',
  fontSize: '1.2em',
  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
};

export const scrollPaddingTemplate: PropertyTemplate = {
  name: "Scroll Padding",
  controls: [],
  values: ["0", "20px", "40px 0", "10vh 5vw", "20px 10px 30px 40px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
       {/* demo content that clearly illustrates the property */}
       <div style={{ ...snapItemStyles, background: "#38bdf8", border: '2px solid #38bdf8' }}>
          Item 1 (Snap target)
       </div>
       <div style={{ ...snapItemStyles, background: "#60a5fa", border: '2px solid #60a5fa' }}>
          Item 2 (Snap target)
       </div>
       <div style={{ ...snapItemStyles, background: "#818cf8", border: '2px solid #818cf8' }}>
          Item 3 (Snap target)
       </div>
       <div style={{ ...snapItemStyles, background: "#c084fc", border: '2px solid #c084fc' }}>
          Item 4 (Snap target)
       </div>
       <div style={{ ...snapItemStyles, background: "#e879f9", border: '2px solid #e879f9' }}>
          Item 5 (Snap target)
       </div>
    </div>
  ),
  generate: (v) => ({ scrollPadding: v as any }),
  prefix: "scroll-padding: ",
  parentClass: "container",
};