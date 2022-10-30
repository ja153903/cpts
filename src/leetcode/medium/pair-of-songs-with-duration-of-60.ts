/**
 *
 * You are given a list of songs where the ith song has a duration of time[i] seconds.
 *
 * Return the number of pairs of songs for which their total duration in seconds is divisible by 60.
 * Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
 */
function bruteForce(time: number[]): number {
  let result = 0;

  // the simple solution here is to go through all possible pairs
  // and count the number of pairs
  const preprocessed = time.map((time) => time % 60);

  for (let i = 0; i < preprocessed.length; i++) {
    for (let j = i + 1; j < preprocessed.length; j++) {
      if ((preprocessed[i] + preprocessed[j]) % 60 === 0) {
        result++;
      }
    }
  }

  return result;
}

function numPairsDivisibleBy60(time: number[]): number {
  // how can we improve on the previous solution?
  // we can implement it like two sum
  let result = 0;
  const seen = new Map<number, number>();

  const preprocessed = time.map((time) => time % 60);

  for (let i = 0; i < preprocessed.length; i++) {
    const key = (60 - preprocessed[i]) % 60;
    // what is the target in this case?
    if (seen.has(key)) {
      result += seen.get(key) ?? 0;
    }

    seen.set(preprocessed[i], (seen.get(preprocessed[i]) ?? 0) + 1);
  }

  return result;
}

export { numPairsDivisibleBy60, bruteForce };
