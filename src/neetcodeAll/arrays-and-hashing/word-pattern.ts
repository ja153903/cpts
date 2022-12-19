import { Bijection } from '~/utility/bijection';

function wordPattern(pattern: string, s: string): boolean {
   const bijection = new Bijection();
   const words = s.split(' ');

   if (words.length !== pattern.length) {
      return false;
   }

   for (let i = 0; i < words.length; i++) {
      if (!bijection.has(pattern[i], words[i])) {
         return false;
      }

      bijection.set(pattern[i], words[i]);
   }

   return true;
}

export { wordPattern };
