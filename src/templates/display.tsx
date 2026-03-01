import type { PropertyTemplate } from "../types";

export const displayTemplate: PropertyTemplate = {
  name: "Display",
  controls: [],
  values: ["block", "inline", "inline-block", "flex", "grid", "none"],
  preview: (style) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "flex-start",
        width: "280px",
      }}
    >
      <div
        style={{
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          padding: "12px",
          width: "100%",
          color: "#94a3b8",
          fontSize: "13px",
        }}
      >
        parent container
        <div
          style={{
            display: style.display as any,
            marginTop: "8px",
            gap: "8px",
          }}
        >
          {["A", "B", "C"].map((l) => (
            <div
              key={l}
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
                borderRadius: "6px",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ display: v as any }),
  prefix: "display: ",
  parentClass: ".container",
};
