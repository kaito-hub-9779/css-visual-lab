import type { PropertyTemplate } from "../types";

export const outlineTemplate: PropertyTemplate = {
  name: "Outline",
  controls: [
    {
      key: "width",
      label: "Width",
      min: 0,
      max: 20,
      unit: "px",
      default: 3,
    },
    {
      key: "offset",
      label: "Offset",
      min: 0,
      max: 20,
      unit: "px",
      default: 4,
    },
  ],
  values: [
    "2px solid #38bdf8",
    "4px dashed #facc15",
    "4px dotted #ec4899",
    "6px double #34d399",
    "4px solid transparent",
    "3px solid #f97316",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    outline: v,
    outlineOffset: "4px",
  }),
  prefix: "outline: ",
  parentClass: ".box",
};
