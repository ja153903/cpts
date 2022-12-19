function maxArea(height: number[]): number {
   let area = 0;

   let left = 0;
   let right = height.length - 1;

   while (left < right) {
      const currentArea =
         Math.min(height[left], height[right]) * (right - left);
      area = Math.max(area, currentArea);

      if (height[left] < height[right]) {
         left++;
      } else {
         right--;
      }
   }

   return area;
}

export { maxArea };
