import type { PropertyTemplate } from "../types";

export const flexGrowShrinkTemplate: PropertyTemplate = {
  name: "Flex Grow",
  controls: [
    {
      key: "grow",
      label: "Grow",
      min: 0,
      max: 5,
      unit: "",
      default: 1,
    },
  ],
  values: ["0", "1", "2", "3", "4", "5"],
  preview: (style) => {
    return (
      <div
        className="flex-container"
        style={{ width: "340px", justifyContent: "flex-start" }}
      >
        <div className="flex-item" style={{ flexGrow: 1, background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)" }}>
          fix
        </div>
        <div
          className="flex-item"
          style={{ flexGrow: parseInt(style.flexGrow as string) || 0, background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)" }}
        >
          grow: {style.flexGrow as string}
        </div>
        <div className="flex-item" style={{ flexGrow: 1, background: "linear-gradient(135deg, #34d399 0%, #0ea5e9 100%)" }}>
          fix
        </div>
      </div>
    );
  },
  generate: (v) => ({
    flexGrow: parseInt(v) as any,
  }),
  prefix: "flex-grow: ",
  parentClass: ".flex-item",
};
