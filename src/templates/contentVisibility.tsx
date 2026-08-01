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
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export const contentVisibilityTemplate: PropertyTemplate = {
  name: "Content Visibility",
  controls: [],
  values: ["visible", "hidden", "auto"],
  preview: (style) => {
    const isHidden = style.contentVisibility === 'hidden';
    const isAuto = style.contentVisibility === 'auto';

    return (
      <div style={{ ...demoContainerStyles }}>
         <h3 style={{ margin: 0, color: '#f8fafc' }}>
           Observe the rendering of the box below.
         </h3>
         
         {/* This is the element to which content-visibility is applied */}
         <div 
           style={{ 
             padding: '20px', 
             border: '2px solid #38bdf8', 
             borderRadius: '4px',
             maxWidth: '80%',
             width: '100%', 
             background: '#0f172a',
             // For the demo, we explicitly set display: none to visually represent 
             // how `content-visibility: hidden` makes the element disappear.
             // The browser would interpret `content-visibility: hidden` to similar effect.
             display: isHidden ? 'none' : 'block', 
             ...style 
           }}
         >
            <p style={{ margin: 0 }}>
              This content is inside the demo box.
            </p>
         </div>

         {isHidden && (
           <p style={{ margin: 0, color: '#ef4444', fontSize: '0.9em' }}>
             With `content-visibility: hidden`, the element is completely skipped 
             from layout and rendering (similar to `display: none`).
           </p>
         )}
         {isAuto && (
           <p style={{ margin: 0, color: '#facc15', fontSize: '0.9em' }}>
             With `content-visibility: auto`, content is rendered only when relevant (e.g., on-screen). 
             This is a powerful performance optimization not directly visible in a static demo.
           </p>
         )}
         {!isHidden && !isAuto && ( // i.e., visible
            <p style={{ margin: 0, color: '#38bdf8', fontSize: '0.9em' }}>
              `content-visibility: visible` ensures the content is always rendered normally.
            </p>
         )}
      </div>
    );
  },
  generate: (v) => ({ contentVisibility: v as any }),
  prefix: "content-visibility: ",
  parentClass: "block",
};