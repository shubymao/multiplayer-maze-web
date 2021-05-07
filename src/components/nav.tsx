import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import LINKS from '../constants';

const Nav: FC = () => {
  const items = LINKS;
  return (
    <div className="flex justify-center flex-wrap space-x-5 text-white">
      {items.map((item) => {
        return item.url.charAt(0) === '/' ? (
          <Link className="mt-2 hover:text-green-500" key={item.name} to={item.url}>
            {item.name}
          </Link>
        ) : (
          <a href={item.url} key={item.name} className="mt-2 hover:text-green-500">
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default Nav;
