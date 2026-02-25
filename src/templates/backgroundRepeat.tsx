import type { PropertyTemplate } from "../types";

export const backgroundRepeatTemplate: PropertyTemplate = {
  name: "Background Repeat",
  controls: [],
  values: ["repeat", "no-repeat", "repeat-x", "repeat-y", "space", "round"],
  preview: (style) => (
    <div
      className="box"
      style={{
        ...style,
        backgroundImage:
          "radial-gradient(circle 16px, #38bdf8 0%, #0ea5e9 80%, transparent 82%)",
        backgroundSize: "48px 48px",
        background: undefined,
        backgroundRepeat: style.backgroundRepeat,
      }}
    />
  ),
  generate: (v) => ({ backgroundRepeat: v as any }),
  prefix: "background-repeat: ",
  parentClass: ".box",
};
