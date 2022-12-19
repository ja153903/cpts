type Time = {
  hour: number;
  minute: number;
};

function haveConflict(event1: string[], event2: string[]): boolean {
  let e1 = event1.map((time) => {
    const [hour, minute] = time.split(':');
    return {
      hour: parseInt(hour),
      minute: parseInt(minute),
    } as Time;
  });
  let e2 = event2.map((time) => {
    const [hour, minute] = time.split(':');
    return {
      hour: parseInt(hour),
      minute: parseInt(minute),
    } as Time;
  });

  if (!isLess(e1[0], e2[0])) {
    [e1, e2] = [e2, e1];
  }

  const hasNoConflict = isLess(e1[1], e2[0]);

  return !hasNoConflict;
}

function isLess(a: Time, b: Time): boolean {
  if (a.hour > b.hour) {
    return false;
  }

  if (a.hour === b.hour) {
    return a.minute < b.minute;
  }

  return true;
}

export { haveConflict };
