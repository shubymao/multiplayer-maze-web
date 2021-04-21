import {
  create2DArray,
  generateMaze,
  hasWall,
  START_CORD,
  Direction,
  getNextCord,
  isOutOfBound,
  isVisited
} from './maze-generator';

test('Generator creates a grid row of indicated size.', () => {
  expect(generateMaze(10)).toHaveLength(10);
});

test('Generator create a grid with indicated column size', () => {
  const maze = generateMaze(20);
  for (let i = 0; i < 20; i++) {
    expect(maze[i]).toHaveLength(20);
  }
});

test('Create 2d array create a correct type', () => {
  const numArr = create2DArray(15, 15);
  expect(typeof numArr[0][0]).toEqual('number');
  const boolArr = create2DArray(5, false);
  expect(typeof boolArr[0][0]).toEqual('boolean');
});

test('Create 2d array create a right size', () => {
  const arr = create2DArray(15, 15);
  expect(arr).toHaveLength(15);
  arr.forEach((col) => expect(col).toHaveLength(15));
});

test('Create 2d array of right value', () => {
  const arr = create2DArray(15, 15);
  expect(arr).toHaveLength(15);
  arr.forEach((col) => col.forEach((cell) => expect(cell).toEqual(15)));
});

test('Check maze created is solvable', () => {
  const maze = generateMaze(10);
  const stk = [START_CORD];
  const seen = create2DArray(10, false);
  let visitCount = 0;
  while (stk.length > 0) {
    const cord = stk.pop();
    if (cord !== undefined && !isOutOfBound(maze, cord) && !isVisited(seen, cord)) {
      const { r, c } = cord;
      seen[r][c] = true;
      visitCount++;
      if (!hasWall(maze[r][c], Direction.TOP)) stk.push(getNextCord(cord, Direction.TOP));
      if (!hasWall(maze[r][c], Direction.DOWN)) stk.push(getNextCord(cord, Direction.DOWN));
      if (!hasWall(maze[r][c], Direction.LEFT)) stk.push(getNextCord(cord, Direction.LEFT));
      if (!hasWall(maze[r][c], Direction.RIGHT)) stk.push(getNextCord(cord, Direction.RIGHT));
    }
  }
  expect(visitCount).toEqual(100);
});

test('There is more than 1 wall remaining', () => {
  const maze = generateMaze(10);
  let sum = 0;
  maze.forEach((row) =>
    row.forEach((cell) => {
      sum += cell;
    })
  );
  expect(sum).toBeGreaterThan(0);
});

test('Same seed return the same maze', () => {
  const maze = generateMaze(10, 32156);
  const maze2 = generateMaze(10, 32156);
  expect(maze).toEqual(maze2);
});
