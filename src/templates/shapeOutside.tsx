import type { PropertyTemplate } from "../types";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  minHeight: "250px",
  display: "block", // Essential for 'float' to work
  fontFamily: "Inter, sans-serif",
  lineHeight: "1.6",
  overflow: "auto", // In case text overflows
};

const floatedBoxStyles: React.CSSProperties = {
  width: "120px",
  height: "120px",
  background: "linear-gradient(135deg, #FF6F61 0%, #DE425B 100%)", // Warm, contrasting gradient
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "1em",
  float: "left", // Crucial for shape-outside
  marginRight: "25px", // Space between shape and text
  shapeMargin: "15px", // Even more space between shape and text
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)", // Add some depth
  border: "2px solid rgba(255,255,255,0.2)",
};

export const shapeOutsideTemplate: PropertyTemplate = {
  name: "Shape Outside",
  controls: [],
  values: [
    "circle(50%)",
    "ellipse(45% 55%)",
    "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", // Star-like shape
    "inset(20px 20px 20px 20px round 15px)", // Inset with uniform margin and border-radius
    "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)", // L-shape
  ],
  preview: (style) => {
    // The `style` object passed here will contain the `shapeOutside` property
    // as it's the target property of this template.
    const shapeOutsideValue = style.shapeOutside;

    let clipPathValue: string | "none" = "none";
    if (typeof shapeOutsideValue === 'string') {
        // We use clipPath to visually represent the shape around which text wraps.
        // For 'url()' values, clipPath won't directly match without a proper mask-image setup,
        // which is beyond a simple style application. We focus on basic shapes.
        if (shapeOutsideValue.startsWith('circle(') ||
            shapeOutsideValue.startsWith('ellipse(') ||
            shapeOutsideValue.startsWith('polygon(') ||
            shapeOutsideValue.startsWith('inset(')) {
            clipPathValue = shapeOutsideValue;
        }
    }

    return (
      <div style={{ ...demoContainerStyles, color: "#f0f0f0" }}> {/* Set text color for the container */}
        <div style={{
            ...floatedBoxStyles,
            // Apply the actual shapeOutside property to the floated element.
            // The style object passed to preview already contains the shapeOutside property value.
            ...style,
            clipPath: clipPathValue, // Visually clip the box to the shape
        }}>
          SHAPE
        </div>
        <p style={{ margin: 0 }}>
          Shape-outside defines the shape around which adjacent inline content should wrap.
          It allows content to flow around custom shapes rather than just a rectangular box.
          This property applies to floated elements. The text here demonstrates how it wraps
          around the specified shape. The visual shape of the box itself is controlled by
          'clip-path' for clarity, but the 'shape-outside' property is what dictates the text flow.
          Explore different shapes like circles, ellipses, polygons, or insets. This enables
          more creative and dynamic layouts on the web, breaking free from traditional
          rectangular content boxes. The `shape-margin` property is also used here to add
          some space between the shape and the text, improving readability.
        </p>
      </div>
    );
  },
  generate: (v) => ({ shapeOutside: v as any }),
  prefix: "shape-outside: ",
  parentClass: "block", // This property typically applies to floated block-level elements.
};