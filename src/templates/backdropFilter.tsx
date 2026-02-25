import type { PropertyTemplate } from "../types";

export const backdropFilterTemplate: PropertyTemplate = {
  name: "Backdrop Filter",
  controls: [
    {
      key: "blur",
      label: "Blur",
      min: 0,
      max: 30,
      unit: "px",
      default: 10,
    },
  ],
  values: [
    "none",
    "blur(4px)",
    "blur(10px)",
    "blur(20px)",
    "brightness(0.5)",
    "saturate(5)",
    "blur(8px) brightness(0.8) saturate(1.5)",
    "contrast(1.5) blur(4px)",
  ],
  preview: (style) => {
    return (
      <div
        style={{
          position: "relative",
          width: "260px",
          height: "200px",
          borderRadius: "12px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #ec4899 0%, #facc15 40%, #38bdf8 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "30px",
            backdropFilter: style.backdropFilter as string,
            WebkitBackdropFilter: style.backdropFilter as string,
            background: "rgba(255,255,255,0.15)",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          backdrop-filter
        </div>
      </div>
    );
  },
  generate: (v) => ({
    backdropFilter: v,
  }),
  prefix: "backdrop-filter: ",
  parentClass: ".glass",
};
