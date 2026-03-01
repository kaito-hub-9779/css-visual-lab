import type { PropertyTemplate } from "../types";

export const animationTemplate: PropertyTemplate = {
  name: "Animation",
  controls: [
    {
      key: "duration",
      label: "Duration",
      min: 100,
      max: 3000,
      unit: "ms",
      default: 1000,
    },
  ],
  values: [
    "spin 1s linear infinite",
    "bounce 1s ease infinite",
    "pulse 2s ease-in-out infinite",
    "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
    "wiggle 0.5s ease-in-out infinite",
  ],
  preview: (style) => {
    return (
      <>
        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-40px); } }
          @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.9); } }
          @keyframes ping { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(1.8); opacity: 0; } }
          @keyframes wiggle { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
        `}</style>
        <div className="box" style={{ animation: style.animation as string }} />
      </>
    );
  },
  generate: (v) => ({
    animation: v,
  }),
  prefix: "animation: ",
  parentClass: ".box",
};
