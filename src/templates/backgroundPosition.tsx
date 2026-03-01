import type { PropertyTemplate } from "../types";

export const backgroundPositionTemplate: PropertyTemplate = {
  name: "Background Position",
  controls: [],
  values: [
    "top left",
    "top center",
    "top right",
    "center left",
    "center center",
    "center right",
    "bottom left",
    "bottom center",
    "bottom right",
    "50% 20%",
  ],
  preview: (style) => {
    return (
      <div
        className="box"
        style={{
          ...style,
          backgroundImage:
            "radial-gradient(circle 60px, #facc15 0%, #f97316 60%, transparent 62%), radial-gradient(circle 20px, #38bdf8 0%, #0ea5e9 80%)",
          backgroundSize: "120px 120px, 40px 40px",
          backgroundRepeat: "no-repeat",
        }}
      />
    );
  },
  generate: (v) => ({
    backgroundPosition: v,
  }),
  prefix: "background-position: ",
  parentClass: ".box",
};
