import testJson from "../diagrams/test.json";
import systemDesignJson from "../diagrams/system-design-challenge.json";
import adversarialSearchJson from "../diagrams/adversarial-search-doodling.json"

export const diagrams = {
  "test": testJson,
  "system-design-challenge": systemDesignJson,
  "adversarial-search-doodling": adversarialSearchJson,
} as const;

export type DiagramName = keyof typeof diagrams;
