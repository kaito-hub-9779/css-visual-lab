import type { PropertyTemplate } from "../types";

export const gridAutoFlowTemplate: PropertyTemplate = {
  name: "Grid Auto Flow",
  controls: [],
  values: ["row", "column", "row dense", "column dense"],
  preview: (style) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 70px)",
        gridTemplateRows: "repeat(3, 60px)",
        gridAutoFlow: style.gridAutoFlow,
        gap: "8px",
        padding: "12px",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          style={{
            background: n === 3
              ? "linear-gradient(135deg, #facc15 0%, #f97316 100%)"
              : "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            borderRadius: "6px",
            gridColumn: n === 3 ? "span 2" : undefined,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {n}
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ gridAutoFlow: v as any }),
  prefix: "grid-auto-flow: ",
  parentClass: ".grid-container",
};
