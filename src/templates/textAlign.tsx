import type { PropertyTemplate } from "../types";

export const textAlignTemplate: PropertyTemplate = {
  name: "Text Align",
  controls: [],
  values: ["left", "center", "right", "justify"],
  preview: (style) => (
    <div
      style={{
        ...style,
        width: "260px",
        padding: "20px",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
        color: "#f8fafc",
        fontSize: "15px",
        lineHeight: "1.7",
      }}
    >
      CSSのtext-alignプロパティはテキストの水平方向の配置を制御します。
    </div>
  ),
  generate: (v) => ({ textAlign: v as any }),
  prefix: "text-align: ",
  parentClass: "p",
};
