function minRemoveToMakeValid(s: string): string {
   // a)b(c)d
   const chars = new Array<string>(s.length).fill('');
   // keep a stack of indices
   const stack = new Array<number>();

   for (let i = 0; i < s.length; i++) {
      if (!['(', ')'].includes(s[i])) {
         chars[i] = s[i];
      } else if (s[i] === '(') {
         stack.push(i);
      } else {
         if (stack.length === 0) {
            continue;
         }

         // this is when we have a closing parenthesis
         chars[stack.pop() as number] = '(';
         chars[i] = ')';
      }
   }

   return chars.join('');
}

export { minRemoveToMakeValid };
