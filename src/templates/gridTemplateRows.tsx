import type { PropertyTemplate } from "../types";

export const gridTemplateRowsTemplate: PropertyTemplate = {
  name: "Grid Template Rows",
  controls: [],
  values: [
    "repeat(3, 1fr)",
    "repeat(3, auto)",
    "80px 1fr 80px",
    "1fr 2fr 1fr",
    "minmax(60px, auto) 1fr minmax(60px, auto)",
  ],
  preview: (style) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: style.gridTemplateRows,
        gap: "8px",
        width: "200px",
        height: "260px",
        padding: "12px",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
      }}
    >
      {["header", "main", "footer"].map((l, i) => (
        <div
          key={l}
          style={{
            background: [
              "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
              "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
              "linear-gradient(135deg, #34d399 0%, #0ea5e9 100%)",
            ][i],
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          {l}
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ gridTemplateRows: v }),
  prefix: "grid-template-rows: ",
  parentClass: ".grid-container",
};
