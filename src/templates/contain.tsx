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
  gap: "20px",
  alignItems: "flex-start",
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "style", "paint"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <p style={{ fontSize: "0.9em", color: "#cbd5e0" }}>
        <code>contain</code> declares that an element and its contents are, as much as possible, independent of the rest of the document tree.
        This allows the browser to optimize layout, style, and paint processes, potentially improving performance.
      </p>
      <div
        style={{
          ...style, // The contain property will be applied here
          padding: "20px",
          border: "2px dashed #38bdf8",
          borderRadius: "8px",
          background: "#2d3748",
          color: "#f8fafc",
          width: "80%",
          minHeight: "100px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3 style={{ margin: 0, color: "#38bdf8" }}>Contained Element</h3>
        <p style={{ margin: 0, fontSize: "0.9em" }}>
          This box represents an element with <code>contain: {style?.contain as string || "none"}</code>.
          Its internal content (like this text and styling) is declared to be "contained" within its boundaries.
          This helps the browser avoid recalculating things like layout or paint for the entire page if something changes inside this box.
        </p>
        <div style={{ background: "#4a5568", padding: "8px", borderRadius: "4px", fontSize: "0.8em", opacity: 0.9 }}>
          Internal content affecting only this area.
        </div>
      </div>
      <div
        style={{
          padding: "15px",
          border: "1px solid #4a5568",
          borderRadius: "8px",
          background: "#4a5568",
          fontSize: "0.85em",
          color: "#cbd5e0",
          width: "90%",
        }}
      >
        This is other content on the page, whose rendering is less likely to be affected by changes within the contained element above.
      </div>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};