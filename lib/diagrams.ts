import testJson from "../diagrams/test.json";

export const diagrams = {
  "test": testJson,
} as const;

export type DiagramName = keyof typeof diagrams;
