import type { PropertyTemplate } from "../types";

export const alignSelfTemplate: PropertyTemplate = {
  name: "Align Self",
  controls: [],
  values: ["auto", "flex-start", "flex-end", "center", "stretch", "baseline"],
  preview: (style) => (
    <div className="flex-container" style={{ height: "180px", alignItems: "flex-start", justifyContent: "center" }}>
      <div className="flex-item">A</div>
      <div className="flex-item" style={{ alignSelf: style.alignSelf as any, background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)", height: "auto", minHeight: "60px" }}>
        ★
      </div>
      <div className="flex-item">C</div>
    </div>
  ),
  generate: (v) => ({ alignSelf: v as any }),
  prefix: "align-self: ",
  parentClass: ".flex-item",
};
