function removeDuplicates(s: string): string {
  const stack: string[] = [];

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    let isPopped = false;

    while (stack.length && stack.at(-1)! === s[i]) {
      isPopped = true;
      stack.pop();
    }

    if (!isPopped) {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

export { removeDuplicates };
