import type { PropertyTemplate } from "../types";

export const scrollSnapTypeTemplate: PropertyTemplate = {
  name: "Scroll Snap Type",
  controls: [],
  values: ["none", "x mandatory", "y mandatory", "x proximity", "y proximity"],
  preview: (style) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          scrollSnapType: style.scrollSnapType as string,
          overflowX: "scroll",
          display: "flex",
          width: "260px",
          height: "120px",
          gap: "0px",
          scrollbarWidth: "none",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
        }}
      >
        {["#ec4899", "#38bdf8", "#facc15", "#34d399", "#8b5cf6"].map((c, i) => (
          <div
            key={i}
            style={{
              scrollSnapAlign: "start",
              minWidth: "260px",
              height: "116px",
              background: c,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "20px",
              flexShrink: 0,
            }}
          >
            Slide {i + 1}
          </div>
        ))}
      </div>
      <span style={{ color: "#94a3b8", fontSize: "12px" }}>← スクロールしてみてください</span>
    </div>
  ),
  generate: (v) => ({ scrollSnapType: v as any }),
  prefix: "scroll-snap-type: ",
  parentClass: ".container",
};
