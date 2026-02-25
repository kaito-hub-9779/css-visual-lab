import type { PropertyTemplate } from "../types";

export const fontFamilyTemplate: PropertyTemplate = {
  name: "Font Family",
  controls: [],
  values: [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "'Georgia', serif",
    "'Courier New', monospace",
    "'Arial', sans-serif",
  ],
  preview: (style) => (
    <div className="text-box" style={{ ...style, fontSize: "32px" }}>
      Aa
    </div>
  ),
  generate: (v) => ({ fontFamily: v }),
  prefix: "font-family: ",
  parentClass: ".text-box",
};
