import { syllabize as syllabizeEn } from "@syllable/en";
import { syllabize as syllabizeZh } from "@syllable/zh";
import { syllabize as syllabizeFallback } from "@syllable/fallback";

export const syllabize = (text: string, language: string): number => {
  switch (language) {
    case "en":
      return syllabizeEn(text);
    case "zh":
      return syllabizeZh(text);
    default:
      return syllabizeFallback(text);
  }
};
