function characterReplacement(s: string, k: number): number {
  // Suppose that we have s = ABAB and k = 2
  // We should keep track of the maximum count of any character in the string
  let start = 0;

  const frequency = new Map<string, number>();

  let maxFrequencyCount = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    frequency.set(s[end], (frequency.get(s[end]) ?? 0) + 1);

    maxFrequencyCount = Math.max(maxFrequencyCount, frequency.get(s[end])!);

    // if there are more characters to replace compared to how many we're allowed to replace
    // then we have to move the window
    // const currentWindowSize = end - start + 1;
    // const numCharsToReplace = currentWindowSize - maxFrequencyCount;
    while (end - start + 1 - maxFrequencyCount > k) {
      frequency.set(s[start], frequency.get(s[start])! - 1);
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

export { characterReplacement };
