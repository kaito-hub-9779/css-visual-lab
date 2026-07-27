import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  height: "250px", // Fixed height to enable scrolling
  overflowY: "scroll", // Make it scrollable
  color: "#f8fafc",
  position: "relative", // Ensures internal anchor links work consistently
};

export const scrollBehaviorTemplate: PropertyTemplate = {
  name: "Scroll Behavior",
  controls: [],
  values: ["auto", "smooth"],
  preview: (style) => {
    const sectionStyles: React.CSSProperties = {
      padding: "20px",
      margin: "10px 0",
      borderRadius: "4px",
      border: "2px solid #38bdf8",
      minHeight: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2em",
      backgroundColor: "#2d3748",
      color: "#e2e8f0",
      scrollMarginTop: "10px", // Helps when scrolling to an element to prevent it from being exactly at the very top edge
    };

    const linkStyles: React.CSSProperties = {
      color: "#38bdf8",
      textDecoration: "underline",
      margin: "0 10px",
      cursor: "pointer",
    };

    return (
      <div style={{ ...demoContainerStyles, ...style }}>
        <p style={{ margin: "0 0 15px", textAlign: "center", fontSize: "1.1em" }}>
          Click an item to scroll to it and observe the scroll animation.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <a href="#section1" style={linkStyles}>
            Scroll to Section 1
          </a>
          <a href="#section3" style={linkStyles}>
            Scroll to Section 3
          </a>
          <a href="#section5" style={linkStyles}>
            Scroll to Section 5
          </a>
        </div>
        <div id="section1" style={{ ...sectionStyles, background: "#ef4444" }}>
          Section 1 (Top)
        </div>
        <div id="section2" style={{ ...sectionStyles, background: "#f97316" }}>
          Section 2
        </div>
        <div id="section3" style={{ ...sectionStyles, background: "#10b981" }}>
          Section 3 (Middle)
        </div>
        <div id="section4" style={{ ...sectionStyles, background: "#6366f1" }}>
          Section 4
        </div>
        <div id="section5" style={{ ...sectionStyles, background: "#ec4899" }}>
          Section 5 (Bottom)
        </div>
        <div style={{ height: "50px" }}></div> {/* Extra space to ensure smooth scroll to bottom */}
      </div>
    );
  },
  generate: (v) => ({ scrollBehavior: v as any }),
  prefix: "scroll-behavior: ",
  parentClass: "container",
};