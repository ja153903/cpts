import { Trie } from './implement-trie';

function findWords(board: string[][], words: string[]): string[] {
  // we can create a Trie from the words that exist
  // then from each point, we can iterate over the the trie to check if we have the
  // word

  const result: string[] = [];
  const root = new Trie();

  words.forEach((word) => root.insert(word));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // from this point we should check if a word exists so we do a dfs
      if (root.children.has(board[i][j])) {
        dfs({
          board,
          row: i,
          col: j,
          node: root.children.get(board[i][j]) as Trie,
          current: '',
          result,
          visited: new Set<string>(),
        });
      }
    }
  }

  return Array.from(new Set<string>(result));
}

type Payload = {
  board: string[][];
  row: number;
  col: number;
  node: Trie;
  current: string;
  result: string[];
  visited: Set<string>;
};

const DIRECTIONS: Array<[number, number]> = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs({ board, row, col, node, current, result, visited }: Payload) {
  visited.add(`${row},${col}`);
  const nextState = `${current}${board[row][col]}`;

  if (node.isWord) {
    result.push(nextState);
  }

  for (const [dRow, dCol] of DIRECTIONS) {
    const nRow = row + dRow;
    const nCol = col + dCol;

    const key = `${nRow},${nCol}`;

    if (
      visited.has(key) ||
      nRow < 0 ||
      nCol < 0 ||
      nRow >= board.length ||
      nCol >= board[0].length ||
      !node.children.has(board[nRow][nCol])
    ) {
      continue;
    }

    const nextNode = node.children.get(board[nRow][nCol]) as Trie;

    dfs({
      board,
      row: nRow,
      col: nCol,
      node: nextNode,
      current: nextState,
      result,
      visited,
    });

    visited.delete(key);
  }
}

export { findWords };
