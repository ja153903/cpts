import { real, sample } from './data/day13';

type NestedInteger = number | NestedInteger[];
function parseIntoPairs(isSample: boolean): NestedInteger[][][] {
  const data = isSample ? sample : real;
  return data
    .split('\n\n')
    .map((pair) => pair.split('\n'))
    .map((pair) => pair.map((p) => eval(p)));
}

function comparePair(pair: NestedInteger[][]): [boolean, boolean] {
  const [left, right] = pair;

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const currentLeft = left[leftIndex];
    const currentRight = right[rightIndex];

    const currentLeftType = typeof currentLeft;
    const currentRightType = typeof currentRight;

    if (currentLeftType === 'number' && currentRightType === 'number') {
      if (currentLeft < currentRight) {
        return [true, false];
      } else if (currentLeft > currentRight) {
        return [false, false];
      } else {
        leftIndex++;
        rightIndex++;
      }
    } else if (currentLeftType !== 'number' && currentRightType !== 'number') {
      const [isRightOrder, isEqual] = comparePair([
        currentLeft as NestedInteger[],
        currentRight as NestedInteger[],
      ]);

      if (isEqual) {
        leftIndex++;
        rightIndex++;
      } else {
        return [isRightOrder, isEqual];
      }
    } else if (currentLeftType !== 'number' && currentRightType === 'number') {
      const [isRightOrder, isEqual] = comparePair([
        currentLeft as NestedInteger[],
        [currentRight],
      ]);

      if (isEqual) {
        leftIndex++;
        rightIndex++;
      } else {
        return [isRightOrder, isEqual];
      }
    } else {
      const [isRightOrder, isEqual] = comparePair([
        [currentLeft],
        currentRight as NestedInteger[],
      ]);

      if (isEqual) {
        leftIndex++;
        rightIndex++;
      } else {
        return [isRightOrder, isEqual];
      }
    }
  }

  const isRightOrder = leftIndex === left.length && rightIndex < right.length;
  const isEqual = leftIndex === left.length && rightIndex === right.length;

  return [isRightOrder, isEqual];
}

function part1(isSample: boolean = false): number {
  const pairs = parseIntoPairs(isSample);
  return pairs
    .map((pair, index) => {
      const [isRightOrder, isEqual] = comparePair(pair);
      if (isRightOrder && !isEqual) {
        return index + 1;
      } else {
        return 0;
      }
    })
    .reduce((accum, current) => accum + current, 0);
}

function part2(isSample: boolean = false): number {
  const items = parseIntoPairs(isSample)
    .reduce((accum, pair) => [...accum, ...pair], [[[2]], [[6]]])
    .sort((a, b) => {
      const [isRightOrder, isEqual] = comparePair([a, b]);
      if (isEqual) {
        return 0;
      } else if (isRightOrder) {
        return -1;
      } else {
        return 1;
      }
    });

  let start = 0;
  let end = 0;

  const startStringified = JSON.stringify([[2]]);
  const endStringified = JSON.stringify([[6]]);

  for (let i = 0; i < items.length; i++) {
    const currentStringified = JSON.stringify(items[i]);

    if (currentStringified === startStringified) {
      start = i + 1;
    }

    if (currentStringified === endStringified) {
      end = i + 1;
    }
  }

  return start * end;
}

export { part1, part2 };
