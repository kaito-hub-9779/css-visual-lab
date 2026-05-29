import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  fontFamily: "sans-serif",
  fontSize: "16px",
};

export const scrollPaddingTopTemplate: PropertyTemplate = {
  name: "Scroll Padding Top",
  controls: [],
  values: ["0px", "60px", "120px"], // Values to demonstrate the effect with a 60px sticky header
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        ...style,
        overflowY: "scroll", // Make the container scrollable
        height: "350px", // Fixed height for the scrollable area
        position: "relative", // Needed for sticky positioning within this container
        border: "2px solid #38bdf8", // Add a border to highlight the scrollable viewport
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      {/* Sticky header within the scrollable container */}
      <div
        style={{
          position: "sticky",
          top: "0",
          background: "#38bdf8",
          padding: "15px 20px",
          zIndex: 10,
          color: "#1a2332",
          fontSize: "1.2em",
          fontWeight: "bold",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          height: "60px", // Explicit height for the sticky header
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>Sticky Header (60px tall)</span>
        <span style={{ fontSize: "0.8em", opacity: 0.8 }}>
          `scroll-padding-top` applied here
        </span>
      </div>

      {/* Introductory content */}
      <p
        style={{
          padding: "20px",
          background: "#2d3a4b",
          margin: "0",
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        Use the navigation links below to jump to sections. Observe how{" "}
        <code style={{ background: "rgba(255,255,255,0.1)", padding: "2px 4px", borderRadius: "3px" }}>scroll-padding-top</code>{" "}
        adjusts the scroll target position, preventing content from being
        obscured by the sticky header.
      </p>

      {/* Target sections for scrolling */}
      <div
        id="section-1"
        style={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#4b5a6b",
          borderTop: "2px dashed #38bdf8",
          margin: "20px 0",
          padding: "10px",
        }}
      >
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          Section 1 (Target)
        </span>
        <span style={{ fontSize: "0.9em", color: "#ccc" }}>
          This is the top of the content that should be visible.
        </span>
      </div>
      <p
        style={{
          padding: "20px",
          background: "#2d3a4b",
          margin: "0",
          textAlign: "center",
        }}
      >
        More content to fill vertical space. Keep scrolling!
      </p>
      <div
        id="section-2"
        style={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#4b5a6b",
          borderTop: "2px dashed #38bdf8",
          margin: "20px 0",
          padding: "10px",
        }}
      >
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          Section 2 (Target)
        </span>
        <span style={{ fontSize: "0.9em", color: "#ccc" }}>
          The scroll position will snap here.
        </span>
      </div>
      <p
        style={{
          padding: "20px",
          background: "#2d3a4b",
          margin: "0",
          textAlign: "center",
        }}
      >
        Even more content to push targets further down.
      </p>
      <div
        id="section-3"
        style={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#4b5a6b",
          borderTop: "2px dashed #38bdf8",
          margin: "20px 0",
          padding: "10px",
        }}
      >
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          Section 3 (Target)
        </span>
        <span style={{ fontSize: "0.9em", color: "#ccc" }}>
          Final target section.
        </span>
      </div>

      {/* Navigation links */}
      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#1a2332",
          textAlign: "center",
          borderTop: "1px solid #38bdf8",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <a
          href="#section-1"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontSize: "1.1em",
            padding: "8px 15px",
            border: "1px solid #38bdf8",
            borderRadius: "5px",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#38bdf850")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Go to Section 1
        </a>
        <a
          href="#section-2"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontSize: "1.1em",
            padding: "8px 15px",
            border: "1px solid #38bdf8",
            borderRadius: "5px",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#38bdf850")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Go to Section 2
        </a>
        <a
          href="#section-3"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontSize: "1.1em",
            padding: "8px 15px",
            border: "1px solid #38bdf8",
            borderRadius: "5px",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#38bdf850")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Go to Section 3
        </a>
      </div>
    </div>
  ),
  generate: (v) => ({ scrollPaddingTop: v as any }),
  prefix: "scroll-padding-top: ",
  parentClass: "container", // The property applies to the scrollable container itself
};