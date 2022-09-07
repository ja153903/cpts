function minAddToMakeValid(s: string): number {
  const stack: string[] = [];
  let moves = 0;

  for (const ch of s) {
    if (ch === '(') {
      stack.push(')');
    } else if (ch === ')') {
      if (stack.length === 0) {
        moves++;
      } else {
        stack.pop();
      }
    }
  }

  return moves + stack.length;
}

export { minAddToMakeValid };
