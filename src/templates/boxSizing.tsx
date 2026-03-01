import type { PropertyTemplate } from "../types";

export const boxSizingTemplate: PropertyTemplate = {
  name: "Box Sizing",
  controls: [],
  values: ["content-box", "border-box"],
  preview: (style) => (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      {(["content-box", "border-box"] as const).map((v) => (
        <div key={v} style={{ textAlign: "center" }}>
          <div
            style={{
              boxSizing: v,
              width: "120px",
              height: "100px",
              padding: "20px",
              border: "8px solid #facc15",
              background:
                v === style.boxSizing
                  ? "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)"
                  : "#1a2332",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f8fafc",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            w:120px
          </div>
          <div style={{ color: v === style.boxSizing ? "#facc15" : "#94a3b8", fontSize: "11px", marginTop: "6px" }}>
            {v}
          </div>
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ boxSizing: v as any }),
  prefix: "box-sizing: ",
  parentClass: ".box",
};
