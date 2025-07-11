import { phonemize } from "@syllables/phonemize";

const vowels = [
  // Standard IPA vowels (pure vowels)
  "iyɨʉɯuɪʏʊeøɘɵɤoəɛœɜɞʌɔæɐaɶɑɒ",
  // r-colored vowels (specific to American English)
  "ɝɚ",
].join("");

// Match vowels or syllabic markers (\u0329 is the syllabic marker)
const syllableRegex = new RegExp(`[${vowels}]|[^${vowels}]\\u0329`, "g");

export const estimateSyllableCount = (text: string): number => {
  if (!text || text.trim().length === 0) {
    return 0;
  }

  const tokens = phonemize(text, {
    anyAscii: true,
    format: "ipa",
    returnArray: true,
  });

  if (!tokens || tokens.length === 0) {
    return 0;
  }

  let syllableCount = 0;
  for (const token of tokens) {
    // Match all vowels and syllabic markers
    const matches = token.phoneme.match(syllableRegex);

    if (!matches) continue;

    let lastWasVowel = false;

    // Iterate through matches to avoid double counting multi-vowel syllables
    for (let i = 0; i < matches.length; i++) {
      const current = matches[i];

      // Ensure current is not undefined
      if (!current) continue;

      // If it's a vowel, check if it's a new syllable
      if (vowels.includes(current)) {
        if (!lastWasVowel) {
          syllableCount++;
          lastWasVowel = true;
        }
      } else if (current.includes("\u0329")) {
        // If it's a syllabic consonant marker, directly increase syllable count
        syllableCount++;
        lastWasVowel = false;
      }
      // Other cases are not handled, might be noise data
    }
  }

  return syllableCount;
};
