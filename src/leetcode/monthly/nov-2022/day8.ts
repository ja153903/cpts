function makeGood(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length) {
      const prevCharCode = stack.at(-1)!.charCodeAt(0);
      const currCharCode = s[i].charCodeAt(0);

      if (Math.abs(currCharCode - prevCharCode) === 32) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

export { makeGood };
