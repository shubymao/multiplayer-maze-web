import React, { FC } from 'react';
import LINKS from '../constants';

const Nav: FC = () => {
  const items = LINKS;
  return (
    <div className="flex justify-center flex-wrap gap-4 text-white">
      {items.map((item) => {
        return (
          <a href={item.url} key={item.name} className="hover:text-green-500">
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default Nav;
