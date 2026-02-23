import type { Control } from "../types";

type Props = {
  controls: Control[];
  values: Record<string, number>;
  setValues: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

export default function Controls({ controls, values, setValues }: Props) {
  return (
    <div className="controls">
      {controls.map((control) => (
        <div key={control.key}>
          <label>
            {control.label}:{values[control.key]}
            {control.unit}
          </label>
          <input
            type="range"
            min={control.min}
            max={control.max}
            onChange={(e) =>
              setValues((val) => ({
                ...val,
                [control.key]: Number(e.target.value),
              }))
            }
          />
        </div>
      ))}
    </div>
  );
}
