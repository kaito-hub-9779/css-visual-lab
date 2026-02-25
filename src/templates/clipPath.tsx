import type { PropertyTemplate } from "../types";

export const clipPathTemplate: PropertyTemplate = {
  name: "Clip Path",
  controls: [],
  values: [
    "none",
    "circle(50%)",
    "ellipse(60% 40%)",
    "polygon(50% 0%, 100% 100%, 0% 100%)",
    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
    "inset(10% 20% 10% 20% round 16px)",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    clipPath: v,
  }),
  prefix: "clip-path: ",
  parentClass: ".box",
};
