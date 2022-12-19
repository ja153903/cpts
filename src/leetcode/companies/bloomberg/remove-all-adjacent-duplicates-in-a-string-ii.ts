function removeDuplicates(s: string, k: number): string {
   // the idea here to keep everything in a stack
   // [d, e, e, e] => if the size of the stack is at least k
   // then let's check the top k elements to see if we can remove them
   // if we can remove them, then we do
   const stack = [] as string[];

   for (const ch of s) {
      stack.push(ch);

      if (stack.length >= k) {
         // if the stack has length of at least k, then we should
         // check the last k elements
         let isAllTheSame = true;
         for (let i = stack.length - k; i < stack.length - 1; i++) {
            if (stack[i] !== stack[i + 1]) {
               isAllTheSame = false;
               break;
            }
         }

         // If those k elements are all the same, then we should pop them
         if (isAllTheSame) {
            for (let i = 0; i < k; i++) {
               stack.pop();
            }
         }
      }
   }

   return stack.join('');
}

export { removeDuplicates };
