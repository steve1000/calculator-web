import React from "react";

type InputProps = {
  value: string;
  label: string;
};

function SelectInput({ value, label }: InputProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <label className="font-bold">{label}</label>
      </div>
      <div className="mb-2">
        <select className="w-60 mr-2 border-grey-light-border border-1 rounded-md p-1">
          <option>{value}</option>
        </select>
      </div>
    </div>
  );
}

export default SelectInput;
