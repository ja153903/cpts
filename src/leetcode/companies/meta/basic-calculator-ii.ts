function calculate(s: string): number {
  // filter out the spaces
  const chars = s.split('').filter((ch) => ch !== ' ');

  const numStack = new Array<number>();

  let num = 0;
  let sign = '+';

  for (let i = 0; i < chars.length; i++) {
    if (isDigit(chars[i])) {
      num = num * 10 + parseInt(chars[i]);
    }

    if (!isDigit(chars[i]) || i === chars.length - 1) {
      if (sign === '-') {
        numStack.push(-num);
      }

      if (sign === '+') {
        numStack.push(num);
      }

      if (sign === '*') {
        numStack.push((numStack.pop() as number) * num);
      }

      if (sign === '/') {
        numStack.push(Math.trunc((numStack.pop() as number) / num));
      }

      sign = chars[i];
      num = 0;
    }
  }

  return numStack.reduce((acc, num) => acc + num, 0);
}

function isDigit(ch: string): boolean {
  const charCode = ch.charCodeAt(0);

  return 48 <= charCode && charCode <= 57;
}

export { calculate };
