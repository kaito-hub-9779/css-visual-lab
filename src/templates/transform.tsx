import type { PropertyTemplate } from "../types";

export const transformTemplate: PropertyTemplate = {
  name: "Transform",
  controls: [
    {
      key: "scaleX",
      label: "Scale X",
      min: 0.5,
      max: 2,
      unit: "",
      default: 1,
    },
    {
      key: "scaleY",
      label: "Scale Y",
      min: 0.5,
      max: 2,
      unit: "",
      default: 1,
    },
    {
      key: "rotation",
      label: "Rotate",
      min: 0,
      max: 360,
      unit: "deg",
      default: 0,
    },
    {
      key: "skewX",
      label: "Skew X",
      min: -30,
      max: 30,
      unit: "deg",
      default: 0,
    },
  ],
  values: [
    "scale(1.2)",
    "rotate(15deg)",
    "skewX(10deg)",
    "scale(0.9) rotate(-5deg)",
    "translateX(10px) translateY(10px) rotate(10deg)",
    "scale(1.1, 0.9) rotate(25deg) skewY(5deg)",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    transform: `${v}`,
  }),
  prefix: "transform: ",
  parentClass: ".box",
};
