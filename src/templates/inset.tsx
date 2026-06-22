import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  position: "relative", // Crucial for inset demo, as it defines the containing block
  overflow: "hidden", // Prevents children from spilling out too much with large inset values
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const insetTemplate: PropertyTemplate = {
  name: "Inset (Top, Right, Bottom, Left)",
  controls: [],
  values: [
    "0",
    "10px",
    "20%",
    "40px 10px", // top/bottom, left/right
    "20px 0 0 20px", // top, right, bottom, left
    "auto",
    "100px auto auto 0", // partial application
    "-10px",
    "calc(50% - 25px)",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           position: 'absolute',
           ...style, // The 'inset' property will be applied here
           background: 'linear-gradient(45deg, #38bdf8, #818cf8)',
           color: '#fff',
           padding: '15px',
           borderRadius: '8px',
           boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           minWidth: '50px', // Ensure visibility even with small insets
           minHeight: '50px',
           textAlign: 'center',
           fontSize: '14px',
           fontWeight: 'bold',
           overflow: 'hidden',
           whiteSpace: 'nowrap',
           transform: 'translateZ(0)', // Ensures z-index context if needed
         }}
       >
          <span style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
            Box controlled by 'inset'
          </span>
       </div>
       <div
         style={{
           position: 'absolute',
           top: '20px', // Padding of the container
           left: '20px', // Padding of the container
           bottom: '20px', // Padding of the container
           right: '20px', // Padding of the container
           border: '1px dashed rgba(255,255,255,0.3)',
           borderRadius: '6px',
           pointerEvents: 'none',
           zIndex: 0,
         }}
       >
         {/* Helper to show the default boundaries (relative to padding edge) */}
       </div>
    </div>
  ),
  generate: (v) => ({ inset: v as any }),
  prefix: "inset: ",
  parentClass: "container", // The element containing the absolutely positioned child
};