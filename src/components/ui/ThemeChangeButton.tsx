// import BaseButton from "./BaseButton";
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeChangeButton = () => {
  const { changeTheme } = useContext(ThemeContext);

  return <button onClick={changeTheme}>Change Theme</button>;
};

export default ThemeChangeButton;
