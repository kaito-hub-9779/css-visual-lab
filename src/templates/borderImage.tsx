import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const borderImageTemplate: PropertyTemplate = {
  name: "Border Image",
  controls: [],
  values: [
    "url(https://mdn.github.io/css-examples/border-image/border-image-slice.png) 27",
    "url(https://mdn.github.io/css-examples/border-image/border-image-slice.png) 27 round",
    "url(https://mdn.github.io/css-examples/border-image/border-image-slice.png) 27 repeat",
    "url(https://mdn.github.io/css-examples/border-image/border-image-slice.png) 27 stretch",
    "url(https://mdn.github.io/css-examples/border-image/border-image-slice.png) 27 fill round",
    "linear-gradient(to right, #4ade80, #3b82f6) 1",
    "linear-gradient(to top left, #ef4444, #f97316, #eab308) 10",
    "url(https://mdn.github.io/css-examples/border-image/border-image-slice.png) 27 / 10px 20px 30px 40px / 5px 10px", // Slice, width, outset example
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           ...style,
           padding: '30px',
           width: 'fit-content',
           border: '20px solid transparent', // Crucial for border-image to show
           borderRadius: '8px',
           backgroundColor: '#2d3748',
           textAlign: 'center',
           fontSize: '1.2em',
           boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
           color: '#f8fafc',
           lineHeight: '1.5',
         }}
       >
          <p>This box demonstrates the <code>border-image</code> property.</p>
          <p>The border around this content is an image or gradient!</p>
       </div>
    </div>
  ),
  generate: (v) => ({ borderImage: v as any }),
  prefix: "border-image: ",
  parentClass: "block",
};