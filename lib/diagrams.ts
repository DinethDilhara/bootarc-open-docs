import testJson from "../diagrams/test.json";
import systemDesignJson from "../diagrams/system-design-challenge.json";

export const diagrams = {
  "test": testJson,
  "system-design-challenge": systemDesignJson,
} as const;

export type DiagramName = keyof typeof diagrams;
