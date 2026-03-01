import type { PropertyTemplate } from "../types";

export const position_zIndexTemplate: PropertyTemplate = {
  name: "Width & Height",
  controls: [
    {
      key: "width",
      label: "Width",
      min: 50,
      max: 300,
      unit: "px",
      default: 200,
    },
    {
      key: "height",
      label: "Height",
      min: 50,
      max: 300,
      unit: "px",
      default: 200,
    },
  ],
  values: [
    "50px",
    "100px",
    "150px",
    "200px",
    "250px",
    "300px",
  ],
  preview: (style) => {
    return <div className="box" style={{ width: style.width, height: style.height }} />;
  },
  generate: (v) => ({
    width: v,
    height: v,
  }),
  prefix: "width: ",
  parentClass: ".box",
};
