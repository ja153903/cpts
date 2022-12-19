function backspaceCompare(s: string, t: string): boolean {
  return evaluateTyping(s) === evaluateTyping(t);
}

function evaluateTyping(s: string): string {
  const stack: string[] = [];

  for (const ch of s) {
    if (ch === '#') {
      if (stack.length) {
        stack.pop();
      }
    } else {
      stack.push(ch);
    }
  }

  return stack.join('');
}

export { backspaceCompare };
