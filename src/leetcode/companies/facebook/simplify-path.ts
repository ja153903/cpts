function simplifyPath(path: string): string {
  // the path starts with a single slash
  // any two directories are separated by a single slash
  // the path does not end with a trailing /
  // the path only contains the directories on the path from the root
  // directory to the target file or directory (no periods or double periods)
  // what we want to do here is to keep track of a stack of paths
  let stack = new Array<string>();

  let end = 0;
  let current = '';

  while (end < path.length) {
    // we want to track the window of non zero values in the stack
    if (path[end] === '/') {
      if (stack.length > 0 && current === '..') {
        stack.pop();
      }

      if (current.length > 0 && current !== '.' && current !== '..') {
        stack.push(current);
      }

      current = '';
    } else {
      current += path[end];
    }

    end++;
  }

  if (stack.length > 0 && current === '..') {
    stack.pop();
  } else if (current.length > 0 && current !== '..' && current !== '.') {
    stack.push(current);
  }

  return `/${stack.join('/')}`;
}

export { simplifyPath };
