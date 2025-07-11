import { pinyin } from "pinyin";

export const syllabize = (text: string): number => {
  return pinyin(text).length;
};
