/**
 * isVowel determines whether the character exists as a vowel
 * whether that's lowercase or uppercase.
 */
function isVowel(ch: string): boolean {
  return 'aeiouAEIOU'.includes(ch);
}

function reverseVowels(s: string): string {
  const chars = s.split('');
  const vowels = chars.filter((ch) => isVowel(ch)).reverse();

  let vIndex = 0;
  for (let i = 0; i < chars.length; i++) {
    if (isVowel(chars[i])) {
      chars[i] = vowels[vIndex];
      vIndex++;
    }
  }

  return chars.join('');
}

export { reverseVowels };
