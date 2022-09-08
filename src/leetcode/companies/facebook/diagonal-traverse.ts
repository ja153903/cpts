function findDiagonalOrder(mat: number[][]): number[] {
  // a key observation we can make here is that
  // a value is on the same diagonal as another value
  // if the sum of their indices are the same
  const groupedByDiagonal = new Map<number, number[]>();

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (!groupedByDiagonal.has(i + j)) {
        groupedByDiagonal.set(i + j, []);
      }

      groupedByDiagonal.get(i + j)?.push(mat[i][j]);
    }
  }

  let result = [] as number[];

  for (const [key, value] of groupedByDiagonal.entries()) {
    if (key % 2 === 0) {
      value.reverse();
    }

    result = [...result, ...value];
  }

  return result;
}

export { findDiagonalOrder };
