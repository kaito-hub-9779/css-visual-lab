import type { PropertyTemplate } from "../types";

export const placeItemsTemplate: PropertyTemplate = {
  name: "Place Items",
  controls: [],
  values: [
    "start",
    "end",
    "center",
    "stretch",
    "start center",
    "center start",
    "end end",
  ],
  preview: (style) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gridTemplateRows: "repeat(2, 80px)",
        placeItems: style.placeItems,
        gap: "8px",
        padding: "12px",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
        width: "280px",
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            borderRadius: "6px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {n}
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ placeItems: v as any }),
  prefix: "place-items: ",
  parentClass: ".grid-container",
};
