import type { PropertyTemplate } from "../types";

export const textShadowTemplate: PropertyTemplate = {
  name: "Text Shadow",
  controls: [
    {
      key: "offsetX",
      label: "Offset X",
      min: -10,
      max: 10,
      unit: "px",
      default: 2,
    },
    {
      key: "offsetY",
      label: "Offset Y",
      min: -10,
      max: 10,
      unit: "px",
      default: 2,
    },
    {
      key: "blurRadius",
      label: "Blur",
      min: 0,
      max: 20,
      unit: "px",
      default: 4,
    },
  ],
  values: [
    "2px 2px 4px rgba(0,0,0,0.5)",
    "3px 3px 0 #facc15, 6px 6px 0 #0ea5e9",
    "-1px -1px 2px #38bdf8, 1px 1px 2px #0ea5e9",
    "0 0 10px #ec4899, 0 0 20px #8b5cf6",
    "4px 4px 0 #facc15",
  ],
  preview: (style) => {
    return (
      <div className="text-box" style={style}>
        Text
      </div>
    );
  },
  generate: (v) => ({
    textShadow: `${v}`,
  }),
  prefix: "text-shadow: ",
  parentClass: ".text-box",
};
