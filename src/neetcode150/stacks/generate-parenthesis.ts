type StackNode = { value: string; open: number; close: number };

function generateParenthesis(n: number): string[] {
   const stack: StackNode[] = [];
   const result: string[] = [];

   stack.push({ value: '', open: 0, close: 0 });

   while (stack.length) {
      const { value, open, close } = stack.pop()!;

      if (value.length === 2 * n) {
         result.push(value);
      } else {
         if (open < n) {
            stack.push({ value: `${value}(`, open: open + 1, close });
         }

         if (close < open) {
            stack.push({ value: `${value})`, open, close: close + 1 });
         }
      }
   }

   return result;
}

export { generateParenthesis };
