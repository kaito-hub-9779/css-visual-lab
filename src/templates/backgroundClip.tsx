import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const backgroundClipTemplate: PropertyTemplate = {
  name: "Background Clip",
  controls: [],
  values: ["border-box", "padding-box", "content-box", "text"],
  preview: (style) => {
    const isTextClip = style.backgroundClip === "text";

    const commonStylesForClipTarget: React.CSSProperties = {
      background: "linear-gradient(to right, #8b5cf6, #ec4899)", // The background to be clipped
      border: "10px dashed rgba(255, 255, 255, 0.3)", // Visible border to show effect
      padding: "30px", // Padding to show effect
      borderRadius: "8px",
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: "1.2",
      boxSizing: "border-box",
      minHeight: "150px", // Ensure content box is large enough
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden", // Important for clipping
      textTransform: "uppercase",
    };

    // Styles applied directly to the div, including the background-clip property
    const finalContainerStyles: React.CSSProperties = {
      ...commonStylesForClipTarget,
      ...style, // This is where backgroundClip property comes in
      // For text clipping, we need to adjust text properties and ensure background is visible
      color: isTextClip ? "transparent" : "white", // Make text transparent to show background
      WebkitTextFillColor: isTextClip ? "transparent" : undefined, // Safari/Chrome text transparency
      WebkitBackgroundClip: isTextClip
        ? "text"
        : (style.backgroundClip as React.CSSProperties["WebkitBackgroundClip"]), // Apply webkit prefix for text or other values for consistency
    };

    return (
      <div style={demoContainerStyles}>
        <div style={finalContainerStyles}>
          {isTextClip ? "Background Clip (Text)" : "Background Clip"}
        </div>
      </div>
    );
  },
  generate: (v) => ({ backgroundClip: v as any }),
  prefix: "background-clip: ",
  parentClass: "block",
};