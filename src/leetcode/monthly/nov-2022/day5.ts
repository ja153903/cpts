import { Trie } from '~/neetcode150/tries/implement-trie';

function findWords(board: string[][], words: string[]): string[] {
  // Brute Force approach here is to go through each word in the words array
  // for each word, we would do a DFS search in the board which would take O(n^2) time
  // Total time complexity in this case would take O(a * m * n) where a is the length of the words array
  // and (m * n) would be the size  of the board.
  // What we can do here is look for the starts of each letter as a starting point
  // we can try to do a DFS, but only go as far as the desired length.
  const result: string[] = [];
  const trie = new Trie();

  words.forEach((word) => trie.insert(word));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (trie.startsWith(board[row][col])) {
        dfs(board, trie, result, '', row, col);
      }
    }
  }

  return Array.from(new Set<string>(result));
}

function dfs(
  board: string[][],
  trie: Trie,
  result: string[],
  current: string,
  row: number,
  col: number
) {
  if (trie.isWord) {
    result.push(current);
    // once we add the result, we mark is as not a word in the trie
    trie.isWord = false;
  }

  if (
    row < 0 ||
    col < 0 ||
    row >= board.length ||
    col >= board[0].length ||
    board[row][col] === ''
  ) {
    return;
  }

  if (!trie.startsWith(board[row][col])) {
    return false;
  }

  const next = trie.children.get(board[row][col]);

  if (next) {
    current += board[row][col];

    const temp = board[row][col];
    board[row][col] = '';

    dfs(board, next, result, current, row + 1, col);
    dfs(board, next, result, current, row - 1, col);
    dfs(board, next, result, current, row, col + 1);
    dfs(board, next, result, current, row, col - 1);

    board[row][col] = temp;
  }
}

export { findWords };
