import type { PropertyTemplate } from "../types";

export const flexWrapTemplate: PropertyTemplate = {
  name: "Flex Wrap",
  controls: [
    {
      key: "itemCount",
      label: "Gap",
      min: 5,
      max: 20,
      unit: "px",
      default: 12,
    },
  ],
  values: ["nowrap", "wrap", "wrap-reverse"],
  preview: (style) => {
    return (
      <div
        className="flex-container"
        style={{
          flexWrap: style.flexWrap as any,
          width: "100%",
          maxWidth: "250px",
        }}
      >
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
        <div className="flex-item">4</div>
        <div className="flex-item">5</div>
        <div className="flex-item">6</div>
      </div>
    );
  },
  generate: (v) => ({
    flexWrap: v as any,
  }),
  prefix: "flex-wrap: ",
  parentClass: ".flex-container",
};
