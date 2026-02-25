import type { PropertyTemplate } from "../types";

export const textTransformTemplate: PropertyTemplate = {
  name: "Text Transform",
  controls: [],
  values: ["none", "uppercase", "lowercase", "capitalize"],
  preview: (style) => (
    <div className="text-box" style={{ ...style, fontSize: "28px" }}>
      Hello CSS
    </div>
  ),
  generate: (v) => ({ textTransform: v as any }),
  prefix: "text-transform: ",
  parentClass: ".text-box",
};
