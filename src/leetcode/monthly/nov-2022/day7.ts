function maximum69Number(num: number): number {
   // we only change the number if it's a 6.
   const chars = num.toString().split('');
   for (let i = 0; i < chars.length; i++) {
      if (chars[i] === '6') {
         chars[i] = '9';
         break;
      }
   }

   return parseInt(chars.join(''));
}

export { maximum69Number };
