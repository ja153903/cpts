/**
 * Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task.
 * Tasks could be done in any order. Each task is done in one unit of time. For each unit of time,
 * the CPU could complete either one task or just be idle.
 *
 * However, there is a non-negative integer n that represents the cooldown period between two same tasks
 * (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
 *
 * Return the least number of units of times that the CPU will take to finish all the given tasks.
 */
function leastInterval(tasks: string[], n: number): number {
  // by the looks of it this problem should be a greedy problem
  // if we can get the ordering right, then we can get the least number of units of time
  // now the problem is figuring out that greedy solution
  // suppose that we have the following array of tasks: ["A","A","A","B","B","B"] where n = 2
  // this means that a task A can only be run every 2 units of time
  // To greedily work this problem, we should figure out which task occurs the most frequently
  // By doing this, we can figure out the proper spacing between each task and fill the rest in
  // accordingly.
  // In this case, we can see that "A" and "B" happens with the same frequency
  // this means that we can take either one.
  // So we place "A" with the following cadence: A _ _ A _ _ A _ _
  // Now we can get the next most frequent task "B" and place them as follows: A B _ A B _ A B _
  // From this we can trim down the idle times from the end such that we get the following: A B _ A B _ A B
  // This gets us our total of 8
  // if n === 0, then we know we can return the length of the task list

  // Suppose we have the following input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
  // We have the following frequencies: { A: 6, B: 1, C: 1, D: 1, E: 1, F: 1, G: 1 }
  // Then we can set "A" like the following: A _ _ A _ _ A _ _ A _ _ A _ _ A _ _
  // then we can set the rest as follows: A B C A D E A F G A _ _ A _ _ A
  return 0;
}

export { leastInterval };
