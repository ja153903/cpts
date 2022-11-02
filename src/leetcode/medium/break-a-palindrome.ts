function breakPalindrome(palindrome: string): string {
  if (palindrome.length <= 1) {
    return '';
  }

  const chars = palindrome.split('');

  // we only need to go through half the string because
  // we're dealing with a palindrome
  for (let i = 0; i < Math.floor(chars.length / 2); i++) {
    if (chars[i] !== 'a') {
      chars[i] = 'a';
      return chars.join('');
    }
  }

  chars[chars.length - 1] = 'b';

  return chars.join('');
}

export { breakPalindrome };
