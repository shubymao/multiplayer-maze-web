import React, { FC, KeyboardEventHandler } from 'react';

export interface ContainerProps {
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onKeyUp?: KeyboardEventHandler<HTMLDivElement>;
  children: JSX.Element | Array<JSX.Element>;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const { children, onKeyDown, onKeyUp } = props;
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      className="w-full cursor-default min-h-screen bg-gray-700"
    >
      <div className="space-y-3 flex flex-col items-center p-4 text-white">{children}</div>
    </div>
  );
};

export default Container;
