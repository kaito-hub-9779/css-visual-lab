import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "350px", // Increased height to better accommodate the demo content
  color: "#f8fafc",
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  alignItems: 'center',
  justifyContent: 'center',
};

export const scrollMarginTopTemplate: PropertyTemplate = {
  name: "Scroll Margin Top",
  controls: [],
  values: ["0px", "50px", "100px", "150px"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p style={{ margin: 0, textAlign: 'center', fontSize: '1.1em' }}>
        Click 'Scroll to Target' to see how `scroll-margin-top` offsets the target element from the top of the scroll container.
      </p>
      <div style={{
          width: '90%',
          height: '220px', // Fixed height for the scrollable area
          overflowY: 'scroll',
          border: '2px solid #38bdf8',
          borderRadius: '4px',
          background: '#2d3748',
          padding: '10px',
          boxSizing: 'border-box',
          position: 'relative', // Needed for scroll-behavior
      }}>
        <div style={{ height: '30px' }}></div> {/* Spacer at the top */}
        {[...Array(5)].map((_, i) => (
          <div key={`block-${i}`} style={{ height: '60px', background: i % 2 === 0 ? '#4a5568' : '#607d8b', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
            Content block {i + 1}
          </div>
        ))}
        <div id="target-element" style={{
            ...style, // `scrollMarginTop` will be applied here
            padding: '15px',
            background: '#38bdf8', // Highlight target element
            color: '#1a2332',
            borderRadius: '4px',
            marginBottom: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.1em',
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
        }}>
            This is the target element!
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={`block-after-${i}`} style={{ height: '60px', background: i % 2 === 0 ? '#607d8b' : '#4a5568', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
            Content block {i + 6}
          </div>
        ))}
        <div style={{ height: '30px' }}></div> {/* Spacer at the bottom */}
      </div>
      <button onClick={() => document.getElementById('target-element')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          padding: '10px 20px',
          background: '#38bdf8',
          color: '#1a2332',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          transition: 'background 0.2s ease-in-out',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#0e7490')}
        onMouseOut={(e) => (e.currentTarget.style.background = '#38bdf8')}
      >
        Scroll to Target
      </button>
    </div>
  ),
  generate: (v) => ({ scrollMarginTop: v as any }),
  prefix: "scroll-margin-top: ",
  parentClass: "block",
};