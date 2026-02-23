import type { PropertyTemplate } from "../types";

export const flexDirectionTemplate: PropertyTemplate = {
  name: "Flex Direction",
  controls: [
    {
      key: "size",
      label: "Item Size",
      min: 40,
      max: 80,
      unit: "px",
      default: 60,
    },
  ],
  values: ["row", "row-reverse", "column", "column-reverse"],
  preview: (style) => {
    return (
      <div
        className="flex-container"
        style={{
          flexDirection: style.flexDirection as any,
          gap: "8px",
        }}
      >
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
      </div>
    );
  },
  generate: (v) => ({
    flexDirection: v as any,
  }),
  prefix: "flex-direction: ",
  parentClass: ".flex-container",
};
