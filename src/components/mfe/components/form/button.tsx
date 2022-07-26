import React from 'react';
import classnames from 'classnames';

type ButtonProps = {
  text: string,
  handleClick: () => void,
  icon?: string,
  isLoading: boolean,
  isDisabled: boolean,
};

function Button({ text, handleClick, icon, isLoading, isDisabled }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={handleClick}
      className={classnames(
        ' text-white pt-3 pb-3 pl-5 pr-5 rounded-md flex items-center justify-center gap-2',
        {
          'bg-purple-dark-text': !isDisabled,
          'bg-purple-dark': isDisabled,
        }
      )}
      disabled={isLoading}
    >
      {icon && <img src={icon} alt="Icon" />}
      {text}
    </button>
  );
}

export default Button;
