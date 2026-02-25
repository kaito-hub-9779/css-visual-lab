import type { PropertyTemplate } from "../types";

export const marginTemplate: PropertyTemplate = {
  name: "Margin",
  controls: [
    {
      key: "margin",
      label: "Margin",
      min: 0,
      max: 60,
      unit: "px",
      default: 16,
    },
  ],
  values: ["0px", "8px", "16px", "24px", "32px", "48px", "auto"],
  preview: (style) => {
    return (
      <div
        style={{
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          padding: "8px",
          width: "280px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)",
            borderRadius: "6px",
            height: "60px",
            marginBottom: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "12px",
          }}
        >
          sibling
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            borderRadius: "6px",
            height: "60px",
            margin: style.margin,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          margin: {style.margin as string}
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)",
            borderRadius: "6px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "12px",
          }}
        >
          sibling
        </div>
      </div>
    );
  },
  generate: (v) => ({
    margin: v,
  }),
  prefix: "margin: ",
  parentClass: ".box",
};
