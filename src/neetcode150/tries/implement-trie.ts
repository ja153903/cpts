class Trie {
  isWord: boolean;
  children: Map<string, Trie>;

  constructor() {
    this.isWord = false;
    this.children = new Map();
  }

  insert(word: string): void {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        current.children.set(ch, new Trie());
      }

      current = current.children.get(ch)!;
    }

    current.isWord = true;
  }

  search(word: string): boolean {
    let current: Trie = this;

    for (const ch of word) {
      if (!current.children.has(ch)) {
        return false;
      }

      current = current.children.get(ch)!;
    }

    return current.isWord;
  }

  startsWith(prefix: string): boolean {
    let current: Trie = this;

    for (const ch of prefix) {
      if (!current.children.has(ch)) {
        return false;
      }

      current = current.children.get(ch)!;
    }

    return true;
  }
}

export { Trie };
