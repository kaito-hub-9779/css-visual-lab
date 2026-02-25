import type { PropertyTemplate } from "../types";

export const letterSpacingTemplate: PropertyTemplate = {
  name: "Letter Spacing",
  controls: [
    {
      key: "spacing",
      label: "Spacing",
      min: -5,
      max: 20,
      unit: "px",
      default: 0,
    },
  ],
  values: ["-2px", "0px", "2px", "5px", "10px", "20px"],
  preview: (style) => {
    return (
      <div className="text-box" style={style}>
        CSS
      </div>
    );
  },
  generate: (v) => ({
    letterSpacing: v,
  }),
  prefix: "letter-spacing: ",
  parentClass: ".text-box",
};
