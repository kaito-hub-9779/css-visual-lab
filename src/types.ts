import type { CSSProperties, ReactNode } from "react";

export type Control = {
  key: string;
  label: string;
  min: number;
  max: number;
  unit: string;
  default: number;
};

export type PropertyTemplate = {
  name: string;
  controls: Control[];
  values: string[];
  preview: (style: CSSProperties) => ReactNode;
  generate: (values: string) => CSSProperties;
  prefix: string;
  parentClass: string;
};
