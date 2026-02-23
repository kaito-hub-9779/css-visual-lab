import { useEffect, useState } from "react";
import type { PropertyTemplate } from "../types";
import Codeview from "./CodeView";

export default function Preview({ template }: { template: PropertyTemplate }) {
  const values = template.values;

  // 次にタイピングする値
  const [valueIndex, setValueIndex] = useState(0);

  // タイピング中の文字数
  const [charIndex, setCharIndex] = useState(0);

  // 削除中かどうか
  const [isDeleting, setIsDeleting] = useState(false);

  // 実際に box に適用される値
  const [appliedIndex, setAppliedIndex] = useState(0);

  const currentValue = values[valueIndex];
  const appliedValue = values[appliedIndex];

  useEffect(() => {
    const speed = isDeleting ? 15 : 30;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // タイピング中
        if (charIndex < currentValue.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          // タイピング完了 → styleを適用
          setAppliedIndex(valueIndex);

          // 少し待って削除開始
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // 削除中
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          // 削除完了 → 次の値へ
          setIsDeleting(false);

          setValueIndex((prev) => {
            let next = (prev + 1) % values.length;
            // 同じ値が連続しないように調整
            if (next === appliedIndex) {
              next = (next + 1) % values.length;
            }
            return next;
          });
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    currentValue.length,
    valueIndex,
    appliedIndex,
    values.length,
  ]);

  // タイピング表示用テキスト
  const displayText = template.prefix + currentValue.slice(0, charIndex);

  // style は appliedIndex から生成 → 完全同期
  const style = template.generate(appliedValue);

  return (
    <div className="preview" style={{ justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {template.preview(style)}
        <Codeview code={displayText} parentClass={template.parentClass} />
      </div>
    </div>
  );
}
