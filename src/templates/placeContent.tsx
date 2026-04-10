import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "280px", // Increased height to better illustrate vertical distribution
  color: "#f8fafc",

  display: "flex",
  flexWrap: "wrap", // Essential for place-content to affect multiple lines
  gap: "10px", // Visual spacing between items
  width: "100%",
  boxSizing: "border-box", // Ensure padding doesn't push width over
  border: "2px dashed #6b7280", // Border to highlight the container's extent
};

const demoItemStyles: React.CSSProperties = {
  background: "#38bdf8",
  color: "#1a2332",
  padding: "10px 15px",
  borderRadius: "4px",
  fontSize: "0.9em",
  flexShrink: 0, // Prevent items from shrinking below their content size
  width: "calc(33% - 10px)", // Make items wrap into multiple lines (approx 3 per row)
  minWidth: "90px", // Ensure items have a minimum width
  textAlign: "center",
  boxSizing: "border-box",
};

export const placeContentTemplate: PropertyTemplate = {
  name: "Place Content",
  controls: [],
  values: [
    "normal", // Default value
    "start",
    "end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    // Combination values: align-content justify-content
    "center space-between",
    "flex-start flex-end", // Using flex-* keywords for clarity in flex context
    "stretch center",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* Demo content: multiple items that will wrap within the flex container */}
      <div style={demoItemStyles}>Item 1</div>
      <div style={demoItemStyles}>Item 2</div>
      <div style={demoItemStyles}>Item 3</div>
      <div style={demoItemStyles}>Item 4</div>
      <div style={demoItemStyles}>Item 5</div>
      <div style={demoItemStyles}>Item 6</div>
      <div style={demoItemStyles}>Item 7</div>
      <div style={demoItemStyles}>Item 8</div>
      <div style={demoItemStyles}>Item 9</div>
    </div>
  ),
  generate: (v) => ({ placeContent: v as any }),
  prefix: "place-content: ",
  parentClass: "container",
};