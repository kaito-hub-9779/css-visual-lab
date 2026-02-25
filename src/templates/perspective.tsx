import type { PropertyTemplate } from "../types";

export const perspectiveTemplate: PropertyTemplate = {
  name: "Perspective",
  controls: [
    { key: "perspective", label: "Perspective", min: 100, max: 2000, unit: "px", default: 600 },
  ],
  values: ["100px", "300px", "600px", "1000px", "2000px", "none"],
  preview: (style) => (
    <div style={{ perspective: style.perspective as string, display: "flex", alignItems: "center", justifyContent: "center", width: "260px", height: "220px" }}>
      <div
        style={{
          width: "160px",
          height: "160px",
          background: "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)",
          border: "3px solid #facc15",
          borderRadius: "8px",
          transform: "rotateY(40deg) rotateX(20deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        3D Box
      </div>
    </div>
  ),
  generate: (v) => ({ perspective: v }),
  prefix: "perspective: ",
  parentClass: ".container",
};
