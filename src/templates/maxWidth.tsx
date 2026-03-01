import type { PropertyTemplate } from "../types";

export const maxWidthTemplate: PropertyTemplate = {
  name: "Max Width",
  controls: [
    { key: "maxWidth", label: "Max Width", min: 50, max: 400, unit: "px", default: 200 },
  ],
  values: ["100px", "200px", "300px", "400px", "none", "50%"],
  preview: (style) => (
    <div style={{ width: "100%", maxWidth: "400px", background: "#0b0f19", borderRadius: "8px", padding: "8px" }}>
      <div
        style={{
          maxWidth: style.maxWidth,
          width: "100%",
          height: "80px",
          background: "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        max-width: {style.maxWidth as string}
      </div>
    </div>
  ),
  generate: (v) => ({ maxWidth: v }),
  prefix: "max-width: ",
  parentClass: ".box",
};
