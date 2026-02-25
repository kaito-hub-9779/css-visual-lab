import type { PropertyTemplate } from "../types";

export const flexShrinkTemplate: PropertyTemplate = {
  name: "Flex Shrink",
  controls: [
    { key: "shrink", label: "Shrink", min: 0, max: 5, unit: "", default: 1 },
  ],
  values: ["0", "1", "2", "3"],
  preview: (style) => (
    <div className="flex-container" style={{ width: "260px", flexWrap: "nowrap" }}>
      <div className="flex-item" style={{ flexShrink: 1, flexBasis: "120px", background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)", fontSize: "11px" }}>
        shrink:1
      </div>
      <div className="flex-item" style={{ flexShrink: parseInt(style.flexShrink as string) || 0, flexBasis: "120px", background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)", fontSize: "11px" }}>
        shrink:{style.flexShrink as string}
      </div>
      <div className="flex-item" style={{ flexShrink: 1, flexBasis: "120px", background: "linear-gradient(135deg, #34d399 0%, #0ea5e9 100%)", fontSize: "11px" }}>
        shrink:1
      </div>
    </div>
  ),
  generate: (v) => ({ flexShrink: parseInt(v) as any }),
  prefix: "flex-shrink: ",
  parentClass: ".flex-item",
};
