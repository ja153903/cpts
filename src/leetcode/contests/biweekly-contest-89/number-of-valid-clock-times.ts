function countTime(time: string): number {
  let times = generateAllTimes();
  // we can generate all the times
  // then based on the question mark we can match them
  // we can filter based on known values
  const isAllQuestionMark = [0, 1, 3, 4].every((index) => time[index] === '?');
  if (isAllQuestionMark) {
    return times.length;
  }

  const validIndices = [0, 1, 3, 4].filter((index) => time[index] !== '?');

  return times.filter((_time) => {
    return validIndices.every((index) => _time[index] === time[index]);
  }).length;
}

function generateAllTimes() {
  const result: string[] = [];

  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
      result.push(
        `${hour < 10 ? 0 : ''}${hour}:${minute < 10 ? 0 : ''}${minute}`
      );
    }
  }

  return result;
}

export { countTime };
