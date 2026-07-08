import type { PropertyTemplate } from "../types";
import React, { useRef } from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  fontFamily: "'Segoe UI', Roboto, sans-serif",
};

export const scrollBehaviorTemplate: PropertyTemplate = {
  name: "Scroll Behavior",
  controls: [],
  values: ["auto", "smooth"],
  preview: (style) => {
    const item1Ref = useRef<HTMLDivElement>(null);
    const item2Ref = useRef<HTMLDivElement>(null);
    const item3Ref = useRef<HTMLDivElement>(null);

    // The 'style' prop contains the selected scrollBehavior value
    // E.g., { scrollBehavior: 'auto' } or { scrollBehavior: 'smooth' }
    const scrollContentStyles: React.CSSProperties = {
      flex: 1, // Allows the scrollable area to take available space
      overflowY: "scroll",
      border: "2px solid #38bdf8",
      borderRadius: "4px",
      padding: "10px",
      maxHeight: "150px", // Explicitly limit height to ensure scrolling within the parent's minHeight
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      ...style, // Apply scrollBehavior here
    };

    const scrollItemStyles: React.CSSProperties = {
      minHeight: "80px",
      background: "#384154",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.1em",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      flexShrink: 0, // Prevent items from shrinking below minHeight
    };

    const buttonStyles: React.CSSProperties = {
      padding: '8px 12px',
      background: '#38bdf8',
      color: '#1a2332',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.9em',
      fontWeight: 'bold',
    };

    return (
      <div style={demoContainerStyles}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
          <button
            onClick={() => item1Ref.current?.scrollIntoView({ block: 'start' })} // Let CSS property dictate 'behavior'
            style={buttonStyles}
          >
            Scroll to Item 1
          </button>
          <button
            onClick={() => item2Ref.current?.scrollIntoView({ block: 'center' })} // Let CSS property dictate 'behavior'
            style={buttonStyles}
          >
            Scroll to Item 2
          </button>
          <button
            onClick={() => item3Ref.current?.scrollIntoView({ block: 'end' })} // Let CSS property dictate 'behavior'
            style={buttonStyles}
          >
            Scroll to Item 3
          </button>
        </div>
        <div style={scrollContentStyles}>
          <div ref={item1Ref} style={scrollItemStyles}>Item 1</div>
          <div style={scrollItemStyles}>Scrollable content block A</div>
          <div ref={item2Ref} style={scrollItemStyles}>Item 2</div>
          <div style={scrollItemStyles}>Scrollable content block B</div>
          <div style={scrollItemStyles}>More content to fill space</div>
          <div ref={item3Ref} style={scrollItemStyles}>Item 3</div>
          <div style={scrollItemStyles}>End of scrollable content</div>
        </div>
        <p style={{ marginTop: '10px', fontSize: '0.85em', color: '#94a3b8', textAlign: 'center' }}>
          Click the buttons above to see the scroll behavior.
          <br />
          (The scroll container has `scroll-behavior` applied.)
        </p>
      </div>
    );
  },
  generate: (v) => ({ scrollBehavior: v as any }),
  prefix: "scroll-behavior: ",
  parentClass: "block",
};