import type { PropertyTemplate } from "../types";

export const flexBasisTemplate: PropertyTemplate = {
  name: "Flex Basis",
  controls: [
    { key: "basis", label: "Basis", min: 20, max: 200, unit: "px", default: 80 },
  ],
  values: ["auto", "0", "50px", "100px", "150px", "200px", "50%"],
  preview: (style) => (
    <div className="flex-container" style={{ width: "340px", justifyContent: "flex-start" }}>
      <div className="flex-item" style={{ flexBasis: "auto", background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)" }}>auto</div>
      <div className="flex-item" style={{ flexBasis: style.flexBasis as string, background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)", minWidth: 0, overflow: "hidden", fontSize: "11px" }}>
        {style.flexBasis as string}
      </div>
      <div className="flex-item" style={{ flexBasis: "auto", background: "linear-gradient(135deg, #34d399 0%, #0ea5e9 100%)" }}>auto</div>
    </div>
  ),
  generate: (v) => ({ flexBasis: v as any }),
  prefix: "flex-basis: ",
  parentClass: ".flex-item",
};
