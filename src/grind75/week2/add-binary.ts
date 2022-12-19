function addBinary(a: string, b: string): string {
   let result = '';
   let carry = 0;

   let i = a.length - 1;
   let j = b.length - 1;

   while (i >= 0 || j >= 0) {
      let current = carry;

      if (i >= 0 && a[i] === '1') {
         current++;
         i--;
      }

      if (j >= 0 && b[j] === '1') {
         current++;
         j--;
      }

      result = (current % 2 === 0 ? '0' : '1') + result;
      carry = Math.floor(current / 2);
   }

   if (carry > 0) {
      result = '1' + result;
   }

   return result;
}

export { addBinary };
