import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const justifySelfTemplate: PropertyTemplate = {
  name: "Justify Self",
  controls: [],
  values: ["auto", "start", "end", "center", "stretch"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 120px)",
          gap: "10px",
          border: "2px dashed #4a5568",
          padding: "15px",
          borderRadius: "6px",
          backgroundColor: "#2c3e50",
        }}
      >
        <div
          style={{
            background: "#38bdf8",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9em",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Item 1
        </div>
        <div
          style={{
            background: "#fca5a5",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            height: "60px",
            width: "80px", // Smaller width to clearly show start/end/center
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9em",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            ...style, // The justifySelf style is applied here
          }}
        >
          Target
        </div>
        <div
          style={{
            background: "#38bdf8",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9em",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Item 3
        </div>
        <div
          style={{
            gridColumn: "span 3",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "0.8em",
            color: "#cbd5e1",
          }}
        >
          <span
            style={{
              backgroundColor: "#fca5a5",
              padding: "2px 5px",
              borderRadius: "3px",
              color: "#1a2332",
              fontWeight: "bold",
            }}
          >
            Target
          </span>{" "}
          item's horizontal alignment within its grid cell.
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ justifySelf: v as any }),
  prefix: "justify-self: ",
  parentClass: "block",
};