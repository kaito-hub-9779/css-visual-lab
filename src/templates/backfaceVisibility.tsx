import type { PropertyTemplate } from "../types";

export const backfaceVisibilityTemplate: PropertyTemplate = {
  name: "Backface Visibility",
  controls: [],
  values: ["visible", "hidden"],
  preview: (style) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      {(["visible", "hidden"] as const).map((v) => (
        <div key={v} style={{ textAlign: "center" }}>
          <div
            style={{
              perspective: "400px",
              width: "100px",
              height: "100px",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                background:
                  v === "visible"
                    ? "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)"
                    : "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
                border: `3px solid ${v === style.backfaceVisibility ? "#facc15" : "#334155"}`,
                borderRadius: "8px",
                backfaceVisibility: v,
                transform: "rotateY(160deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "11px",
              }}
            >
              back face
            </div>
          </div>
          <div style={{ color: v === style.backfaceVisibility ? "#facc15" : "#94a3b8", fontSize: "11px", marginTop: "6px" }}>
            {v}
          </div>
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ backfaceVisibility: v as any }),
  prefix: "backface-visibility: ",
  parentClass: ".box",
};
