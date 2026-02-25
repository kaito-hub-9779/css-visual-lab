import type { PropertyTemplate } from "../types";

export const backgroundBlendModeTemplate: PropertyTemplate = {
  name: "Background Blend Mode",
  controls: [],
  values: [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "difference",
    "hue",
    "saturation",
  ],
  preview: (style) => (
    <div
      className="box"
      style={{
        backgroundImage:
          "radial-gradient(circle, #facc15 0%, #f97316 60%), linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)",
        backgroundBlendMode: style.backgroundBlendMode as any,
      }}
    />
  ),
  generate: (v) => ({ backgroundBlendMode: v as any }),
  prefix: "background-blend-mode: ",
  parentClass: ".box",
};
