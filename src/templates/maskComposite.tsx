import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "30px",
  borderRadius: "8px",
  minHeight: "280px",
  color: "#f8fafc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
};

export const maskCompositeTemplate: PropertyTemplate = {
  name: "Mask Composite",
  controls: [],
  values: [
    "add",
    "subtract",
    "intersect",
    "exclude",
    "source-over",
    "destination-out",
    "xor",
    "lighter",
    "" // Option to remove the property and observe default behavior (typically 'add')
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           width: "320px",
           height: "180px",
           background: "linear-gradient(135deg, #f8fafc 0%, #a78bfa 50%, #38bdf8 100%)",
           color: "#1a2332",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           fontSize: "1.6rem",
           fontWeight: "bold",
           borderRadius: "10px",
           boxShadow: "0 8px 25px rgba(0,0,0,0.7)",
           overflow: "hidden",
           // Define two distinct mask images that overlap
           maskImage: `
             radial-gradient(circle at center, black 65%, transparent 65%), /* Mask 1: A circle */
             linear-gradient(to right, black, black)                       /* Mask 2: A horizontal rectangle */
           `,
           maskSize: `
             140px 140px,   /* Size for the circle */
             200px 90px     /* Size for the rectangle */
           `,
           maskRepeat: `no-repeat, no-repeat`,
           maskPosition: `
             calc(50% - 50px) calc(50% + 15px), /* Circle positioned left-down */
             calc(50% + 50px) calc(50% - 15px)  /* Rectangle positioned right-up */
           `,
           // The maskComposite property will be applied via the `style` prop
           ...style,
         }}
       >
          Masked Content
       </div>
    </div>
  ),
  generate: (v) => ({ maskComposite: v as any }),
  prefix: "mask-composite: ",
  parentClass: "block",
};