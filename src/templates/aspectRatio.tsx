import type { PropertyTemplate } from "../types";

export const aspectRatioTemplate: PropertyTemplate = {
  name: "Aspect Ratio",
  controls: [],
  values: ["auto", "1 / 1", "4 / 3", "16 / 9", "21 / 9", "3 / 4", "9 / 16"],
  preview: (style) => {
    return (
      <div
        style={{
          aspectRatio: style.aspectRatio,
          maxWidth: "240px",
          maxHeight: "240px",
          minWidth: "60px",
          minHeight: "60px",
          background: "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)",
          border: "3px solid #facc15",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {String(style.aspectRatio)}
      </div>
    );
  },
  generate: (v) => ({
    aspectRatio: v,
  }),
  prefix: "aspect-ratio: ",
  parentClass: ".box",
};
