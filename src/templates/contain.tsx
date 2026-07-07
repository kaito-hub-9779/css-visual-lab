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
  justifyContent: "center",
  alignItems: "center",
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "paint", "style"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <p style={{ margin: "0", textAlign: "center", maxWidth: "400px", fontSize: "0.9em", color: "#94a3b8" }}>
        The <code>contain</code> property allows a developer to indicate to a browser that an element and its contents are independent of the rest of the document's layout. This can significantly improve performance.
        While not directly visually apparent, it helps the browser optimize rendering.
      </p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <div
          style={{
            padding: "20px",
            border: "2px dashed #94a3b8",
            borderRadius: "4px",
            minWidth: "180px",
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0", color: "#e2e8f0" }}>Default Context</h4>
          <p style={{ margin: "0", fontSize: "0.85em", color: "#cbd5e1" }}>
            This box behaves normally, potentially influencing or being influenced by its surroundings.
          </p>
          <div style={{ background: "#4a5568", padding: "10px", marginTop: "15px", borderRadius: "3px", fontSize: "0.8em" }}>
            Child Content
          </div>
        </div>
        <div
          style={{
            ...style, // contain property applied here
            padding: "20px",
            border: "2px solid #38bdf8",
            borderRadius: "4px",
            minWidth: "180px",
            background: "rgba(56, 189, 248, 0.1)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0", color: "#e0f2fe" }}>Contained Context</h4>
          <p style={{ margin: "0", fontSize: "0.85em", color: "#a5f3fc" }}>
            This box is now self-contained, improving rendering performance for the entire page.
          </p>
          <div style={{ background: "#0ea5e9", padding: "10px", marginTop: "15px", borderRadius: "3px", fontSize: "0.8em" }}>
            Child Content
          </div>
        </div>
      </div>
      <p style={{ margin: "15px 0 0 0", textAlign: "center", maxWidth: "500px", fontSize: "0.8em", color: "#64748b" }}>
        (Visual representation implies containment, actual performance benefits are observed at runtime.)
      </p>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};