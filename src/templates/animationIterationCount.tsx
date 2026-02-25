import type { PropertyTemplate } from "../types";

export const animationIterationCountTemplate: PropertyTemplate = {
  name: "Animation Iteration Count",
  controls: [
    { key: "count", label: "Count", min: 1, max: 10, unit: "", default: 1 },
  ],
  values: ["1", "2", "3", "5", "infinite"],
  preview: (style) => (
    <>
      <style>{`@keyframes spin2 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <div style={{ textAlign: "center" }}>
        <div
          className="box"
          style={{
            animation: `spin2 1s linear ${style.animationIterationCount}`,
          }}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "8px" }}>
          iteration-count: {style.animationIterationCount as string}
        </div>
      </div>
    </>
  ),
  generate: (v) => ({ animationIterationCount: v as any }),
  prefix: "animation-iteration-count: ",
  parentClass: ".box",
};
