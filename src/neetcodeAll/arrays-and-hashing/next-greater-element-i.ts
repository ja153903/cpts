// next greater element is a typical monotonic stack problem
// but given the input size for this problem, we can get away
// with a brute force solution
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
   const result = new Array<number>(nums1.length).fill(-1);

   for (let i = 0; i < nums1.length; i++) {
      let indexOf = nums2.indexOf(nums1[i]);
      for (let j = indexOf + 1; j < nums2.length; j++) {
         if (nums2[j] > nums1[i]) {
            result[i] = nums2[j];
            break;
         }
      }
   }

   return result;
}

export { nextGreaterElement };
