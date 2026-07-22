import type { PropertyTemplate } from "../types";
import React, { useRef } from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const scrollBehaviorTemplate: PropertyTemplate = {
  name: "Scroll Behavior",
  controls: [],
  values: ["auto", "smooth"],
  preview: (style) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const itemToScrollToRef = useRef<HTMLDivElement>(null);

    const handleScrollToItem5 = () => {
      if (itemToScrollToRef.current) {
        // Use 'instant' behavior for scrollIntoView to ensure the CSS 'scroll-behavior'
        // property on the parent container (scrollContainerRef) dictates the animation.
        itemToScrollToRef.current.scrollIntoView({ behavior: "instant", block: "start" });
      }
    };

    return (
      <div style={{ ...demoContainerStyles }}>
        <button
          onClick={handleScrollToItem5}
          style={{
            padding: "8px 15px",
            background: "#38bdf8",
            color: "#1a2332",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            alignSelf: "flex-start",
            fontWeight: "bold",
            fontSize: "0.9em",
            whiteSpace: "nowrap",
          }}
        >
          Scroll to Item 5
        </button>
        <div
          ref={scrollContainerRef}
          style={{
            ...style, // scrollBehavior property will be applied here
            height: "200px",
            overflowY: "scroll",
            border: "2px solid #38bdf8",
            borderRadius: "4px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            overscrollBehaviorY: "contain", // Prevents document scrolling when container hits end
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              ref={i === 4 ? itemToScrollToRef : null} // Assign ref to the 5th item (index 4)
              style={{
                background: i % 2 === 0 ? "#4a5568" : "#6b7280",
                padding: "15px",
                borderRadius: "4px",
                textAlign: "center",
                minHeight: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1em",
                fontWeight: "600",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Item {i + 1} {i === 4 && "(Target)"}
            </div>
          ))}
          <div style={{ padding: '20px', border: '2px dashed #93c5fd', borderRadius: '4px', textAlign: 'center', marginTop: '10px' }}>
            Visual representation of scrollBehavior
          </div>
        </div>
      </div>
    );
  },
  generate: (v) => ({ scrollBehavior: v as any }),
  prefix: "scroll-behavior: ",
  parentClass: "block",
};