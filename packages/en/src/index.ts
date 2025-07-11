import { syllable } from "syllable";

export const estimateSyllableCount = (text: string): number => {
  return syllable(text);
};
