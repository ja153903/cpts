/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  return strs.map((str) => `${str.length}/${str}`).join('');
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  const result: string[] = [];
  let start = 0;

  while (start < s.length) {
    const indexOfSlash = s.indexOf('/', start);
    const length = parseInt(s.substring(start, indexOfSlash));
    const str = s.substring(indexOfSlash + 1, indexOfSlash + length + 1);
    result.push(str);

    start = indexOfSlash + length + 1;
  }

  return result;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

export { encode, decode };
