import type { PropertyTemplate } from "../types";

export const textDecorationTemplate: PropertyTemplate = {
  name: "Text Decoration",
  controls: [],
  values: [
    "none",
    "underline",
    "overline",
    "line-through",
    "underline overline",
    "underline wavy #facc15",
    "underline dotted #ec4899",
    "underline dashed #38bdf8",
  ],
  preview: (style) => {
    return (
      <div className="text-box" style={style}>
        Text
      </div>
    );
  },
  generate: (v) => ({
    textDecoration: v,
  }),
  prefix: "text-decoration: ",
  parentClass: ".text-box",
};
