import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "350px", // Increased minHeight for more content space
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  boxSizing: "border-box",
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "style", "paint"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <p style={{ marginBottom: "5px", fontSize: "1.1em", lineHeight: "1.4" }}>
        The <code style={{ color: "#38bdf8" }}>contain</code> property enables browsers to perform optimizations by indicating that an element and its contents are, as much as possible, independent of the rest of the document tree.
      </p>
      <div style={{
        padding: '15px',
        border: '2px dashed #60a5fa', // Blueish dashed border
        borderRadius: '4px',
        background: '#2c3e50', // Darker background for the inner box
        color: '#e0f2fe',
        fontSize: '0.95em',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
        <strong style={{ color: "#93c5fd" }}>Visual representation of <code style={{ color: "#38bdf8" }}>contain</code></strong>
        <p style={{ margin: 0 }}>
          This inner content box is part of the element where <code style={{ color: "#38bdf8" }}>contain</code> is applied. When <code style={{ color: "#38bdf8" }}>contain</code> is active, the browser can make assumptions about how changes within this element will (or won't) affect the rest of the page.
        </p>
        <div style={{
          padding: '8px 12px',
          background: '#4b5563', // Slightly lighter gray for nested item
          borderRadius: '3px',
          fontSize: '0.85em',
          color: '#cbd5e1',
          border: '1px solid #6b7280',
        }}>
          A nested item that illustrates content within the contained element.
        </div>
      </div>
      <p style={{ marginTop: "5px", fontSize: "0.9em", color: "#a0aec0" }}>
        <strong style={{ color: "#f8fafc" }}>`contain: size`</strong> prevents its children from affecting the size of the element itself.
        <br />
        <strong style={{ color: "#f8fafc" }}>`contain: layout`</strong> prevents its children from affecting the layout of other boxes on the page.
        <br />
        <strong style={{ color: "#f8fafc" }}>`contain: paint`</strong> means its children don't display outside its bounds.
        <br />
        <strong style={{ color: "#f8fafc" }}>`contain: strict`</strong> is equivalent to <code style={{ color: "#38bdf8" }}>size layout style paint</code>.
      </p>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};