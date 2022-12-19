function minRemoveToMakeValid(s: string): string {
   const stack = new Array<number>();
   const result = new Array<string>();

   for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
         stack.push(i);
         result.push('*');
      } else if (s[i] === ')') {
         if (stack.length === 0) {
            result.push('*');
         } else {
            const top = stack.pop() as number;
            result[top] = '(';
            result.push(')');
         }
      } else {
         result.push(s[i]);
      }
   }

   return result.filter((char) => char !== '*').join('');
}

export { minRemoveToMakeValid };
