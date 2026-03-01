import type { PropertyTemplate } from "../types";

export const fontWeightTemplate: PropertyTemplate = {
  name: "Font Weight",
  controls: [
    {
      key: "weight",
      label: "Weight",
      min: 100,
      max: 900,
      unit: "",
      default: 400,
    },
  ],
  values: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preview: (style) => {
    return (
      <div className="text-box" style={style}>
        Bold
      </div>
    );
  },
  generate: (v) => ({
    fontWeight: v as any,
  }),
  prefix: "font-weight: ",
  parentClass: ".text-box",
};
