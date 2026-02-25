import type { PropertyTemplate } from "../types";

export const paddingTemplate: PropertyTemplate = {
  name: "Padding",
  controls: [
    {
      key: "padding",
      label: "Padding",
      min: 0,
      max: 60,
      unit: "px",
      default: 16,
    },
  ],
  values: ["0px", "8px", "16px", "24px", "32px", "48px", "64px"],
  preview: (style) => {
    return (
      <div
        style={{
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          padding: style.padding,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            borderRadius: "6px",
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          content
        </div>
      </div>
    );
  },
  generate: (v) => ({
    padding: v,
  }),
  prefix: "padding: ",
  parentClass: ".container",
};
