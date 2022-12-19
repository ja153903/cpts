function isAnagram(s: string, t: string): boolean {
  // s and t are all lowercase characters
  const sFreq = new Array<number>(26).fill(0);
  for (const ch of s) {
    const index = ch.charCodeAt(0) - 97;
    sFreq[index]++;
  }

  for (const ch of t) {
    const index = ch.charCodeAt(0) - 97;
    if (sFreq[index] === 0) {
      return false;
    }

    sFreq[index]--;
  }

  for (const count of sFreq) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

export { isAnagram };
