import type { PropertyTemplate } from "../types";

export const gapTemplate: PropertyTemplate = {
  name: "Gap",
  controls: [
    {
      key: "gapSize",
      label: "Gap Size",
      min: 0,
      max: 40,
      unit: "px",
      default: 12,
    },
  ],
  values: ["0px", "8px", "12px", "16px", "24px", "32px"],
  preview: (style) => {
    return (
      <div
        className="flex-container"
        style={{
          gap: style.gap as any,
          justifyContent: "center",
        }}
      >
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
      </div>
    );
  },
  generate: (v) => ({
    gap: `${v}`,
  }),
  prefix: "gap: ",
  parentClass: ".flex-container",
};
