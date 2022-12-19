function isValid(s: string): boolean {
   const stack: string[] = [];
   const openingBracketMap: Record<string, string> = {
      '(': ')',
      '{': '}',
      '[': ']',
   };

   for (const ch of s) {
      if (ch === '(' || ch === '[' || ch === '{') {
         stack.push(openingBracketMap[ch]);
      } else if (stack.length === 0 || stack.pop() !== ch) {
         return false;
      }
   }

   return stack.length === 0;
}

export { isValid };
