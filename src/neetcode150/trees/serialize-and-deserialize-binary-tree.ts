import TreeNode from './node';

const NULL_NODE_REPR = 'X';
const SEPARATOR = ',';

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
   const builder: string[] = [];

   function preOrderTraversal(node: TreeNode | null) {
      if (!node) {
         builder.push(NULL_NODE_REPR);
         builder.push(SEPARATOR);
      } else {
         builder.push(node.val.toString());
         builder.push(SEPARATOR);

         preOrderTraversal(node.left);
         preOrderTraversal(node.right);
      }
   }

   preOrderTraversal(root);

   return builder.join('');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
   const nodes = data.split(SEPARATOR);
   return buildTree(nodes);
}

function buildTree(nodes: string[]): TreeNode | null {
   const front = nodes.shift() as string;

   if (front === NULL_NODE_REPR) {
      return null;
   } else {
      const root = new TreeNode(parseInt(front));

      root.left = buildTree(nodes);
      root.right = buildTree(nodes);

      return root;
   }
}

export { serialize, deserialize };
