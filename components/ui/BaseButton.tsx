import { FC } from 'react';
import { BaseButtonProps } from '../types/interfaces';

const BaseButton: FC<BaseButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const buttonClass = `btn ${variant} ${className || ''}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
