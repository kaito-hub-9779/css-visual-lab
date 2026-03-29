import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

const flexItemStyles: React.CSSProperties = {
  background: "#38bdf8",
  color: "#1a2332",
  padding: "10px 15px",
  borderRadius: "4px",
  minWidth: "70px",
  textAlign: "center",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

export const placeContentTemplate: PropertyTemplate = {
  name: "Place Content",
  controls: [],
  values: [
    "start",
    "end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          height: "200px", // Fixed height to show vertical content alignment
          width: "100%",
          border: "2px dashed #38bdf8",
          padding: "10px",
          ...style, // placeContent will be applied here
        }}
      >
        <div style={flexItemStyles}>Item 1</div>
        <div style={flexItemStyles}>Item 2</div>
        <div style={flexItemStyles}>Item 3</div>
        <div style={flexItemStyles}>Item 4</div>
        <div style={flexItemStyles}>Item 5</div>
        <div style={flexItemStyles}>Item 6</div>
        <div style={flexItemStyles}>Item 7</div>
        <div style={flexItemStyles}>Item 8</div>
      </div>
    </div>
  ),
  generate: (v) => ({ placeContent: v as any }),
  prefix: "place-content: ",
  parentClass: "container",
};