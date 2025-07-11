import { estimateSyllableCount as estimateSyllableCountEn } from "@syllables/en";
import { estimateSyllableCount as estimateSyllableCountEs } from "@syllables/es";
import { estimateSyllableCount as estimateSyllableCountFr } from "@syllables/fr";
import { estimateSyllableCount as estimateSyllableCountZh } from "@syllables/zh";
import { estimateSyllableCount as estimateSyllableCountFallback } from "@syllables/fallback";

export const estimateSyllableCount = (
  text: string,
  language: string
): number => {
  switch (language) {
    case "en":
      return estimateSyllableCountEn(text);
    case "es":
      return estimateSyllableCountEs(text);
    case "fr":
      return estimateSyllableCountFr(text);
    case "zh":
      return estimateSyllableCountZh(text);
    default:
      return estimateSyllableCountFallback(text);
  }
};
