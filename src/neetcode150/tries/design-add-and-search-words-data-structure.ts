class TrieNode {
   isWord: boolean;
   children: Map<string, TrieNode>;

   constructor() {
      this.isWord = false;
      this.children = new Map();
   }

   addWord(word: string) {
      let current: TrieNode = this;

      for (const ch of word) {
         if (!current.children.has(ch)) {
            current.children.set(ch, new TrieNode());
         }

         current = current.children.get(ch)!;
      }

      current.isWord = true;
   }
}

class WordDictionary {
   private root: TrieNode;

   constructor() {
      this.root = new TrieNode();
   }

   addWord(word: string): void {
      this.root.addWord(word);
   }

   search(word: string): boolean {
      return this.dfs(word, this.root, 0);
   }

   dfs(
      word: string,
      current: TrieNode = this.root,
      index: number = 0
   ): boolean {
      if (word.length === index) {
         return current.isWord;
      }

      const char = word[index];

      if (char === '.') {
         for (const value of current.children.values()) {
            if (this.dfs(word, value, index + 1)) {
               return true;
            }
         }

         return false;
      }

      // otherwise we should check if the current character is in the map
      if (!current.children.has(char)) {
         return false;
      }

      return this.dfs(word, current.children.get(char)!, index + 1);
   }
}

export { WordDictionary };
