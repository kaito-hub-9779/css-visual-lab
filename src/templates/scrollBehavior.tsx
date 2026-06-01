import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const scrollBehaviorTemplate: PropertyTemplate = {
  name: "Scroll Behavior",
  controls: [],
  values: ["auto", "smooth"],
  preview: (style) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const targetRef = React.useRef<HTMLDivElement>(null);

    const handleScrollToTarget = () => {
      if (targetRef.current) {
        // Use the selected scrollBehavior from the style object
        targetRef.current.scrollIntoView({ behavior: (style.scrollBehavior as ScrollBehavior) || 'auto' });
      }
    };

    return (
      <div style={{ ...demoContainerStyles, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <button
          onClick={handleScrollToTarget}
          style={{
            background: "#38bdf8",
            color: "#1a2332",
            border: "none",
            padding: "10px 15px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            alignSelf: 'flex-start',
            transition: 'background 0.2s ease',
          }}
        >
          Scroll to Highlighted Item
        </button>
        <div
          ref={scrollRef}
          style={{
            ...style, // Apply scrollBehavior here (e.g., scrollBehavior: 'smooth')
            border: "2px solid #38bdf8",
            borderRadius: "4px",
            height: "150px", // Fixed height to enable scrolling
            overflowY: "scroll",
            padding: "10px",
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              ref={i === 8 ? targetRef : null} // Highlight the 9th item (index 8)
              style={{
                padding: "10px 15px",
                background: i === 8 ? "#ef4444" : "#4a5568", // Highlighted background
                color: i === 8 ? "#f8fafc" : "#e2e8f0",
                borderRadius: "4px",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              <span>Item {i + 1}</span>
              {i === 8 && <span style={{fontSize: '0.8em', opacity: 0.9, fontWeight: 'bold'}}>✨ Target Item ✨</span>}
            </div>
          ))}
        </div>
        <p style={{fontSize: '0.9em', color: '#cbd5e1'}}>Click the button above to observe the scrolling animation effect.</p>
      </div>
    );
  },
  generate: (v) => ({ scrollBehavior: v as any }),
  prefix: "scroll-behavior: ",
  parentClass: "block",
};