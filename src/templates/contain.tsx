import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  overflow: 'hidden',
};

export const containTemplate: PropertyTemplate = {
  name: "Contain",
  controls: [],
  values: ["none", "strict", "content", "layout", "paint", "size", "style"],
  preview: (style) => {
    const currentContainValue = style.contain as string;
    // 'strict' implies size layout style paint
    // 'content' implies layout style paint
    const hasPaintContainment = ['paint', 'strict', 'content'].includes(currentContainValue);

    return (
      <div style={{ ...demoContainerStyles }}>
         <div style={{
           ...style, // contain property applied here
           flexShrink: 0,
           padding: '15px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           minWidth: '180px',
           maxWidth: '220px',
           background: '#2d3748',
           position: 'relative',
           boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
           // When 'paint' containment is active, overflow: hidden is implied.
           // We explicitly set it here to visually demonstrate that clipping.
           overflow: hasPaintContainment ? 'hidden' : 'visible',
           minHeight: '120px',
         }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1em', color: '#6ee7b7' }}>Contained Element</h4>
            <p style={{ margin: '0', fontSize: '0.9em', lineHeight: '1.4' }}>
              This box has `contain: {currentContainValue}` applied.
            </p>
            {/* This element is designed to visually overflow its parent */}
            <div style={{
              position: 'absolute',
              top: '-25px',
              right: '-25px',
              width: '70px',
              height: '70px',
              background: 'rgba(251, 191, 36, 0.7)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8em',
              fontWeight: 'bold',
              color: '#1a2332',
              zIndex: 10,
              transform: 'translate(10px, -10px)', // Pushes it slightly outside
            }}>
              Child
            </div>
         </div>
         <div style={{
           padding: '15px',
           border: '1px dashed #94a3b8',
           borderRadius: '4px',
           background: '#3e4a5d',
           minWidth: '200px',
           flexGrow: 1,
           boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
           minHeight: '120px',
         }}>
           <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1em', color: '#a78bfa' }}>Sibling Element</h4>
           <p style={{ margin: '0', fontSize: '0.9em', lineHeight: '1.4' }}>
             This sibling's layout may be isolated from the "Contained Element" based on `contain` values like `layout`. Observe the child's overflow clipping when `paint` containment is active.
           </p>
         </div>
      </div>
    );
  },
  generate: (v) => ({ contain: v as any }),
  prefix: "contain: ",
  parentClass: "block",
};