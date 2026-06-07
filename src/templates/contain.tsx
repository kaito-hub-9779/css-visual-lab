import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: [
    "none",
    "strict",
    "content",
    "layout",
    "paint",
    "size",
    "style",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <p style={{ margin: 0, fontSize: '0.9em', lineHeight: '1.4', color: '#cbd5e1' }}>
        The <code>contain</code> property helps isolate a subtree of the DOM, limiting how much of the page's rendering engine has to consider when laying out, painting, or sizing an element. This can significantly improve performance by telling the browser to treat an element's contents as independent from the rest of the document.
      </p>
      <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', background: '#2d3748', ...style }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1em', color: '#6ee7b7' }}>
          Element with <code>contain: {style?.contain as string || 'none'}</code>
        </h3>
        <p style={{ margin: 0, fontSize: '0.9em', color: '#e2e8f0' }}>
          This element is set to be potentially isolated.
          {style?.contain === 'strict' && <span style={{ color: '#facc15', marginLeft: '5px' }}>(Provides `layout`, `paint`, and `size` containment.)</span>}
          {style?.contain === 'content' && <span style={{ color: '#facc15', marginLeft: '5px' }}>(Provides `layout` and `paint` containment.)</span>}
          {style?.contain === 'layout' && <span style={{ color: '#facc15', marginLeft: '5px' }}> (Prevents inner layout changes from affecting external elements.)</span>}
          {style?.contain === 'paint' && <span style={{ color: '#facc15', marginLeft: '5px' }}> (Prevents inner painting from affecting external elements.)</span>}
          {style?.contain === 'size' && <span style={{ color: '#facc15', marginLeft: '5px' }}> (Prevents inner size changes from affecting external elements.)</span>}
        </p>
        <div style={{ marginTop: '15px', padding: '10px', border: '1px dashed #a78bfa', background: '#3b4759', fontSize: '0.8em', color: '#a78bfa' }}>
          Child Content (The visual appearance here is unaffected, but the browser's internal rendering behavior is influenced by the <code>contain</code> property applied to the parent box.)
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};