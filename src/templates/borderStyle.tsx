import type { PropertyTemplate } from "../types";

export const borderStyleTemplate: PropertyTemplate = {
  name: "Border Style",
  controls: [
    {
      key: "borderWidth",
      label: "Width",
      min: 1,
      max: 10,
      unit: "px",
      default: 3,
    },
  ],
  values: [
    "3px solid #facc15",
    "2px dashed #38bdf8",
    "4px double #8b5cf6",
    "1px dotted #ec4899",
    "5px groove #0ea5e9",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    border: `${v}`,
  }),
  prefix: "border: ",
  parentClass: ".box",
};
