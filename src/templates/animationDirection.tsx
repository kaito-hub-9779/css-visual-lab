import type { PropertyTemplate } from "../types";

export const animationDirectionTemplate: PropertyTemplate = {
  name: "Animation Direction",
  controls: [],
  values: ["normal", "reverse", "alternate", "alternate-reverse"],
  preview: (style) => (
    <>
      <style>{`@keyframes slide { from { transform: translateX(-60px); } to { transform: translateX(60px); } }`}</style>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <div className="box" style={{ animation: `slide 1.2s ease-in-out infinite`, animationDirection: style.animationDirection as any }} />
        <span style={{ color: "#facc15", fontSize: "13px" }}>direction: {style.animationDirection as string}</span>
      </div>
    </>
  ),
  generate: (v) => ({ animationDirection: v as any }),
  prefix: "animation-direction: ",
  parentClass: ".box",
};
