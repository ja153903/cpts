const NUMBER_TO_PHONE_LETTER: Record<string, string> = {
   '2': 'abc',
   '3': 'def',
   '4': 'ghi',
   '5': 'jkl',
   '6': 'mno',
   '7': 'pqrs',
   '8': 'tuv',
   '9': 'wxyz',
};

function letterCombinations(digits: string): string[] {
   if (!digits) {
      return [];
   }

   const queue: string[] = [];
   queue.push('');

   for (const digit of digits) {
      const possibleChars = NUMBER_TO_PHONE_LETTER[digit];

      const size = queue.length;

      for (let i = 0; i < size; i++) {
         const front = queue.shift() as string;
         for (const char of possibleChars) {
            queue.push(`${front}${char}`);
         }
      }
   }

   return queue;
}

export { letterCombinations };
