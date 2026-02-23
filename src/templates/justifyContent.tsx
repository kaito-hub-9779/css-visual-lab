import type { PropertyTemplate } from "../types";

export const justifyContentTemplate: PropertyTemplate = {
  name: "Justify Content",
  controls: [
    {
      key: "spacing",
      label: "Spacing",
      min: 0,
      max: 20,
      unit: "px",
      default: 12,
    },
  ],
  values: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ],
  preview: (style) => {
    return (
      <div
        className="flex-container"
        style={{ justifyContent: style.justifyContent as any }}
      >
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
        <div className="flex-item">4</div>
      </div>
    );
  },
  generate: (v) => ({
    justifyContent: v as any,
  }),
  prefix: "justify-content: ",
  parentClass: ".flex-container",
};
