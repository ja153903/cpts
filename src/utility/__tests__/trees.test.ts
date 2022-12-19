import { createBinaryTreeFromList, inOrderTraversal } from '~/utility/trees';

describe('createBinaryTreeFromList', () => {
  it('should create null TreeNode from empty list', () => {
    expect(createBinaryTreeFromList([])).toBeNull();
  });

  it('should create null TreeNode from list with only empty node', () => {
    expect(createBinaryTreeFromList([null])).toBeNull();
  });

  it('should create basic tree from list', () => {
    const testCase = [1, 2, 3, null, 4];
    const result = createBinaryTreeFromList(testCase);

    const nodes: number[] = [];
    inOrderTraversal(result, nodes);

    expect(nodes).toEqual([2, 4, 1, 3]);
  });

  it('should create a deeper tree from list', () => {
    const testCase = [4, 1, null, 2, 3, null, null, 3, null];
    const result = createBinaryTreeFromList(testCase);

    const nodes: number[] = [];
    inOrderTraversal(result, nodes);

    expect(nodes).toEqual([3, 2, 1, 3, 4]);
  });
});
