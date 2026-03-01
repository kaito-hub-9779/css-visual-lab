import type { PropertyTemplate } from "../types";

export const gridTemplate: PropertyTemplate = {
  name: "Grid",
  controls: [
    {
      key: "columns",
      label: "Columns",
      min: 1,
      max: 5,
      unit: "",
      default: 3,
    },
    {
      key: "gap",
      label: "Gap",
      min: 0,
      max: 40,
      unit: "px",
      default: 12,
    },
  ],
  values: [
    "repeat(1, 1fr)",
    "repeat(2, 1fr)",
    "repeat(3, 1fr)",
    "repeat(4, 1fr)",
    "1fr 2fr 1fr",
    "repeat(3, minmax(80px, 1fr))",
  ],
  preview: (style) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: style.gridTemplateColumns,
          gap: "12px",
          width: "100%",
          maxWidth: "360px",
          padding: "16px",
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
              borderRadius: "6px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f8fafc",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {n}
          </div>
        ))}
      </div>
    );
  },
  generate: (v) => ({
    gridTemplateColumns: v,
  }),
  prefix: "grid-template-columns: ",
  parentClass: ".grid-container",
};
