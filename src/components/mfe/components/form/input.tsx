import React from "react";
import classnames from "classnames";

type InputProps = {
  value: string;
  label: string;
  name: string;
  validationMessage?: string;
  hasError?: boolean;
  onChange: (e: any) => void;
};

function TextInput({
  value,
  label,
  name,
  onChange,
  validationMessage,
  hasError,
}: InputProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <label>{label}</label>
      </div>
      <div className="mb-2">
        <input
          type="text"
          name={name}
          className={classnames(
            " rounded border-1 p-3 text-grey-text xs-max:w-full xs-min:min-w-[250px]",
            {
              "border-grey-light-border": !hasError,
              "border-error-border": hasError,
            }
          )}
          value={value}
          onChange={onChange}
        />
      </div>
      {hasError && (
        <div className="validation text-error-text xs-max:w-full xs-min:max-w-[250px] text-sm">
          {validationMessage}
        </div>
      )}
    </div>
  );
}

export default TextInput;
