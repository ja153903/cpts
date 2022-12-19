function intToRoman(num: number): string {
   let result = '';

   while (num > 0) {
      if (num >= 1000) {
         num -= 1000;
         result += 'M';
      } else if (num >= 500) {
         if (num >= 900 && num <= 999) {
            result += 'CM';
            num -= 900;
         } else {
            result += 'D';
            num -= 500;
         }
      } else if (num >= 100) {
         if (num >= 400 && num <= 499) {
            result += 'CD';
            num -= 400;
         } else {
            result += 'C';
            num -= 100;
         }
      } else if (num >= 50) {
         if (num >= 90 && num <= 99) {
            result += 'XC';
            num -= 90;
         } else {
            result += 'L';
            num -= 50;
         }
      } else if (num >= 10) {
         if (num >= 40 && num <= 49) {
            result += 'XL';
            num -= 40;
         } else {
            result += 'X';
            num -= 10;
         }
      } else if (num >= 5) {
         if (num === 9) {
            result += 'IX';
            num -= 9;
         } else {
            result += 'V';
            num -= 5;
         }
      } else {
         if (num === 4) {
            result += 'IV';
            num -= 4;
         } else {
            result += 'I';
            num -= 1;
         }
      }
   }

   return result;
}

export { intToRoman };
