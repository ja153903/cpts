function canVisitAllRooms(rooms: number[][]): boolean {
  const queue: number[] = [];
  const visited = new Set<number>();

  queue.push(0);
  visited.add(0);

  while (queue.length > 0) {
    const front = queue.shift() as number;
    const keySet = rooms[front];

    for (const key of keySet) {
      if (visited.has(key)) {
        continue;
      }

      queue.push(key);
      visited.add(key);
    }
  }

  return visited.size === rooms.length;
}

export { canVisitAllRooms };
