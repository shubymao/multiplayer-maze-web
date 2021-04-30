import React, { ChangeEventHandler } from 'react';

interface LabelInputProp {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const LabelInput = (props: LabelInputProp): JSX.Element => {
  const { value, onChange, label } = props;
  return (
    <div className="flex flex-col items-center">
      <p className="inline-block text-white text-lg">{label}</p>
      <input className="w-16 text-black" value={value} onChange={onChange} />
    </div>
  );
};

export default LabelInput;
