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
};

// Internal scrollable container
const scrollableContainerStyles: React.CSSProperties = {
  flexGrow: 1,
  overflowY: "scroll",
  height: "200px", // Fixed height to ensure scrollability within the demo container
  scrollSnapType: "y mandatory", // Enable scroll snapping
  border: "1px solid #38bdf8",
  borderRadius: "4px",
  position: 'relative', // For sticky header
};

// Sticky header to demonstrate scroll-padding interaction
const stickyHeaderStyles: React.CSSProperties = {
  position: "sticky",
  top: "0",
  background: "#1a2332",
  padding: "10px",
  borderBottom: "1px solid #38bdf8",
  zIndex: 10,
  textAlign: 'center',
  fontSize: '1.2em',
  fontWeight: 'bold',
};

// Item to snap to
const snapItemStyles: React.CSSProperties = {
  scrollSnapAlign: "start", // This item will try to snap to the 'start' of the scrollport
  minHeight: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#4b5563",
  margin: "10px 0",
  borderRadius: "4px",
  border: "1px dashed #60a5fa",
};

export const scrollPaddingTemplate: PropertyTemplate = {
  name: "Scroll Padding",
  controls: [],
  values: ["0", "20px", "40px", "60px", "80px"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p style={{ marginBottom: '10px', fontSize: '0.9em', color: '#cbd5e1' }}>
        Scroll down to see how `scroll-padding` shifts the snap target's final position,
        especially when a sticky header is present.
      </p>
      <div style={{ ...scrollableContainerStyles, ...style }}>
        <div style={stickyHeaderStyles}>Sticky Header (top: 0)</div>
        <div style={{ padding: '0 10px' }}> {/* Content wrapper inside scroll area */}
          <div style={snapItemStyles}>Scroll Snap Item 1</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div style={snapItemStyles}>Scroll Snap Item 2</div>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div style={snapItemStyles}>Scroll Snap Item 3</div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div style={snapItemStyles}>Scroll Snap Item 4</div>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <div style={snapItemStyles}>Scroll Snap Item 5</div>
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ scrollPadding: v as any }),
  prefix: "scroll-padding: ",
  parentClass: "container",
};