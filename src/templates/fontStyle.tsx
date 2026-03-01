import type { PropertyTemplate } from "../types";

export const fontStyleTemplate: PropertyTemplate = {
  name: "Font Style",
  controls: [],
  values: ["normal", "italic", "oblique", "oblique 30deg", "oblique 45deg"],
  preview: (style) => (
    <div className="text-box" style={{ ...style, fontSize: "36px" }}>
      CSS
    </div>
  ),
  generate: (v) => ({ fontStyle: v as any }),
  prefix: "font-style: ",
  parentClass: ".text-box",
};
