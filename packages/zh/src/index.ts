import { pinyin } from "pinyin";

export const estimateSyllableCount = (text: string): number => {
  return pinyin(text).length;
};
