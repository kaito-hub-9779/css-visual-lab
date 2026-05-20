import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  border: "1px solid #38bdf840", // Subtle border for the main demo container
};

export const containTemplate: PropertyTemplate = {
  name: "CSS Containment",
  controls: [],
  values: ["none", "strict", "content", "size", "layout", "style", "paint"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{ 
        padding: '15px', 
        background: 'linear-gradient(135deg, #3b82f6, #9333ea)', 
        borderRadius: '6px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        color: '#e0f2fe',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <h3 style={{ margin: '0', fontSize: '1.2em' }}>This is the Container</h3>
        <p style={{ margin: '0', fontSize: '0.9em', lineHeight: '1.5' }}>
          It has the <code>contain: {style.contain || 'none'}</code> property applied.
          This property helps browsers optimize rendering by limiting the scope of computations
          (e.g., layout, style, paint) to within this element.
        </p>
      </div>
      <div style={{ 
        marginTop: '10px', 
        padding: '20px', 
        background: '#0f172a', 
        borderRadius: '6px', 
        border: '2px solid #6ee7b7', 
        color: '#a7f3d0', 
        fontSize: '0.9em', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80px',
        overflow: 'hidden' // To help illustrate potential containment of overflowing content/layout
      }}>
         <span style={{ 
           position: 'absolute', 
           top: '50%', 
           left: '50%', 
           transform: 'translate(-50%, -50%)', 
           fontSize: '3em', 
           opacity: 0.1, 
           color: '#6ee7b7', 
           pointerEvents: 'none' 
         }}>📦</span>
         <p style={{ textAlign: 'center', maxWidth: '80%', zIndex: 1, margin: 0 }}>
           Inner content: Changes here might not force recalculations on the rest of the page,
           depending on the <code>contain</code> value.
         </p>
      </div>
    </div>
  ),
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};