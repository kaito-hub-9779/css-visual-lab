import type { PropertyTemplate } from "../types";

export const backgroundGradientTemplate: PropertyTemplate = {
  name: "Background Gradient",
  controls: [
    {
      key: "angle",
      label: "Angle",
      min: 0,
      max: 360,
      unit: "deg",
      default: 90,
    },
    {
      key: "colorStop",
      label: "Color Stop",
      min: 0,
      max: 100,
      unit: "%",
      default: 50,
    },
    {
      key: "intensity",
      label: "Intensity",
      min: 1,
      max: 3,
      unit: "",
      default: 1,
    },
  ],
  values: [
    "linear-gradient(90deg, #38bdf8 0%, #facc15 100%)",
    "linear-gradient(45deg, #ec4899 0%, #8b5cf6 50%, #0ea5e9 100%)",
    "radial-gradient(circle, #fbbf24 0%, #f97316 100%)",
    "linear-gradient(to right, #22d3ee 0%, #22d3ee 50%, #0ea5e9 50%, #0ea5e9 100%)",
    "radial-gradient(ellipse at 30% 30%, #38bdf8 0%, transparent 100%)",
    "conic-gradient(from 0deg, #ef4444, #f97316, #eab308, #34d399, #0ea5e9, #8b5cf6, #ef4444)",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    background: `${v}`,
  }),
  prefix: "background: ",
  parentClass: ".box",
};
