import type { PropertyTemplate } from "../types";

export const pointerEventsTemplate: PropertyTemplate = {
  name: "Pointer Events",
  controls: [],
  values: ["auto", "none"],
  preview: (style) => {
    return (
      <div style={{ position: "relative", width: "220px", height: "220px" }}>
        <div
          style={{
            width: "180px",
            height: "180px",
            background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Background Element
        </div>
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "180px",
            height: "80px",
            background: "rgba(236, 72, 153, 0.85)",
            borderRadius: "8px",
            border: "2px solid #facc15",
            pointerEvents: style.pointerEvents as any,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "13px",
            cursor: "pointer",
          }}
          onClick={() => alert("Overlay clicked!")}
        >
          Overlay (pointer-events: {style.pointerEvents as string})
        </div>
      </div>
    );
  },
  generate: (v) => ({
    pointerEvents: v as any,
  }),
  prefix: "pointer-events: ",
  parentClass: ".overlay",
};
