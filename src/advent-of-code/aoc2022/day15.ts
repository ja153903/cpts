import { sample, real } from './data/day15';

type Data = {
   beacon: {
      x: number;
      y: number;
   };
   sensor: {
      x: number;
      y: number;
   };
};

function parseData(isSample: boolean): Data[] {
   const input = isSample ? sample : real;

   // let xMin = Number.POSITIVE_INFINITY;
   // let xMax = Number.NEGATIVE_INFINITY;
   // let yMin = Number.POSITIVE_INFINITY;
   // let yMax = Number.NEGATIVE_INFINITY;

   const data = input.split('\n').map((line) => {
      const [sensorInfo, beaconInfo] = line.split(': ');
      const sensor = sensorInfo.split(' ');
      const beacon = beaconInfo.split(' ');

      const [_a, _b, sx, sy] = sensor;
      const [_c, _d, _e, _f, bx, by] = beacon;

      const beaconX = parseInt(bx.split('=')[1].slice(0, -1));
      const beaconY = parseInt(by.split('=')[1]);

      const sensorX = parseInt(sx.split('=')[1].slice(0, -1));
      const sensorY = parseInt(sy.split('=')[1]);

      // xMax = Math.max(xMax, beaconX, sensorX);
      // xMin = Math.min(xMin, beaconX, sensorX);
      //
      // yMax = Math.max(yMax, beaconY, sensorY);
      // yMin = Math.min(yMin, beaconY, sensorY);

      return {
         beacon: {
            x: beaconX,
            y: beaconY,
         },
         sensor: {
            x: sensorX,
            y: sensorY,
         },
      };
   });

   return data;
}
function part1(isSample: boolean = false): number {
   const data = parseData(isSample);
   return 0;
}

function part2(isSample: boolean = false): number {
   const data = parseData(isSample);
   return 0;
}

export { part1, part2 };
