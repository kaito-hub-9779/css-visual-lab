import type { PropertyTemplate } from "../types";

export const boxShadowTemplate: PropertyTemplate = {
  name: "Box Shadow",
  controls: [
    {
      key: "offsetX",
      label: "Offset X",
      min: -20,
      max: 20,
      unit: "px",
      default: 4,
    },
    {
      key: "offsetY",
      label: "Offset Y",
      min: -20,
      max: 20,
      unit: "px",
      default: 6,
    },
    {
      key: "blurRadius",
      label: "Blur",
      min: 0,
      max: 50,
      unit: "px",
      default: 15,
    },
    {
      key: "spreadRadius",
      label: "Spread",
      min: -10,
      max: 30,
      unit: "px",
      default: -3,
    },
  ],
  values: [
    "0 4px 6px rgba(0,0,0,0.1)",
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    "inset 0 2px 4px 0 rgba(255,255,255,0.05)",
    "0 0 20px #38bdf8, 0 0 40px #0ea5e9",
    "5px 5px 0 #facc15, 10px 10px 0 #0ea5e9",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    boxShadow: `${v}`,
  }),
  prefix: "box-shadow: ",
  parentClass: ".box",
};
