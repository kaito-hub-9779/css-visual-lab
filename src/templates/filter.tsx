import type { PropertyTemplate } from "../types";

export const filterTemplate: PropertyTemplate = {
  name: "Filter",
  controls: [
    {
      key: "blur",
      label: "Blur",
      min: 0,
      max: 20,
      unit: "px",
      default: 0,
    },
    {
      key: "brightness",
      label: "Brightness",
      min: 0,
      max: 200,
      unit: "%",
      default: 100,
    },
  ],
  values: [
    "none",
    "blur(4px)",
    "brightness(0.5)",
    "contrast(2)",
    "grayscale(1)",
    "hue-rotate(90deg)",
    "saturate(3)",
    "sepia(1)",
    "drop-shadow(4px 4px 8px #0ea5e9)",
    "invert(1)",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    filter: v,
  }),
  prefix: "filter: ",
  parentClass: ".box",
};
