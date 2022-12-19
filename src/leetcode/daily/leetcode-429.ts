class _Node {
   val: number;
   children: _Node[];

   constructor(val?: number) {
      this.val = val ?? 0;
      this.children = [];
   }
}

function levelOrder(root: _Node | null): number[][] {
   if (!root) {
      return [];
   }

   const result: number[][] = [];
   const queue = new Array<_Node>();
   queue.push(root);

   while (queue.length > 0) {
      const size = queue.length;
      const subResult: number[] = [];

      for (let i = 0; i < size; i++) {
         const front = queue.shift() as _Node;

         subResult.push(front.val);

         for (const child of front.children) {
            queue.push(child);
         }
      }

      result.push(subResult);
   }

   return result;
}
