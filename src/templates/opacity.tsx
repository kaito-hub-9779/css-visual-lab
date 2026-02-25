import type { PropertyTemplate } from "../types";

export const opacityTemplate: PropertyTemplate = {
  name: "Opacity",
  controls: [
    {
      key: "opacity",
      label: "Opacity",
      min: 0,
      max: 100,
      unit: "%",
      default: 50,
    },
  ],
  values: ["0", "0.25", "0.5", "0.75", "1"],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    opacity: parseFloat(v) as any,
  }),
  prefix: "opacity: ",
  parentClass: ".box",
};
