import type { PropertyTemplate } from "../types";

export const positionTemplate: PropertyTemplate = {
  name: "Position",
  controls: [],
  values: ["static", "relative", "absolute", "sticky"],
  preview: (style) => (
    <div
      style={{
        position: "relative",
        width: "280px",
        height: "180px",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: style.position as any,
          top: "20px",
          right: "20px",
          background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
          borderRadius: "8px",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        {style.position as string}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "12px",
          color: "#94a3b8",
          fontSize: "12px",
        }}
      >
        parent (relative)
      </div>
    </div>
  ),
  generate: (v) => ({ position: v as any }),
  prefix: "position: ",
  parentClass: ".box",
};
