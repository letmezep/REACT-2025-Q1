import BaseButton from './BaseButton';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeChangeButton = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <BaseButton
      className="theme-change__button"
      variant="primary"
      onClick={changeTheme}
    >
      Change theme
    </BaseButton>
  );
};

export default ThemeChangeButton;
