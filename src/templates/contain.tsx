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
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  textAlign: "center",
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "style", "paint"],
  preview: (style) => (
    <div style={demoContainerStyles}>
      <p style={{ fontSize: "0.9em", opacity: 0.8, marginBottom: "5px" }}>
        The `contain` property is applied to the blue box below.
      </p>
      <div
        style={{
          padding: "25px",
          border: "2px solid #38bdf8",
          borderRadius: "6px",
          backgroundColor: "rgba(56, 189, 248, 0.1)",
          minWidth: "250px",
          minHeight: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1em",
          fontWeight: "bold",
          boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)",
          ...style,
        }}
      >
        <span>This element is contained</span>
      </div>
      <p style={{ fontSize: "0.8em", opacity: 0.7, maxWidth: "450px", marginTop: "10px" }}>
        `contain` declares that this element and its contents are independent of the rest of the document layout, allowing for browser optimizations by limiting the scope of calculations.
      </p>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};