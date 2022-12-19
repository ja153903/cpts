const MORSE_CODES = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];

function uniqueMorseRepresentations(words: string[]): number {
  const uniqueReprs = new Set<string>();

  for (const word of words) {
    let morse = '';
    for (const ch of word) {
      const index = ch.charCodeAt(0) - 97;
      morse += MORSE_CODES[index];
    }

    uniqueReprs.add(morse);
  }

  return uniqueReprs.size;
}

export { uniqueMorseRepresentations };
