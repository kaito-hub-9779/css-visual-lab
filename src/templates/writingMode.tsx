import type { PropertyTemplate } from "../types";

export const writingModeTemplate: PropertyTemplate = {
  name: "Writing Mode",
  controls: [],
  values: [
    "horizontal-tb",
    "vertical-rl",
    "vertical-lr",
  ],
  preview: (style) => {
    return (
      <div
        style={{
          ...style,
          width: "200px",
          height: "200px",
          background: "#1a2332",
          border: "3px solid #facc15",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f8fafc",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        CSS Writing Mode
      </div>
    );
  },
  generate: (v) => ({
    writingMode: v as any,
  }),
  prefix: "writing-mode: ",
  parentClass: ".box",
};
