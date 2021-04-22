# Multiplayer Maze Web

## Motivation

This project was original a school project where student are asked to apply the knowledge they learn in designing a application that uses complex algorithm and data structure. Original variant only have the maze generation aspect with no multiplayer aspect. However, after I first finished the project, I was asked by a friend to investigated into how to integrate this application into a multiplayer game and converted it into a multiplayer game using the Firebase real time database system, FireStore.

## Technical Details

This is a web project I started in the early 2017 and now ported over to this repo after the recent refactoring to my website. This project offer user a typescript library to generate a NxN seeded-random maze using the recursive back tracking algorithm. Here is what a generated result might looks like.

<img src="https://github.com/shubymao/multiplayer-maze-web/blob/main/public/GeneratedMaze.png?raw=true" width="300" />

The library also allows the user to visualize the generation process by indicating a delay during the generation process and the current location of the backtracking can be visualized. 

<img src="https://github.com/shubymao/multiplayer-maze-web/blob/main/public/GeneratingMaze.png?raw=true" width="300" />


The generation Demo can be found at the root url of the demo page.