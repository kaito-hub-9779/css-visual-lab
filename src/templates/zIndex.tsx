import type { PropertyTemplate } from "../types";

export const zIndexTemplate: PropertyTemplate = {
  name: "Z-Index",
  controls: [
    { key: "zIndex", label: "Z-Index", min: -10, max: 10, unit: "", default: 1 },
  ],
  values: ["-1", "0", "1", "5", "10", "100"],
  preview: (style) => (
    <div style={{ position: "relative", width: "240px", height: "200px" }}>
      {[
        { label: "z:1", z: 1, top: 20, left: 20, color: "#38bdf8" },
        { label: "z:2", z: 2, top: 60, left: 60, color: "#facc15" },
        {
          label: `z:${style.zIndex}`,
          z: parseInt(style.zIndex as string) || 0,
          top: 40,
          left: 100,
          color: "#ec4899",
        },
      ].map(({ label, z, top, left, color }) => (
        <div
          key={label}
          style={{
            position: "absolute",
            top,
            left,
            zIndex: z,
            width: "100px",
            height: "100px",
            background: color,
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#111",
            fontWeight: "bold",
            opacity: 0.85,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ zIndex: parseInt(v) as any }),
  prefix: "z-index: ",
  parentClass: ".box",
};
