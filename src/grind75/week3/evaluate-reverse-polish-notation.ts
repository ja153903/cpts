const OPERATIONS = new Set<string>(['+', '-', '*', '/']);

function evalRPN(tokens: string[]): number {
   const stack: string[] = [];

   for (const token of tokens) {
      if (OPERATIONS.has(token)) {
         const b = parseInt(stack.pop() as string);
         const a = parseInt(stack.pop() as string);

         switch (token) {
            case '+':
               stack.push((a + b).toString());
               break;
            case '-':
               stack.push((a - b).toString());
               break;
            case '*':
               stack.push((a * b).toString());
               break;
            default:
               stack.push(Math.trunc(a / b).toString());
               break;
         }
      } else {
         stack.push(token);
      }
   }

   return parseInt(stack.pop() as string);
}

export { evalRPN };
