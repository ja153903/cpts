// First cancel out all the valid pairs,
// then you will be left with something like ]]][[[,
// and the answer will be ceil(m/2).
// Where m is the number of pairs left.
function minSwaps(s: string): number {
  const stack: string[] = [];
  let mismatch = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      stack.push(']');
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        mismatch++;
      }
    }
  }

  return Math.floor((mismatch + 1) / 2);
}

export { minSwaps };
