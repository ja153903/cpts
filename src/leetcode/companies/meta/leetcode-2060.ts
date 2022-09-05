// TODO: Figure this problem out
function possiblyEquals(s1: string, s2: string): boolean {
  // we should keep track of s2. We can split this into multiple things.
  // the first character and last characters are the easiest to check
  // once we have those cases checked, then we should be able to split up
  // the numbers into multiple cases example:
  // Suppose we have Input: s1 = "internationalization", s2 = "i18n"
  // when we have 18, we can split this up into [1, 8] or it can be [18]
  // from there, we should check if the remaining substring can be split into either one
  // we should also consider cases such as s1 = "l123e", s2 = "44"
  return false;
}

export { possiblyEquals };
