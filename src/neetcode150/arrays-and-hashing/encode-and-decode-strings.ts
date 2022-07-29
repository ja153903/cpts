function encode(strs: string[]): string {
  return strs.map((str) => `${str.length}/${str}`).join('');
}

function decode(s: string): string[] {
  const result = new Array<string>();

  let i = 0;

  while (i < s.length) {
    // find index of slash
    const slashIndex = s.indexOf('/', i);
    const length = parseInt(s.substring(i, slashIndex));
    const str = s.substring(slashIndex + 1, slashIndex + length + 1);

    result.push(str);

    i = slashIndex + length + 1;
  }

  return result;
}

export { encode, decode };
