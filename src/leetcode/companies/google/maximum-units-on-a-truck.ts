function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((aRow, bRow) => {
    return bRow[1] - aRow[1];
  });

  let result = 0;

  while (truckSize > 0) {
    const first = boxTypes.shift();
    if (first != null) {
      const numBoxesAllowed = Math.min(first[0], truckSize);
      result += numBoxesAllowed * first[1];
      truckSize -= numBoxesAllowed;
    } else {
      break;
    }
  }

  return result;
}

export { maximumUnits };
