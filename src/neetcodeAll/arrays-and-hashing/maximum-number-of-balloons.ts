function maxNumberOfBalloons(text: string): number {
   const letters = new Array<number>(26).fill(0);
   const BALLOON = 'balloon';

   for (const ch of text) {
      const charCode = ch.charCodeAt(0);
      const index = charCode - 97;

      letters[index]++;
   }

   let num = 0;

   while (true) {
      let canCreate = true;

      for (const ch of BALLOON) {
         const charCode = ch.charCodeAt(0);
         const index = charCode - 97;

         if (letters[index] <= 0) {
            canCreate = false;
            break;
         }

         letters[index]--;
      }

      if (!canCreate) {
         return num;
      }

      num++;
   }
}

export { maxNumberOfBalloons };
