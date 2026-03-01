import type { PropertyTemplate } from "../types";

export const resizeTemplate: PropertyTemplate = {
  name: "Resize",
  controls: [],
  values: ["none", "both", "horizontal", "vertical"],
  preview: (style) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          resize: style.resize as any,
          overflow: "auto",
          width: "200px",
          height: "120px",
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f8fafc",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Drag to resize →
      </div>
      <span style={{ color: "#94a3b8", fontSize: "12px" }}>resize: {style.resize as string}</span>
    </div>
  ),
  generate: (v) => ({ resize: v as any }),
  prefix: "resize: ",
  parentClass: ".box",
};
