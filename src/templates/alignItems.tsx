import type { PropertyTemplate } from "../types";

export const alignItemsTemplate: PropertyTemplate = {
  name: "Align Items",
  controls: [
    {
      key: "height",
      label: "Height",
      min: 100,
      max: 300,
      unit: "px",
      default: 150,
    },
  ],
  values: ["flex-start", "flex-end", "center", "stretch", "baseline"],
  preview: (style) => {
    return (
      <div
        className="flex-container"
        style={{
          alignItems: style.alignItems as any,
          height: "200px",
          justifyContent: "center",
        }}
      >
        <div className="flex-item">A</div>
        <div className="flex-item" style={{ height: "80px" }}>
          B
        </div>
        <div className="flex-item" style={{ height: "100px" }}>
          C
        </div>
        <div className="flex-item">D</div>
      </div>
    );
  },
  generate: (v) => ({
    alignItems: v as any,
  }),
  prefix: "align-items: ",
  parentClass: ".flex-container",
};
