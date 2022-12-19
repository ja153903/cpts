// TODO: Still doing something
// Input: word = "internationalization", abbr = "i12iz4n"
// keep track of the current letter
// we also keep track of the current count
// if we encounter another letter then we check if our count is non-zero
// then we can advance the pointer on the word
function validWordAbbreviation(word: string, abbr: string): boolean {
   let pointer = 0;
   let count = 0;

   const instructions = new Array<string | number>();

   for (const ch of abbr) {
      if (isDigit(ch)) {
         // Edge case. Nasty ass problem
         if (ch === '0' && count === 0) {
            return false;
         }

         count = count * 10 + parseInt(ch);
      } else {
         if (count > 0) {
            instructions.push(count);
            count = 0;
         }

         instructions.push(ch);
      }
   }

   if (count > 0) {
      instructions.push(count);
   }

   for (const instruction of instructions) {
      if (typeof instruction === 'number') {
         pointer += instruction;
      } else {
         if (word[pointer] !== instruction) {
            return false;
         }

         pointer++;
      }
   }

   return pointer === word.length;
}

function isDigit(ch: string): boolean {
   const charCode = ch.charCodeAt(0);

   return 48 <= charCode && charCode <= 57;
}

export { validWordAbbreviation };
