import { Direction } from '../type';
import { hasDirection } from './direction-util';
import {
  create2DArray,
  generateMaze,
  START_CORD,
  getNextCord,
  isOutOfBound
} from './maze-generator';

test('Generator creates a grid row of indicated size.', async () => {
  expect(await generateMaze(10)).toHaveLength(10);
});

test('Generator create a grid with indicated column size', async () => {
  const maze = await generateMaze(20);
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

test('Check maze created is solvable', async () => {
  const maze = await generateMaze(10);
  const stk = [START_CORD];
  const seen = create2DArray(10, false);
  let visitCount = 0;
  while (stk.length > 0) {
    const cord = stk.pop();
    if (cord !== undefined && !isOutOfBound(maze, cord)) {
      const { r, c } = cord;
      if (seen[r][c]) continue;
      seen[r][c] = true;
      visitCount++;
      if (!hasDirection(maze[r][c], Direction.TOP)) stk.push(getNextCord(cord, Direction.TOP));
      if (!hasDirection(maze[r][c], Direction.DOWN)) stk.push(getNextCord(cord, Direction.DOWN));
      if (!hasDirection(maze[r][c], Direction.LEFT)) stk.push(getNextCord(cord, Direction.LEFT));
      if (!hasDirection(maze[r][c], Direction.RIGHT)) stk.push(getNextCord(cord, Direction.RIGHT));
    }
  }
  expect(visitCount).toEqual(100);
});

test('There is more than 1 wall remaining', async () => {
  const maze = await generateMaze(10);
  let sum = 0;
  maze.forEach((row) =>
    row.forEach((cell) => {
      sum += cell;
    })
  );
  expect(sum).toBeGreaterThan(0);
});

test('Same seed return the same maze', async () => {
  const userSeed = 32156;
  const maze = await generateMaze(10, { userSeed });
  const maze2 = await generateMaze(10, { userSeed });
  expect(maze).toEqual(maze2);
});
