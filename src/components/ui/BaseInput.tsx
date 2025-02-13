import { FC } from 'react';
import { BaseInputProps } from '../../types.ts/interfaces';

const BaseInput: FC<BaseInputProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const buttonClass = `btn ${variant} ${className || ''}`;

  return (
    <input className={buttonClass} {...props}>
      {children}
    </input>
  );
};

export default BaseInput;
