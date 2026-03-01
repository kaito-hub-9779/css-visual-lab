import type { PropertyTemplate } from "../types";

export const backgroundSizeTemplate: PropertyTemplate = {
  name: "Background Size",
  controls: [],
  values: ["auto", "cover", "contain", "50% 50%", "100px 100px", "200% 200%"],
  preview: (style) => {
    return (
      <div
        className="box"
        style={{
          ...style,
          backgroundImage:
            "repeating-linear-gradient(45deg, #38bdf8 0px, #38bdf8 10px, #0b0f19 10px, #0b0f19 20px), repeating-linear-gradient(-45deg, #facc15 0px, #facc15 10px, transparent 10px, transparent 20px)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    );
  },
  generate: (v) => ({
    backgroundSize: v,
  }),
  prefix: "background-size: ",
  parentClass: ".box",
};
