function decodeString(s: string): string {
  // this seems like another problem where we use a stack
  // we want to keep track of the current number we have
  // we also want to keep track of the current string we have
  // the brackets will determine when we start updating things
  // Suppose we have something like "10[2[a]]"
  const stack = [] as (string | number)[];
  let currentNum = 0;
  let currentString = '';

  for (const ch of s) {
    if (isDigit(ch)) {
      currentNum = currentNum * 10 + parseInt(ch);
    } else if (ch === '[') {
      // when we have an opening bracket
      // we should enter the currentNum into the stack along
      // with the currentString?
      stack.push(currentNum);
      stack.push(currentString);

      currentNum = 0;
      currentString = '';
    } else if (ch === ']') {
      // when we're closing we can grab the last two values
      const prevString = stack.pop() as string;
      const prevNum = stack.pop() as number;

      currentString = prevString + currentString.repeat(prevNum);
    } else {
      // when its a character, we just add it to the current string
      currentString += ch;
    }
  }

  return currentString;
}

function isDigit(ch: string): boolean {
  const charCode = ch.charCodeAt(0);

  return 48 <= charCode && charCode <= 57;
}

export { decodeString };
