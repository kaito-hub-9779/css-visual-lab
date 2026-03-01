import type { PropertyTemplate } from "../types";

const demoContainerStyles: React.CSSProperties = {
  height: '200px',
  background: '#1a2332',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  overflow: 'hidden',
  padding: '16px',
};

export const maskImageTemplate: PropertyTemplate = {
  name: "Mask Image",
  controls: [],
  values: [
    "none",
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Circle_Pencil_icon.svg/1200px-Circle_Pencil_icon.svg.png')",
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Star_outline_font_awesome.svg/1200px-Star_outline_font_awesome.svg.png')",
    "linear-gradient(to right, black, transparent)",
    "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><polygon points=\"50,0 65,35 100,35 75,60 85,100 50,75 15,100 25,60 0,35 35,35\" fill=\"black\"/></svg>')",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          width: '180px',
          height: '180px',
          background: 'linear-gradient(45deg, #a7e0ff, #ff99e6)', // Vibrant background for the masked element
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#333',
          textShadow: '0 2px 4px rgba(255,255,255,0.3)',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
          // Mask-related properties
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: 'contain',
          // The selected maskImage property will be applied here
          ...style,
        }}
      >
        MASK ME!
      </div>
    </div>
  ),
  generate: (v) => ({ maskImage: v as any }),
  prefix: "mask-image: ",
  parentClass: "block",
};