class FileSystem {
  #root: FileSystemTrie;

  constructor() {
    this.#root = new FileSystemTrie();
  }

  createPath(path: string, value: number): boolean {
    return this.#root.addPath(path, value);
  }

  get(path: string): number {
    return this.#root.getValueOnPath(path);
  }
}

class FileSystemTrie {
  value: number | null;
  children: Map<string, FileSystemTrie>;

  constructor(value?: number) {
    this.value = value ?? null;
    this.children = new Map();
  }

  addPath(path: string, value: number): boolean {
    let root = this as FileSystemTrie;
    const parts = path.split('/').filter((part) => part.length > 0);
    const isMultiPartPath = parts.length > 1;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
    }

    return true;
  }

  getValueOnPath(path: string): number {
    let root = this as FileSystemTrie;
    const parts = path.split('/').filter((part) => part.length > 0);

    for (const part of parts) {
      if (!root.children.has(part)) {
        return -1;
      }

      root = root.children.get(part)!;
    }

    return root.value ?? -1;
  }
}

export { FileSystem };
