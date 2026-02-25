import type { PropertyTemplate } from "../types";

export const animationFillModeTemplate: PropertyTemplate = {
  name: "Animation Fill Mode",
  controls: [],
  values: ["none", "forwards", "backwards", "both"],
  preview: (style) => (
    <>
      <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <div
          className="box"
          style={{
            animation: `fadeSlide 1s ease 0.5s`,
            animationFillMode: style.animationFillMode as any,
            animationIterationCount: 1,
          }}
        />
        <span style={{ color: "#94a3b8", fontSize: "13px" }}>fill-mode: {style.animationFillMode as string}</span>
      </div>
    </>
  ),
  generate: (v) => ({ animationFillMode: v as any }),
  prefix: "animation-fill-mode: ",
  parentClass: ".box",
};
