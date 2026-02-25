import type { PropertyTemplate } from "../types";

export const mixBlendModeTemplate: PropertyTemplate = {
  name: "Mix Blend Mode",
  controls: [],
  values: [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "difference",
    "exclusion",
    "hue",
    "saturation",
  ],
  preview: (style) => {
    return (
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          background: "linear-gradient(135deg, #facc15 0%, #f97316 100%)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "160px",
            height: "160px",
            background: "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)",
            borderRadius: "50%",
            mixBlendMode: style.mixBlendMode as any,
          }}
        />
      </div>
    );
  },
  generate: (v) => ({
    mixBlendMode: v as any,
  }),
  prefix: "mix-blend-mode: ",
  parentClass: ".box",
};
