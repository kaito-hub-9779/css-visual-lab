import type { PropertyTemplate } from "../types";

export const fontSizeTemplate: PropertyTemplate = {
  name: "Font Size",
  controls: [
    {
      key: "size",
      label: "Size",
      min: 12,
      max: 96,
      unit: "px",
      default: 32,
    },
  ],
  values: ["12px", "16px", "24px", "32px", "48px", "64px", "96px"],
  preview: (style) => {
    return (
      <div className="text-box" style={style}>
        Aa
      </div>
    );
  },
  generate: (v) => ({
    fontSize: v,
  }),
  prefix: "font-size: ",
  parentClass: ".text-box",
};
