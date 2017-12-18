import React from 'react';

const InputComponent = ({
  className,
  theme, // eslint-disable-line
  sheet, // eslint-disable-line
  type,
  inputRef,
  ...rest
}) => <input type={type} ref={inputRef} className={className} {...rest} />;

InputComponent.defaultProps = {
  type: 'text',
};

export default InputComponent;
