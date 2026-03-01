import type { PropertyTemplate } from "../types";

export const imageRenderingTemplate: PropertyTemplate = {
  name: "Image Rendering",
  controls: [],
  values: ["auto", "crisp-edges", "pixelated"],
  preview: (style) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}>
      {(["auto", "crisp-edges", "pixelated"] as const).map((v) => (
        <div key={v} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              imageRendering: v,
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='2' height='2' fill='%2338bdf8'/%3E%3Crect x='2' y='2' width='2' height='2' fill='%23facc15'/%3E%3Crect x='2' width='2' height='2' fill='%23ec4899'/%3E%3Crect y='2' width='2' height='2' fill='%238b5cf6'/%3E%3C/svg%3E")`,
              backgroundSize: "4px 4px",
              border: `2px solid ${v === style.imageRendering ? "#facc15" : "#334155"}`,
              borderRadius: "4px",
            }}
          />
          <div style={{ color: v === style.imageRendering ? "#facc15" : "#94a3b8", fontSize: "10px", marginTop: "4px" }}>
            {v}
          </div>
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ imageRendering: v as any }),
  prefix: "image-rendering: ",
  parentClass: "img",
};
