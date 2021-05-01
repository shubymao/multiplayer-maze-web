import React, { MouseEventHandler } from 'react';

interface LabelInputProp {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color: string;
  label: string;
}

const Button = (props: LabelInputProp): JSX.Element => {
  const { onClick, color, label } = props;
  return (
    <button
      className={`p-3 rounded-lg ${color} bg-opacity-90 hover:bg-opacity-100`}
      onClick={onClick}
      type="submit"
    >
      {label}
    </button>
  );
};

export default Button;
