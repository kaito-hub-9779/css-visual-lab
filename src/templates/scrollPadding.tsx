import type { PropertyTemplate } from "../types";
import React, { useRef } from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "400px",
  color: "#f8fafc",
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const scrollContainerStyles: React.CSSProperties = {
  height: "250px", // Fixed height to make it scrollable
  overflowY: "scroll",
  border: "2px solid #38bdf8",
  borderRadius: "4px",
  padding: "10px",
  background: "#2a374c",
};

const sectionStyles: React.CSSProperties = {
  height: "150px",
  background: "#4b5c77",
  margin: "10px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#f8fafc",
  borderRadius: "4px",
};

export const scrollPaddingTemplate: PropertyTemplate = {
  name: "Scroll Padding",
  controls: [
    { key: "scrollPadding", label: "Padding", min: 0, max: 100, unit: "px", default: 0 },
  ],
  values: ["0px", "20px", "50px", "80px"],
  preview: (style) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (id: string) => {
      if (scrollRef.current) {
        const targetElement = scrollRef.current.querySelector(`#${id}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    return (
      <div style={{ ...demoContainerStyles }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button
            style={{ padding: '8px 15px', background: '#38bdf8', color: '#1a2332', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => scrollToSection('section1')}
          >
            Scroll to Section 1
          </button>
          <button
            style={{ padding: '8px 15px', background: '#38bdf8', color: '#1a2332', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => scrollToSection('section2')}
          >
            Scroll to Section 2
          </button>
          <button
            style={{ padding: '8px 15px', background: '#38bdf8', color: '#1a2332', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => scrollToSection('section3')}
          >
            Scroll to Section 3
          </button>
        </div>
        <div ref={scrollRef} style={{ ...scrollContainerStyles, ...style }}>
          <div id="section1" style={sectionStyles}>Section 1</div>
          <div id="section2" style={sectionStyles}>Section 2</div>
          <div id="section3" style={sectionStyles}>Section 3</div>
          <div id="section4" style={sectionStyles}>Section 4</div>
        </div>
        <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#94a3b8' }}>
          Click "Scroll to Section" buttons to see how `scroll-padding` affects the scroll position when an element is brought into view.
        </p>
      </div>
    );
  },
  generate: (v) => ({ scrollPadding: v as any }),
  prefix: "scroll-padding: ",
  parentClass: "container",
};