import { syllabify } from "syllabify-fr";

export const estimateSyllableCount = (text: string): number => {
  return syllabify(text).nb;
};
