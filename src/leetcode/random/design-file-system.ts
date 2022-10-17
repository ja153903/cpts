class FileSystem {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  createPath(path: string, value: number): boolean {
    return this.root.addPath(path, value);
  }

  get(path: string): number {
    return this.root.getValue(path);
  }
}

class TrieNode {
  value: number | null;
  isPath: boolean;
  children: Map<string, TrieNode>;

  constructor(value?: number) {
    this.value = value ?? null;
    this.isPath = false;
    this.children = new Map();
  }

  addPath(path: string, value: number): boolean {
    if (path === '/' || path === '') {
      return false;
    }

    let current = this as TrieNode;

    const parts = path.split('/');

    for (let i = 0; i < parts.length; i++) {
      // if the path we're trying to add does not exist and that there is more to add
      // we have to return false
      if (i > 0 && i !== parts.length - 1 && !current.children.has(parts[i])) {
        return false;
      }

      if (!current.children.has(parts[i])) {
        current.children.set(parts[i], new TrieNode());
      }

      current = current.children.get(parts[i])!;
    }

    if (current.value !== null) {
      return false;
    }

    current.value = value;

    return true;
  }

  containsParent(parent: string): boolean {
    return this.children.has(parent);
  }

  getValue(path: string): number {
    if (path === '/' || path === '') {
      return -1;
    }

    let current = this as TrieNode;

    const parts = path.split('/');

    for (const part of parts) {
      if (!current.children.has(part)) {
        return -1;
      }

      current = current.children.get(part)!;
    }

    return current.value ?? -1;
  }
}

export { FileSystem };
