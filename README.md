# Multiplayer Maze Web

![CI Badge](https://github.com/shubymao/multiplayer-maze-web/actions/workflows/test.yml/badge.svg)

## Motivation

This project was original a school project where student are asked to apply the knowledge they learn in designing a application that uses complex algorithm and data structure. Original variant only have the maze generation aspect with no multiplayer aspect. However, after I first finished the project, I continue investigated into how to integrate this application into a multiplayer game and converted it into a multiplayer game using the Firebase real time database system.

## Demo

The demo can be found [here](https://shubymao.github.io/multiplayer-maze-web/)

## Features

### Maze Generation

- Visualize maze generation
- Provide variable parameters such as delay, size, and seed
- Indicator to show the traversal path.

### Offline Mode

- Infinite level generation
- Increasing difficulty
- Smooth animation
- On-screen joystick and keyboard support.

### Online Mode

- Support up to 50 concurrent players.
- Anonymous authentication (using firebase auth)
- Real time update of position and game state.

## Technical Details

This is a web project I started in the early 2017 and now ported over to this repo after the recent refactoring to my website. This project offer user a typescript library to generate a NxN seeded-random maze using the recursive back tracking algorithm. Here is a high level overview of the recursive traversal algorithm.

```js
function depthFirstSearch(cord: Cord): void {
  const dirs = getDirs();
  visit(cord);
  for (const dir of dirs) {
    const nextCord = getNextCord(cord, dir);
    if (!isOutOfBound(maze, nextCord) && !isVisited(nextCord)) {
      breakWall(maze, cord, dir);
      breakWall(maze, nextCord, getOppositeDir(dir));
      depthFirstSearchSync(nextCord);
    }
  }
}
```

## Class and APIs

### `generateMazeSync(size: number, userSeed?: number)`

- Main handler to generate the maze of given size, takes in an optional seed as initializer. Will generate a random seed if not provided.

### `async function generateMaze(size: number, params: Config)`

- Asynchronous version of the generation api. Used to apply delay to visualize the traversal pattern.

### `class Game`

The is the class that handles the game logic and the rendering of the game.

- `constructor(canvas: Canvas, level: number, seed?: number, pid?: string)`

    - constructor of the game class.

- `getMaze():Cell[][]`

    - get the underlying maze object.

- `getMyPlayer():Player`

    - get my player object

- `setOpponentsPos(positions: Map<string, Cord>): void`

  - set the opponents positions.

- `performMove(control: Control): void`

  - perform the move based on control object provided.

- `renderGame(): void`

  - render the game with the maze and players.

- `checkWin(): boolean`

  - check if my player reach the end.

### `class Multiplayer`

This is the class that over see the database listener and update the game value accordingly.

- `constructor(canvas: Canvas, onGameOver?: CallBack, callBack?: CallBack)`

  - constructor of the multiplayer game.

- `performMove(control: Control): void`

  - perform the move based on control object provided.

- `render(): void`

  - render the game on the canvas provided in the constructor.

- `cleanUp(): void`

  - remove all listener and remove my player from the database.

## Gallery

### Generated Maze

<img src="https://github.com/shubymao/multiplayer-maze-web/blob/main/public/generation.png?raw=true" width="300" />

### During Generation

<img src="https://github.com/shubymao/multiplayer-maze-web/blob/main/public/generate-indcator.png?raw=true" width="300" />

### Offline Gameplay

<img src="https://github.com/shubymao/multiplayer-maze-web/blob/main/public/offline-gameplay.png?raw=true" width="300" />

### Online Gameplay

<img src="https://github.com/shubymao/multiplayer-maze-web/blob/main/public/online-gameplay.png?raw=true" width="300" />
