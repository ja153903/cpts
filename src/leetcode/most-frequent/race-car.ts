// We start at position 0 and speed +1
// At every point we get to make two moves:
// A => position += speed; speed *= 2;
// R => speed = -1 if speed > 0 else speed = 1
// we want to find the length of the shortest sequence to reach target
// this problem kind of screams BFS
function racecar(target: number): number {
   return -1;
}

// TODO: Figure out another solution here
// This solution times out.
type GraphNode = { position: number; speed: number; moves: number };

function racecarbf(target: number): number {
   // let's try this using BFS
   const queue = new Array<GraphNode>();
   // if we end back at a node we've already looked at, we should
   // stop the search on that node
   const visited = new Set<string>();

   queue.push({ position: 0, speed: 1, moves: 0 });

   while (queue.length) {
      const { position, speed, moves } = queue.shift() as GraphNode;

      if (position === target) {
         return moves;
      }

      const curKey = `position=${position},speed=${speed}`;
      visited.add(curKey);

      // accelerate
      const accelKey = `position=${position + speed},speed=${speed * 2}`;
      if (!visited.has(accelKey)) {
         queue.push({
            position: position + speed,
            speed: speed * 2,
            moves: moves + 1,
         });
      }

      // reverse
      const revKey = `position=${position},speed=${speed > 0 ? -1 : 1}`;
      if (!visited.has(revKey)) {
         queue.push({ position, speed: speed > 0 ? -1 : 1, moves: moves + 1 });
      }
   }

   return -1;
}

export { racecar, racecarbf };
