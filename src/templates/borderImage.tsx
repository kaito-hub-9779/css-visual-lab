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
    "url('https://images.unsplash.com/photo-1579547621113-e4927de2d35c?q=80&w=200&h=200&fit=crop') 30 round",
    "url('https://images.unsplash.com/photo-1506744038136-46487e47f706?q=80&w=200&h=200&fit=crop') 27 repeat",
    "url('https://images.unsplash.com/photo-1542435503-9d4128527a05?q=80&w=200&h=200&fit=crop') 20 stretch",
    "linear-gradient(to right, #fca311, #edf2f4) 15 fill",
    "linear-gradient(45deg, #e63946, #f4a261, #2a9d8f) 25 space",
    "url('https://images.unsplash.com/photo-1510915228340-97210e7b99c0?q=80&w=200&h=200&fit=crop') 20 round",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div
        style={{
          width: "200px",
          height: "100px",
          padding: "15px",
          textAlign: "center",
          color: "#f8fafc",
          fontSize: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: "15px", // Important for border-image to show
          borderStyle: "solid", // Required for border-image to apply
          backgroundColor: "#1f2937", // Fallback/background for inner content
          backgroundClip: "padding-box", // Ensure background is behind the border-image
          borderRadius: "8px",
          ...style, // Apply the borderImage style here
        }}
      >
        Border Image Demo
      </div>
    </div>
  ),
  generate: (v) => ({ borderImage: v as any }),
  prefix: "border-image: ",
  parentClass: "block",
};