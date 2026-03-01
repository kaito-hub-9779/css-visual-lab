import type { PropertyTemplate } from "../types";

export const listStyleTypeTemplate: PropertyTemplate = {
  name: "List Style Type",
  controls: [],
  values: ["disc", "circle", "square", "decimal", "lower-alpha", "upper-roman", "none", "disclosure-open"],
  preview: (style) => (
    <ul
      style={{
        listStyleType: style.listStyleType as string,
        paddingLeft: "32px",
        margin: "0",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
        padding: "16px 16px 16px 40px",
        color: "#f8fafc",
        fontSize: "15px",
        lineHeight: "2",
        width: "220px",
      }}
    >
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
      <li>Durian</li>
    </ul>
  ),
  generate: (v) => ({ listStyleType: v as any }),
  prefix: "list-style-type: ",
  parentClass: "ul, ol",
};
