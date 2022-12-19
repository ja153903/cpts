// NOTE: There is a difference between subarrays and subsequences
// subsequences do not have to be consecutive.
// so the idea here is to remove a's with the first operation
// and then to remove b's with the second operation.
function removePalindromeSub(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  const reversed = s.split('').reverse().join('');

  if (s === reversed) {
    return 1;
  }

  return 2;
}

export { removePalindromeSub };
