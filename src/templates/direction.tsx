import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  fontFamily: "sans-serif",
  lineHeight: "1.5",
};

export const directionTemplate: PropertyTemplate = {
  name: "Direction",
  controls: [],
  values: ["ltr", "rtl"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style, textAlign: 'start' }}>
      <p>
        This paragraph demonstrates the text flow and alignment. In "ltr" (left-to-right) mode, text starts on the left.
      </p>
      <p>
        Here is some <strong style={{ color: "#a78bfa" }}>important text</strong> showing inline element order.
      </p>
      <ul style={{ paddingInlineStart: '20px', margin: '10px 0' }}>
        <li>List Item 1</li>
        <li>List Item 2</li>
      </ul>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px', border: '1px solid #6366f1', padding: '10px', borderRadius: '4px' }}>
        <span style={{ background: '#38bdf8', padding: '5px 10px', borderRadius: '4px' }}>Item A</span>
        <span style={{ background: '#facc15', padding: '5px 10px', borderRadius: '4px' }}>Item B</span>
        <span style={{ background: '#ef4444', padding: '5px 10px', borderRadius: '4px' }}>Item C</span>
      </div>
    </div>
  ),
  generate: (v) => ({ direction: v as any }),
  prefix: "direction: ",
  parentClass: "block",
};