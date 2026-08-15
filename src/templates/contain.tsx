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
  gap: "20px",
  flexDirection: "column",
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "style", "paint"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <p style={{ margin: 0, fontSize: "0.9em", opacity: 0.8, maxWidth: "400px", textAlign: "center" }}>
        <code>contain</code> isolates an element's rendering from the rest of the document,
        allowing the browser to perform optimizations.
      </p>
      <div
        style={{
          width: "250px",
          height: "150px",
          padding: "20px",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          background: "#2d3748",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "background 0.3s ease",
          ...style, // The 'contain' property will be applied here
        }}
      >
        <span style={{ fontSize: "1.1em", fontWeight: "bold", color: "#e0f2fe" }}>
          This box has <code>contain</code> applied.
        </span>
      </div>
      <p style={{ margin: 0, fontSize: "0.8em", opacity: 0.7, maxWidth: "400px", textAlign: "center" }}>
        (Visual changes can be subtle for <code>contain</code> as it primarily affects rendering performance rather than direct layout or appearance.)
      </p>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};