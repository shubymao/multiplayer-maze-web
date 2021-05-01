import { Control, Link } from './type';

const LINKS: Array<Link> = [
  { name: 'Home', url: 'https://shuby-mao.web.app/' },
  { name: 'Project Page', url: 'https://shuby-mao.web.app/projects/web-multiplayer-maze' },
  { name: 'Multiplayer Maze', url: '/online' },
  { name: 'Generator Demo', url: '/generator' },
  { name: 'Offline Maze', url: '/' }
];

export const IDLE_CONTROL: Control = { magnitude: 0, angle: 0 };

export default LINKS;
