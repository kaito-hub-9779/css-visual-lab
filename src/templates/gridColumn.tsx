import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const gridColumnTemplate: PropertyTemplate = {
  name: "Grid Column",
  controls: [],
  values: ["1 / 3", "2 / 4", "span 2", "1 / span 3", "2 / -1"],
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      <div
        style={{
          padding: "15px",
          background: "#38bdf8",
          borderRadius: "4px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Item 1
      </div>
      <div
        style={{
          padding: "15px",
          background: "#38bdf8",
          borderRadius: "4px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Item 2
      </div>
      <div
        style={{
          padding: "15px",
          background: "#38bdf8",
          borderRadius: "4px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Item 3
      </div>
      <div
        style={{
          padding: "15px",
          background: "#38bdf8",
          borderRadius: "4px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Item 4
      </div>
      <div
        style={{
          ...style,
          padding: "20px",
          background: "#f8fafc",
          color: "#1a2332",
          borderRadius: "4px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.1em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80px",
        }}
      >
        Affected Item
      </div>
      <div
        style={{
          padding: "15px",
          background: "#38bdf8",
          borderRadius: "4px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Item 5
      </div>
      <div
        style={{
          padding: "15px",
          background: "#38bdf8",
          borderRadius: "4px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Item 6
      </div>
    </div>
  ),
  generate: (v) => ({ gridColumn: v as any }),
  prefix: "grid-column: ",
  parentClass: "container",
};