import { estimateSyllableCount as estimateSyllableCountEn } from "@syllables/en";
import { estimateSyllableCount as estimateSyllableCountZh } from "@syllables/zh";
import { estimateSyllableCount as estimateSyllableCountFallback } from "@syllables/fallback";

export const estimateSyllableCount = (
  text: string,
  language: string
): number => {
  switch (language) {
    case "en":
      return estimateSyllableCountEn(text);
    case "zh":
      return estimateSyllableCountZh(text);
    default:
      return estimateSyllableCountFallback(text);
  }
};
