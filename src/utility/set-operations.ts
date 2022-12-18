export function isSame<T>(a: Set<T>, b: Set<T>): boolean {
  return a.size === b.size && [...a].every((item) => b.has(item));
}

export function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set([...a].filter((item) => b.has(item)));
}

export function union<T>(a: Set<T>, b: Set<T>): Set<T> {
  return new Set<T>([...a, ...b]);
}
