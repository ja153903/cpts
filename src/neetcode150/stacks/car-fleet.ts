type Car = { position: number; speed: number };

function carFleet(target: number, position: number[], speed: number[]): number {
   const cars: Car[] = position.map((pos, index) => ({
      position: pos,
      speed: speed[index],
   }));

   cars.sort((a, b) => b.position - a.position);

   // once we sort the cars by position, then what we want to do
   // is to figure out which of these cars will have to fit into a stack

   const stack: number[] = [];

   for (const car of cars) {
      const x = (target - car.position) / car.speed;
      if (
         stack.length === 0 ||
         (stack.length > 0 && x > stack[stack.length - 1])
      ) {
         stack.push(x);
      }
   }

   return stack.length;
}

export { carFleet };
