import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  alignItems: "center",
  justifyContent: "center",
};

export const containerTypeTemplate: PropertyTemplate = {
  name: "Container Type",
  controls: [],
  values: ["normal", "size", "inline-size"],
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        ...style,
        border: "2px dashed #4ade80", // Visually indicates the container element
      }}
    >
      <p style={{ margin: 0, fontSize: "1.1em", fontWeight: "bold", textAlign: 'center' }}>
        This box is a container with{" "}
        <code style={{ color: "#facc15" }}>
          container-type: {style.containerType || "normal"}
        </code>
      </p>
      <div
        style={{
          background: "#0f172a",
          border: "1px solid #3b82f6",
          borderRadius: "4px",
          padding: "15px",
          width: "80%",
          maxWidth: "350px", // Example inner element that could be queried
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <p style={{ margin: "0 0 10px 0", fontSize: "0.9em" }}>
          This inner content would respond to container queries.
        </p>
        <span
          style={{
            display: "inline-block",
            padding: "5px 10px",
            background: "#8b5cf6",
            borderRadius: "3px",
            fontSize: "0.8em",
            fontWeight: "600",
          }}
        >
          {style.containerType !== 'normal' ? 'Query Enabled' : 'Query Disabled'}
        </span>
      </div>
      <p style={{ margin: 0, fontSize: '0.8em', color: '#cbd5e1', textAlign: 'center', maxWidth: '80%' }}>
        <code style={{color: '#93c5fd'}}>normal</code>: Not a query container. <code style={{color: '#93c5fd'}}>size</code>: Queries based on width and height. <code style={{color: '#93c5fd'}}>inline-size</code>: Queries based on inline dimension (width in horizontal writing modes).
      </p>
    </div>
  ),
  generate: (v) => ({ containerType: v as any }),
  prefix: "container-type: ",
  parentClass: "block",
};