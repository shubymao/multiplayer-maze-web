import React, { createRef, useCallback, useEffect, useRef } from 'react';
import nipplejs, {
  EventData,
  JoystickManager,
  JoystickManagerOptions,
  JoystickOutputData
} from 'nipplejs';
import { Control } from '../type';

export const JOY_STICK_CONFIG: JoystickManagerOptions = {
  color: '#000000',
  threshold: 0.1,
  position: { top: '50%', left: '50%' },
  mode: 'static',
  dynamicPage: true
};

export interface JoyStickProps {
  size: number;
  onStick: (control: Control) => void;
  offStick: () => void;
}

const JoyStick = (props: JoyStickProps): JSX.Element => {
  const { size, onStick: onEventHandler, offStick: offEventHandler } = props;
  const myContainer = createRef<HTMLDivElement>();
  const manager = useRef<JoystickManager | null>(null);

  const onEvent = useCallback(
    (evt: EventData, data: JoystickOutputData): void => {
      const control: Control = { magnitude: (data.distance / size) * 2, angle: data.angle.radian };
      onEventHandler(control);
    },
    [onEventHandler, size]
  );

  useEffect(() => {
    const config = JOY_STICK_CONFIG;
    config.zone = myContainer.current as HTMLElement;
    config.size = size;
    manager.current = nipplejs.create(config);
    manager.current.on('move', onEvent);
    manager.current.on('end', offEventHandler);
    return () => {
      offEventHandler();
      manager.current?.off('move', onEvent);
      manager.current?.off('end', offEventHandler);
      manager.current?.destroy();
    };
  }, [manager, size, onEvent, offEventHandler, myContainer]);

  return (
    <div
      className="bg-white relative rounded-full"
      style={{ width: size + 5, height: size + 5 }}
      ref={myContainer}
    />
  );
};

export default JoyStick;
