import { findWords } from '../day5';

describe('findWords()', () => {
  it('should pass a sample case', () => {
    const board = [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
    ];
    const words = ['oath', 'pea', 'eat', 'rain'];

    expect(findWords(board, words).sort((a, b) => a.localeCompare(b))).toEqual([
      'eat',
      'oath',
    ]);
  });

  it('should pass another sample case', () => {
    const board = [
      ['a', 'b'],
      ['c', 'd'],
    ];
    const words = ['abcb'];

    expect(findWords(board, words)).toEqual([]);
  });
});
