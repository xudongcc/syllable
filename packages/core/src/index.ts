import { syllabize as syllabizeEn } from "@syllables/en";
import { syllabize as syllabizeZh } from "@syllables/zh";
import { syllabize as syllabizeFallback } from "@syllables/fallback";

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
