// This approach makes sure that we just remove the
// most outer parenthesis. We know that the most outer parenthesis
// will exist on when the stack is empty after we pop.
function removeOuterParentheses(s: string): string {
   const stack: number[] = [];
   const result = s.split('');

   for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
         stack.push(i);
      } else {
         const prev = stack.pop() as number;

         if (stack.length === 0) {
            result[prev] = '';
            result[i] = '';
         }
      }
   }

   return result.filter((word) => word !== '').join('');
}

export { removeOuterParentheses };
