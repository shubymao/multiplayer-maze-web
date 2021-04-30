import React, { KeyboardEventHandler, LegacyRef } from 'react';

interface CanvasProps {
  onKeyDown?: KeyboardEventHandler<HTMLCanvasElement>;
  onKeyUp?: KeyboardEventHandler<HTMLCanvasElement>;
  size: number;
}

const Canvas = React.forwardRef(
  (props: CanvasProps, ref: LegacyRef<HTMLCanvasElement>): JSX.Element => {
    const { size, onKeyUp, onKeyDown } = props;
    return (
      <canvas
        tabIndex={0}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        ref={ref}
        width={size}
        height={size}
        className="bg-white"
      />
    );
  }
);

Canvas.defaultProps = {
  onKeyDown: () => true,
  onKeyUp: () => true
};

export default Canvas;
