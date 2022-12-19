function isStrobogrammatic(num: string): boolean {
   let left = 0;
   let right = num.length - 1;

   while (left <= right) {
      const leftNum = num[left];
      const rightNum = num[right];

      if (!isStroboNum(leftNum) || !isStroboNum(rightNum)) {
         return false;
      }

      if (
         (leftNum === '0' && rightNum !== leftNum) ||
         (leftNum === '1' && rightNum !== leftNum) ||
         (leftNum === '8' && rightNum !== leftNum) ||
         (leftNum === '6' && rightNum !== '9') ||
         (leftNum === '9' && rightNum !== '6')
      ) {
         return false;
      }

      left++;
      right--;
   }

   return true;
}

function isStroboNum(num: string): boolean {
   return '01698'.includes(num);
}

export { isStrobogrammatic };
