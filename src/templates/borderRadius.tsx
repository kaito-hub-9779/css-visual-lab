import type { PropertyTemplate } from "../types";

export const borderRediusTemplate: PropertyTemplate = {
  name: "Border radius",
  controls: [
    {
      key: "radius",
      label: "Radius",
      min: 0,
      max: 100,
      unit: "px",
      default: 20,
    },
  ],
  values: [
    "20px",
    "40px 60px 20px 50px",
    "70px / 20%", // 特殊
    "80px 30px 100px 40px / 60% 30% 90% 50%", // 複雑
    "50px 30px 60px 20px",
    "60px",
  ],
  preview: (style) => {
    return <div className="box" style={style} />;
  },
  generate: (v) => ({
    borderRadius: `${v}`,
  }),
  prefix: "border-radius: ",
  parentClass: `.box`,
};
