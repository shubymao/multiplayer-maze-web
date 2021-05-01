import React, { ChangeEventHandler } from 'react';

interface LabelInputProp {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const LabelInput = (props: LabelInputProp): JSX.Element => {
  const { value, onChange, label } = props;
  return (
    <div className="flex flex-col text-black items-center">
      <p className="inline-block text-white text-lg">{label}</p>
      <input
        className="w-16 text-center bg-gray-200 focus:bg-white"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LabelInput;
