import { sample, real } from './data/day16';

type Node = {
  valve: string;
  flowRate: number;
  children: string[];
};

function buildGraph(isSample: boolean = false): Map<string, Node> {
  const input = isSample ? sample : real;

  const data = input.split('\n').map((line) => {
    const [valveInfo, tunnelInfo] = line.split('; ');
    const valveParts = valveInfo.split(' ');
    const valve = valveParts[1];
    const flowRate = parseInt(valveParts.at(-1)?.split('=')[1] ?? '0');

    const children = tunnelInfo.split(' ').slice(4).join(' ').split(', ');

    return {
      valve,
      flowRate,
      children,
    };
  });

  const graph = new Map<string, Node>();

  for (const node of data) {
    graph.set(node.valve, node);
  }

  return graph;
}

function part1(isSample: boolean = false) {
  const graph = buildGraph(isSample);

  return 0;
}

function part2(isSample: boolean = false) {
  const data = buildGraph(isSample);
}

export { part1, part2 };
