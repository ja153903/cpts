class Bijection<K, V> {
  kv: Map<K, V>;
  vk: Map<V, K>;

  constructor() {
    this.kv = new Map();
    this.vk = new Map();
  }

  set(key: K, value: V) {
    this.kv.set(key, value);
    this.vk.set(value, key);
  }

  has(key: K, value: V): boolean {
    if (this.kv.has(key) && this.kv.get(key) !== value) {
      return false;
    }

    if (this.vk.has(value) && this.vk.get(value) !== key) {
      return false;
    }

    return true;
  }
}

export { Bijection };
