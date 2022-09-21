import { Trie } from '../implement-trie';

describe('Implement Trie', () => {
  it('should pass some tests', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('apple')).toBeTruthy();
    expect(trie.search('app')).toBeFalsy();
    expect(trie.startsWith('app')).toBeTruthy();
    trie.insert('app');
    expect(trie.search('app')).toBeTruthy();
  });
});
