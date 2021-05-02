import React, { MouseEventHandler } from 'react';

export interface ButtonProp {
  onClick: MouseEventHandler<HTMLButtonElement>;
  stl: string;
  hoverStl?: string;
  label: string;
}

const Button = (props: ButtonProp): JSX.Element => {
  const { onClick, stl, hoverStl, label } = props;
  return (
    <button
      className={`p-3 focus:outline-none rounded-lg ${stl} ${hoverStl}`}
      onClick={onClick}
      type="submit"
    >
      {label}
    </button>
  );
};

export default Button;
