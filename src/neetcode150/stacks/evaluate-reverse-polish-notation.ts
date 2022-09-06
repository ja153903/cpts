const OPS = new Set<string>(['+', '-', '*', '/']);

function evalRPN(tokens: string[]): number {
  const stack: string[] = [];

  for (const token of tokens) {
    if (OPS.has(token)) {
      const b = stack.pop()!;
      const a = stack.pop()!;

      stack.push(evaluate(a, b, token));
    } else {
      stack.push(token);
    }
  }

  return Number(stack.pop());
}

function evaluate(a: string, b: string, op: string): string {
  const aAsNumber = +a;
  const bAsNumber = +b;

  switch (op) {
    case '+':
      return (aAsNumber + bAsNumber).toString();
    case '-':
      return (aAsNumber - bAsNumber).toString();
    case '*':
      return (aAsNumber * bAsNumber).toString();
    default:
      return Math.trunc(aAsNumber / bAsNumber).toString();
  }
}

export { evalRPN };
