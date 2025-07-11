import { syllable as baseSyllable } from "syllable";

export const syllabize = (text: string): number => {
  return baseSyllable(text);
};
